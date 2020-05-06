<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-img(
            class="white--text align-end"
            height="200px"
            src="/entryedit-sm.jpg"
          )
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | 人気投票結果発表
          v-card-text.title.red--text
            | 1位：れいじーぴっかーず 31票
            div.subtitle-1.blue--text 賞品 リペア券 (リフレット)
          v-card-text.title
            | 2位：雑貨屋フレイヴァー 29票
            div.subtitle-1.blue--text 賞品 リペア券 (フレット擦り合わせ)
          v-card-text.title
            | 3位：The Unfamous Stringbusters 28票
            div.subtitle-1.blue--text 賞品 リペア券 (ギター・ナット交換)
            div.subtitle-1.blue--text もしくは特製アームレスト（Banjo, Mandolin用)
          v-card-text.title
            | 4位：コーラスウォーター 21票
            div.subtitle-1.blue--text 賞品 和牛券 (4,980円相当)
          v-card-text.title
            | 5位：賢者タイムズ 20票
            div.subtitle-1.blue--text 賞品 コロナビール1ダース
          v-card-text.title
            | 6位：まいちゃん feat.AIきりたん 15票
            div.subtitle-1.blue--text 賞品 特製ピック２枚セット
          v-card-text.title
            | 7位：ジャンクション
          v-card-text.title
            | 8位：八ヶ岳マウンテンボーイズ
          v-card-text.title
            | 9位：かみおかwithぴぐもん
          v-card-text.title
            | 10位：真・Masaokas' Band
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-text.title
            | 皆様エントリー及び投票へのご協力本当にありがとうございました。
            | 今回10位までは得票数が僅差だったため発表させていただきました。
            | また，10位以下のエントリーの得票数もかなり僅差であり，
            | 様々な基準でそれぞれの良いところに人気がでた結果となり，
            | 多様性を楽しんでいただけたのかなと嬉しく思っております。
            | 入賞エントリーの代表者の方々には，別途連絡させていただきます，よろしくお願いいたします。
</template>
