<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12, lg12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-img(
            class="white--text align-end"
            src="/blmf2023header.png"
          )
            v-card-title.headline
              | {{ fireTrans(event, 'title') }}
          v-card-text
            | {{ fireTrans(event, 'abstract') }}
            span.ma-4
              v-btn(v-for="locale in availableLocales" :key='locale' color='orange' outlined)
                nuxt-link(:key="locale" :to="switchLocalePath(locale)") {{ $t(locale) }}
    
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            | ブルーグラス音楽（Bluegrass Music)
          v-container(
            style="background-image: url('/bluegrass.png'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              div.ma-4
                div.white--text.body-1.ma-2
                  | ブルーグラスはアメリカ発祥の音楽ジャンルです。広い大地に芝 (Bluegrass) が広がる土地を背景に、
                  span.white--text.body-1.bold
                    a.white--text(href="https://www.youtube.com/watch?v=IJbkOL2YRL4")
                      | ビル・モンロー&ブルーグラスボーイズ（Bill Monroe & The Bluegrass boys）
                  | がインフルエンサーとなり世に広めました。
                  | アコースティック楽器とシンプルなコード進行を基盤とした、2ビートの疾走感、独特な歌唱とリズムによる寂寥感、速弾きやソロ交代による各楽器の魅せプレイなど、聞く人と演奏する人を虜にする魅力を持った音楽です。
                div.ma-2.white--text.body-1
                  | 近代においては楽器、リズムを含め様々に多様化しており、端的な意味でのルーツ・ミュージックにとどまらない、変化し続ける生きた音楽と言えます。  
    v-row
      v-col(cols=2)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2023fly1.png')
            v-img(src="/blmf2023fly1.png")
      v-col(cols=2)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2023fly2.png')
            v-img(src="/blmf2023fly2.png")
      v-col(cols=2)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2023fly3.png')
            v-img(src="/blmf2023fly3.png")
      v-col(cols=2)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2023fly4.png')
            v-img(src="/blmf2023fly4.png")
      v-col(cols=2)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2023fly5.png')
            v-img(src="/blmf2023fly5.png")
 
    //- v-row
    //-   v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       a(href='/onfes2021fly.png')
    //-         v-img(src="/onfes2021fly.png")

    v-row
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://docs.google.com/document/d/10vBFIZ0baMv_RcIMDBwfZhjlSUFG31N248M81--D5JA')
              | 開催草案 (DRAFT)
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://www.youtube.com/watch?v=zphlLUWIVpw&t=550s')
              | {{ $t('前回の様子（動画)') }}

      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
            //- v-card-title.headline
            //-   | エントリーは締切です!
      //-         | エントリーしていただいた方は、以下ページから動画アップロードを
      //-         | 2021-12-27 9:00 GMT	までしていただけます。
      //-         | よろしくお願いいたします!
      //-       v-btn(outlined block)
      //-         a.white--text(href="https://www.bluemoon.works/entries")
      //-           | エントリ編集ページ(要ログイン)

      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          // v-card-title.headline
          // | エントリー準備中
          v-card-title.headline {{ $t('openRegistration') }}
          // v-btn(outlined block @click="gotoEntryList")
          //  | エントリーリスト
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
                | LOGIN

    v-row
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-container(
      //-       style="background-image: url('/participate.png'); background-size: cover"
      //-     )
      //-       v-container(
      //-         style="background-color: rgba(80, 80, 80, 0.8);"
      //-       )
      //-         v-card-title.headline
      //-           a.white--text
      //-             | 視聴・参加方法 
      //-         div.ma-4
      //-           v-btn(outlined block)
      //-             a.white--text(href="https://www.bluemoon.works/participate.pdf")
      //-               | Clusterの使い方と YouTube / Twich 会場アクセス URL

      v-col(v-if="event.notice" cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline.red--text
            | {{ $t('notice') }}
          v-card-text
            | {{ fireTrans(event, 'notice') }}
      v-col(v-if="event.schedules" cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            | {{ $t('schedule') }}
          v-simple-table
            template
              tbody
                tr(v-for='item in event.schedules' :key='item.date')
                  td {{ fireTrans(item, 'date') }}
                  td {{ fireTrans(item, 'event') }}
          v-card-text
            | {{ fireTrans(event, 'scheduleNotice') }}
      v-col(v-if="event.aboutTimetable" cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            | {{ $t('aboutTimetable') }}
          v-card-text
            | {{ fireTrans(event, 'aboutTimetable' )}}
      v-col(v-if="event.ofuse" cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            v-icon attach_money
            | {{ $t('ofuse') }}
          v-card-text
            | {{ fireTrans(event, 'ofuse' )}}
            div
              a(href='https://ofuse.me/bgonfes') 
                | {{ $t('gotoOfuse') }} 
      //- v-col(cols=12)  
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | ご協賛
      //-     span.body-1 賞品（フルオーダーストラップ、がま口小物入れ）をご提供いただきます
      //-     v-container(
      //-       style="background-image: url('/mohikan-koubou.jpeg'); background-size: cover"
      //-       height="auto"
      //-     )
      //-       v-container(
      //-         style="background-color: rgba(80, 80, 80, 0.8);"
      //-       )
      //-         v-avatar.ma-2(size=64)
      //-           img(src="/m-icon.png")
      //-         a.white--text(href="https://mohikan1974.theshop.jp/")
      //-           | 工房もひかん（仮）
      //-         div.ma-4
      //-           div.white--text.body-1
      //-             | トニーライススタイルストラップなど、アメリカンヴィンテージスタイルを得意とするレザークラフト工房。
      //-           div.body-1
      //-             | 売れ線アイテムが苦手な、長距離大型トラック運転手の完全趣味片手間変態副業オンラインストアです。その代わり頂いたオーダーはどこよりも丁寧に製作致します。
      //- v-col(cols=12)  
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | ご協賛
      //-     span.body-1  賞品(リペア券、ピック）の割引をご提供いただきます
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
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | ご協賛
      //-     span.body-1  賞品(ロールケーキ2本セット）をご提供いただきます
      //-     v-container(
      //-       style="background-image: url('/hirasawa2.jpeg'); background-size: cover"
      //-       height="auto"
      //-     )
      //-       v-container(
      //-         style="background-color: rgba(80, 80, 80, 0.8);"
      //-       )
      //-         v-avatar.ma-2(size=64)
      //-           img(src="/hirasawa1.jpeg")
      //-         a.white--text(href="https://www.facebook.com/hirasawasweets/")
      //-           | 御菓子ひらさわ・パティスリーヒラサワ
      //-         div.ma-4
      //-           div.white--text.body-1
      //-             | 栃木県那須烏山市金井1-10-13 
      //-           div.body-1
      //-             | 栃木・烏山の和洋菓子店です。常時１００種類以上のお菓子を取り揃えております。新商品やイベントの情報など随時発信していきます☆
      //-           div.body-1
      //-             | 営業時間 8:00～19:00 / 水曜定休
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-chip(
      //-       class="ma-2"
      //-       color="red"
      //-       text-color="white"
      //-     )
      //-       | ご協賛
      //-     span.body-1  賞品(ボトル券）をご提供いただきます
      //-     v-container(
      //-       style="background-image: url('/rockeytop.jpeg'); background-size: cover"
      //-       height="auto"
      //-     )
      //-       v-container(
      //-         style="background-color: rgba(80, 80, 80, 0.8);"
      //-       )
      //-         v-avatar.ma-2(size=64)
      //-           img(src="/rockeytop.jpeg")
      //-         a.white--text(href="http://ginza-club.net/rocky-top/")
      //-           | Rocky Top (ロッキートップ)
      //-         div.ma-4
      //-           div.white--text.body-1
      //-             | 東京の老舗、ミュージックレストラン銀座ロッキートップは、ブルーグラス音楽のメッカとして世界的に知られているところです。
      //-             | 「ブルーグラスの父」ビルモンローが作り上げたこの素晴らしい音楽を生演奏という形で再現し、
      //-             | 魅力溢れるバンジョーやマンドリン、フィドル(バイオリン)、
      //-             | ドブロなどの音色を出来る限り多くの方にお伝えしたいと思っています。
      //-             | お食事もできて、ドリンク、フード、チャージ、共にリーズナブル！地下鉄・JRからも徒歩10分以内！
      //- v-row
      //-   v-col(cols=12)
      //-     v-card(color='rgb(100, 100, 100, 0.4)')
      //-       v-chip(
      //-         class="ma-2"
      //-         color="red"
      //-         text-color="white"
      //-       )
      //-         | ご協賛
      //-       a(href="https://twitter.com/tempakyousuke2") てんぱさん
      //-       span.body-1 より賞品（信州・丸山農園特製りんごジュース）をご提供頂きます
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
      //-       span.body-1 より「何か」をご提供頂きます
            
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            | Questions and Answers
          v-card-text
            v-expansion-panels
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('QAhowtoMakeVideos') }}
                v-expansion-panel-content
                  div {{ $t('QAhowtoMakeVideosAnswer') }}
                  div e.g.,
                    a(href='https://www.youtube.com/results?search_query=%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E5%85%B1%E6%BC%94%E3%81%AE%E4%BB%95%E6%96%B9')
                      | Youtube Tutorial
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('QAPrepareVideo') }}
                v-expansion-panel-content
                  div {{ $t('QAPrepareVideoAnswer') }}
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('QAVideoTooShort') }}
                v-expansion-panel-content
                  | {{ $t('QAVideoTooShortAnswer') }}
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('QAVideoKind') }}
                v-expansion-panel-content
                  | {{ $t('QAVideoKindAnswer') }}
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('QAPastVideo') }}
                v-expansion-panel-content
                  | {{ $t('QAPastVideoAnswer')}}
      
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      isExpand: [],
      event: {},
    }
  },
  computed: {
    expandMessage1() {
      return this.isExpand[0] ? '閉じる' : '開く'
    },
    expandMessage2() {
      return this.isExpand[1] ? '閉じる' : '開く'
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i !== this.$i18n.locale)
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
        if (this.event.status !== 'open') {
          this.$router.back()
        }
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    fireTrans(obj, str) {
      let transLocale
      if (this.$i18n.locale === 'ja') {
        transLocale = str
      } else {
        transLocale = str + '_' + this.$i18n.locale
      }
      if (transLocale in obj) {
        return obj[transLocale]
      } else {
        return obj[str]
      }
    },
    gotoEntryForm() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/entry/')
    },
    gotoEntryList() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/entries/')
    },
    gotoTimetable() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/timetable/')
    },
    gotoLogin() {
      const localePath = this.localePath('login')
      this.$router.push(localePath + '/')
    },
    gotoVote() {
      const localePath = this.localePath('events')
      this.$router.push(localePath + '/' + this.event.id + '/vote/')
    },
  },
}
</script>
