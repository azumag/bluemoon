<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12, lg12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-img(
            class="white--text align-end"
            height="200px"
            src="/fes2-sm.jpg"
          )
            v-card-title.headline
              | {{ event.title }}
            // - div.ma-2.text-lg-right -- Stay Home, Country Roads.
          v-card-text
            | {{ event.abstract }}
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | 放送URL
      //-     span.title
      //-       a(href="https://www.youtube.com/watch?v=vah8gAsdyNA")
      //-         | 当日（5月4日19時から）こちらで放送を行います
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | ご協賛
      //-     span.body-1  人気投票賞品をご提供頂きました
      //-     v-container(
      //-       style="background-image: url('/iwashita-mandolins.jpeg'); background-size: cover"
      //-       height="auto"
      //-     )
      //-       v-container(
      //-         style="background-color: rgba(80, 80, 80, 0.8);"
      //-       )
      //-         v-avatar.ma-2(size=64)
      //-           img(src="/i-icon.jpg")
      //-         a.white--text(href="https://twitter.com/iwashita_md_gt")
      //-           | Iwashita Mandolins & Guitars
      //-         div.ma-4
      //-           div.white--text.body-1
      //-             | 山梨県韮崎市の弦楽器工房
      //-           div.body-1
      //-             | フラットマンドリン、アコースティックギターなどの製作や修理等
      //-           div.body-1
      //-             | 営業時間 10:00～19:00 / 月曜定休
    //-   v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       v-chip(
    //-         class="ma-2"
    //-         color="red"
    //-         text-color="white"
    //-       )
    //-         | ご協賛
    //-       span.body-1 司会時の BGM をご提供頂きました
    //-       v-container(
    //-         height="auto"
    //-       )
    //-         v-row
    //-           v-col(cols=3)
    //-             v-img.ma-2(
    //-               src="/california_blue_sky.png"
    //-               max-width="128"
    //-             )
    //-           v-col(cols=9)
    //-             a.white--text(href="https://docs.google.com/forms/d/e/1FAIpQLSfc6NUZ96XUlXwWPx6h-rV78QCI3vQ2zh1K8V5lwcFgo_WqqQ/viewform")
    //-               | マサオカのCD購入フォーム
    //-             div.white--text.body-1
    //-               | California Blue Sky 発売中です
    //- v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       v-chip(
    //-         class="ma-2"
    //-         color="red"
    //-         text-color="white"
    //-       )
    //-         | ご協賛
    //-       span.body-1 和牛券をご提供いただきました
    //-       v-container(
    //-         height="auto"
    //-       )
    //-         v-row
    //-           v-col(cols=1)
    //-             v-chip(
    //-               color="blue"
    //-               text-color="white"
    //-             )
    //-               | ザ
    //-           v-col(cols=11)
    //-             a.white--text(href="https://www.youtube.com/channel/UCZCCBbr93K5A92WU05wkWjg")
    //-               | ザウルスさんの youtube チャネル
    //-             div.white--text.body-1
    //-               | 音楽動画投稿やゲーム実況など！
    //- v-row
    //-   v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       v-chip(
    //-         class="ma-2"
    //-         color="red"
    //-         text-color="white"
    //-       )
    //-         | ご協賛
    //-       a(href="https://twitter.com/komeya88") 米屋さん
    //-       span.body-1 よりコロナビールをご提供いただきました
    v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          //- v-card-title.headline
          //-   | エントリー締め切りました
          v-card-title.headline {{ $t('openRegistration') }}
          //- v-btn(outlined block @click="gotoEntryList")
          //-   | エントリーリスト
          v-card-text(v-if="this.$firebase.currentUser")
            v-btn(@click="gotoEntryForm()"
              outlined
              block
            )
              | {{ $t('entryForm') }}
          v-card-text(v-else)
            | {{ $t('registrationNotice') }}
            | {{ $t('registrationNotice2') }}
            div
              v-btn.mx-2(@click="gotoLogin()"
                block
                outlined
              )
                | ログイン
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://docs.google.com/document/d/1-vRzkOKvFc-Fa-f1cmnAMRNJwMtL1QkEaLLh234LnXo/edit?usp=sharing')
              | 開催草案
          v-card-title.headline
            a(href='https://docs.google.com/document/d/15zlF7fmlSQeIL_9ha81tRp8lLPLiHH2wUloSW2t-Cww/edit?usp=sharing')
              | English Version
          v-card-text
            | 準備でき次第このページに概要を記載します。それまでは上記草稿を御覧ください
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://youtu.be/qG7gwa3etrY')
              | 前回の様子（動画）
          v-card-text
            | こんな感じというのを掴んでもらいたくて，前回の様子を短い動画にまとめました。
            | 本動画は Vol.2 開催までの限定公開となります。
        //-
    //-   v-col(v-if="event.performing_format" ,cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       v-card-title.headline
    //-         | 開催形式
    //-       v-card-text
    //-         | {{ event.performing_format }}
      //- v-col(v-if="event.howto" cols=12)
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       | 参加方法
      //-     v-card-text
      //-       | {{ event.howto }}
      //- v-col(v-if="event.notice" cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline.red--text
      //-       | 注意事項
      //-     v-card-text
      //-       | {{ event.notice }}
      //- v-col(v-if="event.schedule" cols=6)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       | スケジュール
      //-     v-card-text
      //-       | {{ event.schedule }}
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       | エントリー作品人気投票
      //-     v-card-text
      //-       a.white--text(href="https://twitter.com/iwashita_md_gt")
      //-           | Iwashita Mandolins & Guitars
      //-       |  さんにご協賛頂き，人気投票の景品として以下をご提供いただきました！
      //-       div.subtitle-1.ma-2.font-weight-bold
      //-         div 1位 リペア券 (リフレット)
      //-         div 2位 リペア券 (フレット擦り合わせ)
      //-         div 3位 リペア券 (ギター・ナット交換)
      //-         div.ml-8
      //-           | もしくは，特製アームレスト（Banjo, Mandolin用)
      //-       div
      //-         | 3位までの入賞作品には出演者全員に
      //-         span.red--text フラットピック 2mm エボニー or ローズ
      //-         | もついてしまいます！！！
      //-       div.ma-1
      //-         | ※リペア券，アームレストはそれぞれ
      //-         span.title.red--text 一点限りとなります
      //-         | 五人組のバンドでの受賞であっても，一点限りの配送になりますので，ご了承よろしくお願いいたします
      //-       span.title その他注意事項
      //-       v-expansion-panels
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | リペア券注意事項
      //-           v-expansion-panel-content
      //-             div ・リペア券1枚につき楽器1本を対象に1度のみ利用可能とし、有効期限は当工房が廃業しない限り無期限とします。
      //-             div ・対象は1970年以降に製造された楽器に限らせていただきます。
      //-             div ・ご利用の際は予めリペア券ご利用の旨をご連絡の上、リペア券をケースに同梱して発送してください。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 送料と発送について
      //-           v-expansion-panel-content
      //-             div ・送料についてはリペア券のご利用に限り当工房の負担と致しますので着払いでご発送ください。ただし30万円以上の楽器の場合は発送時のみお客様負担で運送保険へのご加入をお願い致します。(ヤマト運輸のヤマト便がおすすめです)
      //-             div ・発送時は弦を完全に緩めハードケースに入れた上で段ボール箱に梱包して発送してください。(分からなければメールやお電話でご相談ください) インターネットで調べるとギター運送用の段ボール箱も販売されています。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             div リペアについて
      //-           v-expansion-panel-content
      //-             div 予め楽器の状態をお伝え頂くことも可能ですが、楽器到着後に実物を確認の上最終的な作業内容をご相談させて頂きます。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             div リフレット券について
      //-           v-expansion-panel-content
      //-             div 対象となる楽器の指板の材質やバインディングの有無については問いません。原則として元々のフレットと類似した形状のニッケルシルバーのフレットへの交換とさせて頂きます。また指板のアールについても元々の状態と同じ形状での修正とさせて頂きます。フレット交換に合わせてナットも牛骨で製作・交換致します。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             div 擦り合わせ券について
      //-           v-expansion-panel-content
      //-             div フレットの減り具合によっては擦り合わせでは対応出来ない場合があります。その場合はリフレットの1万円分の割引券としても使用できることとします。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             div ナット交換券について
      //-           v-expansion-panel-content
      //-             div 原則として牛骨材での製作・交換となります。Martinのようなナット底面が斜めのものも対象とします。
      //-         | 以上、不明な点がございましたらリペア券ご利用の際にご相談ください。
      //-       hr
      //-       div.title.mt-2 4位賞品和牛券
      //-       a.white--text(href="https://www.youtube.com/channel/UCZCCBbr93K5A92WU05wkWjg")
      //-         | ザウルス
      //-       |  さんにご協賛頂き，人気投票の4位景品として，和牛券をご提供いただきました！
      //-       div.subtitle-1.ma-2.font-weight-bold
      //-         div 4位 和牛券 (4,980円相当)
      //-       v-expansion-panels
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 概要
      //-           v-expansion-panel-content.text--secondary
      //-             | 政府に代わり和牛券(4,980円相当)を提供いたします。
      //-             | 商品概要は本リンクを参照ください。
      //-             | 冷凍で宅配され、送料は無料です。
      //-             a(href="https://www.sagae29.jp/red02/?v=2&gclid=Cj0KCQjwtLT1BRD9ARIsAMH3BtWE5p9lE2wqeJZhGqpvddmGGE4Z0ZVep_osCGKmQRxDwb6iHJhHe8AaAh1MEALw_wcB&utm_expid=.JEmgEF_ySvi0oE1EBI8Nvw.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F")
      //-               | 山形牛 すきやき 上モモ
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 注意事項1
      //-           v-expansion-panel-content.text--secondary
      //-             div 4位となったバンドには連絡先をご連絡いただき、送付先を伝達いただく形になります。
      //-             div 個人情報の悪用は致しません。
      //-             div ご連絡ない場合は対象を5位→6位...と繰り下げ致します。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 注意事項2
      //-           v-expansion-panel-content.text--secondary
      //-             | また、恐縮ではございますがバンドにつき1商品とさせていただきます。受取手をよく相談の上ご連絡願います。
      //-             | メンバー間での争いの発生には責任を負いかねます。
      //-             | 加えて、新型コロナ収束前にバンドメンバーで鍋を囲む行為は本フェスの趣旨がよく分からんくなるのでお控えください。
      //-       div.title.mt-2 5位賞品コロナビール1ダース
      //-       a.white--text(href="https://twitter.com/komeya88")
      //-         | 米屋
      //-       |  さんにご協賛頂き，人気投票の５位景品として今流行の最新鋭ビール，コロナビールをご提供いただきました！
      //-       v-img(
      //-         src="/corona.jpg"
      //-         width=200
      //-       )
      //-       hr
      //-       div.ma-2
      //-         | フェス放送後に
      //-         span.red--text 投票ページをオープン
      //-         | します。投票期間は GW 中とし，
      //-         | 印象に残ったエントリーを二つ選び投票してください。
      //-         | 同票だった場合，申し訳ありませんが抽選させていただき，
      //-         | 漏れたほうのエントリ作品の賞品は繰り下げとします
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       | Questions and Answers
      //-     v-card-text
      //-       v-expansion-panels
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 動画を用意してからエントリーすべき？
      //-           v-expansion-panel-content
      //-             div 先にエントリーを作成してもらい，（URL欄にはその旨を記載）あとから編集ページでアップロードしてもらっても構いません！
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 動画が15分に満たないのですが
      //-           v-expansion-panel-content
      //-             | 問題ありません！1曲でも1分でも，投稿いただけるだけで幸いです
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | オールドタイム系はOK？
      //-           v-expansion-panel-content
      //-             | ブルーグラスの親戚のようなジャンルは歓迎します！（Dawg, Old Tyme, Irish, *Punk)
      //-             | また，奏者が「これはブルーグラス」と言い張る場合も歓迎します。
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | 過去の動画でもよい？
      //-           v-expansion-panel-content
      //-             | 是非お願いします
      //-         v-expansion-panel
      //-           v-expansion-panel-header
      //-             | エントリーできる動画がない
      //-           v-expansion-panel-content
      //-             | ぜひ多重録画アプリなどで作成してみてほしいです。
      //-             | 別ページの「
      //-             nuxt-link.blue--text(to='/howto/multi-recording')
      //-               | 多重録画アプリの紹介
      //-             |」を参考にぜひ。
      
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      isExpand: [],
      // TODO: fetch from firestore
      event: {},
      // event: {
      //   id: '2pbLysWMNdNXnSvgBNr2',
      //   title: 'Bluegrass Lockdown Music Festival Vol.2',
      //   abstract:
      //     'ブルーグラス演奏動画を募集し，一度にライブストリーミング配信します。Youtube Live + Cluster でのイベント開催を想定中です',
      //   performing_format:
      //     'エントリー動画をライブストリーミングで順次再生し放送する。バンドの紹介が下帯で流れる等や，参加者のリアルタイムコメント等できるだけ場の共有を意識した作りにしたい。 放送自体のアーカイブは期限付きで公開されるが，永続的には残さない。',
      //   howto:
      //     '1バンド（個人1人含む）15分以下の演奏動画を用意し，エントリーフォームにて登録する。動画はフォームのアップローダを利用するか， Youtube などにアップロード（限定公開推奨）した動画の URL をエントリフォームに記載する。動画容量が大きい場合は youtube を推奨する。',
      //   notice:
      //     '動画への出演者にはすべて了承を得ること。トラブルに対して開催者は責任はおいかねます',
      //   registration_weeks:
      //     '2020年4月14日〜2020年5月3日(グリニッジ標準時で日付が変わるまで。日本時間：5月4日午前9時)',
      //   performing_weeks: '2020年5月4日 19:00 - 2時間ほどを予定',
      //   contest: '検討中',
      // },
    }
  },
  computed: {
    expandMessage1() {
      return this.isExpand[0] ? '閉じる' : '開く'
    },
    expandMessage2() {
      return this.isExpand[1] ? '閉じる' : '開く'
    },
  },
  async mounted() {
    await this.$firestore
      .collection('events')
      .doc(this.$route.params.id)
      .get()
      .then((event) => {
        if (event.exists) {
          this.event = { id: event.id, ...event.data() }
        } else {
          console.log('error:', event)
          this.$router.back()
        }
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    gotoEntryForm() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/entry/')
    },
    gotoEntryList() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/entries/')
    },
    gotoLogin() {
      const localePath = this.localePath('login')
      this.$router.push(localePath + '/')
    },
  },
}
</script>
