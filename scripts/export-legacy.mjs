/**
 * 旧システム(archive/nuxt-legacy)のFirestoreデータを静的JSONへエクスポートする。
 *
 * 旧Firebaseプロジェクト bluemoon-82c0b の entries / votes / events を
 * Firestore REST API(公開読み取り可)で取得し、
 * - publishAgree === true のエントリーのみ
 * - 個人情報(email, userId)を除去
 * した形で src/data/legacy/ 配下に書き出す。
 *
 * 実行: node scripts/export-legacy.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ID = 'bluemoon-82c0b';
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'legacy');

// 旧イベントID → メタ情報(旧サイトのURL/スケジュール情報から判別)
const EVENTS = {
  '2pbLysWMNdNXnSvgBNr2': { volume: 1, year: 2020, title: 'オンラインフェス' },
  'fe2ypz0gnDuSiY1t2KjG': { volume: 2, year: 2020, title: 'Bluegrass Lockdown Music Festival Vol.2' },
  'VTH7oiZR2vmMCPgcW8xC': { volume: 3, year: 2021, title: 'Bluegrass Lockdown Music Festival Vol.3' },
  'nWIe42DjxjQ4sircilRw': { volume: 4, year: 2022, title: 'Bluegrass Lockdown Music Festival Vol.4' },
};

function decodeValue(v) {
  if ('stringValue' in v) return v.stringValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('timestampValue' in v) return v.timestampValue;
  if ('arrayValue' in v) return (v.arrayValue.values ?? []).map(decodeValue);
  if ('mapValue' in v) {
    return Object.fromEntries(
      Object.entries(v.mapValue.fields ?? {}).map(([k, x]) => [k, decodeValue(x)]),
    );
  }
  return null;
}

async function fetchAll(collection) {
  const docs = [];
  let token = null;
  for (;;) {
    const params = new URLSearchParams({ pageSize: '300' });
    if (token) params.set('pageToken', token);
    const res = await fetch(`${BASE}/${collection}?${params}`);
    if (!res.ok) throw new Error(`GET ${collection} failed: ${res.status}`);
    const data = await res.json();
    for (const doc of data.documents ?? []) {
      const fields = Object.fromEntries(
        Object.entries(doc.fields ?? {}).map(([k, v]) => [k, decodeValue(v)]),
      );
      fields.__id__ = doc.name.split('/').pop();
      docs.push(fields);
    }
    token = data.nextPageToken ?? null;
    if (!token) break;
  }
  return docs;
}

const [events, entries, votes] = await Promise.all([
  fetchAll('events'),
  fetchAll('entries'),
  fetchAll('votes'),
]);

// 公開同意フラグを尊重し、個人情報を除いたエントリー
// - publishAgree === true のもの
// - publishAgree フィールド自体が存在しないもの(Vol.1=同意チェックボックス導入前。旧サイトで公開済み)
// - publishAgree === false は明示的な不同意のため除外
const consented = entries
  .filter((e) => e.publishAgree === true || e.publishAgree === undefined)
  .map((e) => ({
    id: e.__id__,
    eventId: e.eventId,
    name: e.name ?? '',
    description: e.description ?? '',
    fileURLs: String(e.fileURLs ?? '').trim(),
    fileNames: Array.isArray(e.fileNames) ? e.fileNames : [],
    videoType: e.videoType ?? null,
    // 旧フォームの誤字フィールド(indibivual)も吸収
    individual: e.individual ?? e.indibivual ?? null,
  }));

// 投票の正規化(entryKinds は JSON文字列の場合がある)
const normalizedVotes = votes.map((v) => {
  let entryKinds = v.entryKinds;
  if (typeof entryKinds === 'string') {
    try {
      entryKinds = JSON.parse(entryKinds);
    } catch {
      entryKinds = undefined;
    }
  }
  return {
    id: v.__id__,
    createdAt: v.createdAt ?? null,
    entryKinds: entryKinds && Object.keys(entryKinds).length ? entryKinds : undefined,
    entryIds: Array.isArray(v.entryIds) && v.entryIds.length ? v.entryIds : undefined,
  };
});

// イベントごとの集計(投票は同意済みエントリーへのもののみ)
const eventSummaries = {};
for (const [eventId, meta] of Object.entries(EVENTS)) {
  const eventEntries = consented.filter((e) => e.eventId === eventId);
  const entryIds = new Set(eventEntries.map((e) => e.id));
  const votesPerEntry = {};
  for (const vote of normalizedVotes) {
    const targets = vote.entryKinds
      ? Object.entries(vote.entryKinds)
      : (vote.entryIds ?? []).map((id) => [null, id]);
    for (const [kind, entryId] of targets) {
      if (!entryIds.has(entryId)) continue;
      const agg = (votesPerEntry[entryId] ??= { kinds: {}, total: 0 });
      agg.total += 1;
      if (kind) agg.kinds[kind] = (agg.kinds[kind] ?? 0) + 1;
    }
  }
  eventSummaries[eventId] = {
    event: { id: eventId, ...meta },
    entries: eventEntries,
    results: votesPerEntry,
  };
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(
  join(OUT_DIR, 'events.json'),
  JSON.stringify(
    Object.entries(EVENTS).map(([id, meta]) => ({ id, ...meta })),
    null,
    2,
  ) + '\n',
);
writeFileSync(
  join(OUT_DIR, 'entries.json'),
  JSON.stringify(consented, null, 2) + '\n',
);
writeFileSync(
  join(OUT_DIR, 'votes.json'),
  JSON.stringify(normalizedVotes, null, 2) + '\n',
);
writeFileSync(
  join(OUT_DIR, 'results.json'),
  JSON.stringify(
    Object.fromEntries(
      Object.entries(eventSummaries).map(([eventId, s]) => [eventId, s.results]),
    ),
    null,
    2,
  ) + '\n',
);

const summary = {
  exportedAt: new Date().toISOString(),
  source: `Firestore REST API (${BASE})`,
  entriesTotal: entries.length,
  entriesConsented: consented.length,
  votesTotal: votes.length,
  events: Object.entries(EVENTS).map(([id, meta]) => ({
    id,
    ...meta,
    entries: eventSummaries[id].entries.length,
    votesCast: Object.values(eventSummaries[id].results).reduce((a, b) => a + b.total, 0),
  })),
};
writeFileSync(join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');

console.log(JSON.stringify(summary, null, 2));
