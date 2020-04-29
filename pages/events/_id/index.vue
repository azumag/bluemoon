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
            div.ma-2.text-lg-right -- Stay Home, Country Roads.
          v-card-text
            | {{ event.abstract }}
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          |  人気投票の賞品をご提供頂きました！
          v-container(
            style="background-image: url('/iwashita-mandolins.jpeg'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/i-icon.jpg")
              a.white--text(href="https://twitter.com/iwashita_md_gt")
                | Iwashita Mandolins & Guitars
              div.ma-4
                div.white--text.body-1
                  | 山梨県韮崎市の弦楽器工房
                div.body-1
                  | フラットマンドリン、アコースティックギターなどの製作や修理等
                div.body-1
                  | 営業時間 10:00～19:00 / 月曜定休
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 開催形式
          v-card-text
            | {{ event.performing_format }}
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 参加方法
          v-card-text
            | {{ event.howto }}
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline.red--text
            | 注意事項
          v-card-text
            | {{ event.notice }}
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 募集期間
          v-card-text
            | {{ event.registration_weeks }}
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 開催期間
          v-card-text.subtitle-1.font-weight-bold
            | {{ event.performing_weeks }}
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | エントリー作品人気投票
          v-card-text
            a.white--text(href="https://twitter.com/iwashita_md_gt")
                | Iwashita Mandolins & Guitars
            |  さんにご協賛頂き，人気投票の景品として以下をご提供いただきました！
            div.subtitle-1.ma-2.font-weight-bold
              div 1位 リペア券 リフレット
              div 2位 リペア券 フレット擦り合わせ
              div 3位 リペア券 ギター・ナット交換
              div.ml-8
                | もしくは，特製アームレスト（Banjo, Mandolin用)
            div
              | 3位までの入賞バンドには全員に
              span.red--text フラットピック 2mm エボニー or ローズ
              | もついてしまいます！！！
            div.ma-1
              | ※リペア券，アームレストはそれぞれ
              span.title.red--text 一点限りとなります
              | 五人組のバンドでの受賞であっても，一点限りの配送になりますので，ご了承よろしくお願いいたします
            span.title その他注意事項
            v-expansion-panels
              v-expansion-panel
                v-expansion-panel-header
                  | リペア券注意事項
                v-expansion-panel-content
                  div ・リペア券1枚につき楽器1本を対象に1度のみ利用可能とし、有効期限は当工房が廃業しない限り無期限とします。
                  div ・対象は1970年以降に製造された楽器に限らせていただきます。
                  div ・ご利用の際は予めリペア券ご利用の旨をご連絡の上、リペア券をケースに同梱して発送してください。
              v-expansion-panel
                v-expansion-panel-header
                  | 送料と発送について
                v-expansion-panel-content
                  div ・送料についてはリペア券のご利用に限り当工房の負担と致しますので着払いでご発送ください。ただし30万円以上の楽器の場合は発送時のみお客様負担で運送保険へのご加入をお願い致します。(ヤマト運輸のヤマト便がおすすめです)
                  div ・発送時は弦を完全に緩めハードケースに入れた上で段ボール箱に梱包して発送してください。(分からなければメールやお電話でご相談ください) インターネットで調べるとギター運送用の段ボール箱も販売されています。
              v-expansion-panel
                v-expansion-panel-header
                  div リペアについて
                v-expansion-panel-content
                  div 予め楽器の状態をお伝え頂くことも可能ですが、楽器到着後に実物を確認の上最終的な作業内容をご相談させて頂きます。
              v-expansion-panel
                v-expansion-panel-header
                  div リフレット券について
                v-expansion-panel-content
                  div 対象となる楽器の指板の材質やバインディングの有無については問いません。原則として元々のフレットと類似した形状のニッケルシルバーのフレットへの交換とさせて頂きます。また指板のアールについても元々の状態と同じ形状での修正とさせて頂きます。フレット交換に合わせてナットも牛骨で製作・交換致します。
              v-expansion-panel
                v-expansion-panel-header
                  div 擦り合わせ券について
                v-expansion-panel-content
                  div フレットの減り具合によっては擦り合わせでは対応出来ない場合があります。その場合はリフレットの1万円分の割引券としても使用できることとします。
              v-expansion-panel
                v-expansion-panel-header
                  div ナット交換券について
                v-expansion-panel-content
                  div 原則として牛骨材での製作・交換となります。Martinのようなナット底面が斜めのものも対象とします。
              | 以上、不明な点がございましたらリペア券ご利用の際にご相談ください。
            div.title.mt-2 人気投票の方法について
            hr
            div.ma-2
              | フェス放送後に
              span.red--text 投票ページをオープン
              | します。投票期間は GW 中とし，
              | 印象に残ったエントリーを二つ選び投票してください。
              | 同票だった場合，申し訳ありませんが抽選させていただき，
              | 漏れたほうのエントリ作品の賞品は繰り下げとします
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            nuxt-link(to='/events/2pbLysWMNdNXnSvgBNr2/qa')
              | Q and A
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
          v-card-text(v-if="this.$firebase.currentUser")
            v-btn(@click="gotoEntryForm(event)"
              outlined
              block
            )
              | エントリーフォームへ
          v-card-text(v-else)
            | エントリーするにはログインして下さい🙇‍♂️
            | エントリー管理のためログイン必須になっています，お手数ですがご協力下さい
            div
              v-btn.mx-2(@click="gotoLogin()"
                block
                outlined
              )
                | ログイン
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      isExpand: [],
      // TODO: fetch from firestore
      event: {
        id: '2pbLysWMNdNXnSvgBNr2',
        title: 'Bluegrass Lockdown Music Festival',
        abstract:
          'ブルーグラス演奏動画を募集し，ライブストリーミング配信を行う。家でちょっと撮ってみた動画，遠隔多重録音でメンバーと作ってみた動画，過去うまく行ったライブの演奏動画や，バンドで練習したけどお蔵入りになっていた曲などを気軽に投稿してもらいたい。普段，地理的要因や時間的要因等でメンバーが集まりづらくライブやフェスティバルのステージに露出が低いようなバンドや，コアすぎて目立ちにくい演奏などにもスポットが当たるような，外出都合をつけず，かつイベント的一体感のある，即時性と非同期性を両立するインターネットの良さを生かした一つのライブイベントの形式として開催し，ブルーグラスの発展に寄与したい。',
        performing_format:
          '【詳細検討・試行錯誤中】 エントリー動画をライブストリーミングで順次再生し放送する。バンドの紹介が下帯で流れる等や，参加者のリアルタイムコメント等できるだけ場の共有を意識した作りにしたい。 放送自体のアーカイブは期限付きで公開されるが，永続的には残さない。',
        howto:
          '1バンド（個人1人含む）15分以下の演奏動画を用意し，エントリーフォームにて登録する。動画はフォームのアップローダを利用するか， Youtube などにアップロード（限定公開推奨）した動画の URL をエントリフォームに記載する。動画容量が大きい場合は youtube を推奨する。',
        notice:
          '動画への出演者にはすべて了承を得ること。トラブルに対して開催者は責任はおいかねます',
        registration_weeks: '2020年4月14日〜2020年5月3日',
        performing_weeks: '2020年5月4日 19:00 - 2時間ほどを予定',
        contest: '検討中'
      }
    }
  },
  computed: {
    expandMessage1() {
      return this.isExpand[0] ? '閉じる' : '開く'
    },
    expandMessage2() {
      return this.isExpand[1] ? '閉じる' : '開く'
    }
  },
  methods: {
    gotoEntryForm(event) {
      this.$router.push('/events/' + event.id + '/entry/')
    },
    gotoLogin() {
      this.$router.push('/login/')
    }
  }
}
</script>
