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
              | {{ fireTrans(event, 'title') }}
            // - div.ma-2.text-lg-right -- Stay Home, Country Roads.
          v-card-text
            | {{ fireTrans(event, 'abstract') }}
            span.ma-4
              v-btn(v-for="locale in availableLocales" :key='locale' color='orange' outlined)
                nuxt-link(:key="locale" :to="switchLocalePath(locale)") {{ $t(locale) }}
 
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
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品をご提供頂きました
          v-container(
            style="background-image: url('/hirasawa2.jpeg'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/hirasawa1.jpeg")
              a.white--text(href="https://www.facebook.com/hirasawasweets/")
                | 御菓子ひらさわ・パティスリーヒラサワ
              div.ma-4
                div.white--text.body-1
                  | 栃木県那須烏山市金井1-10-13 
                div.body-1
                  | 栃木・烏山の和洋菓子店です。常時１００種類以上のお菓子を取り揃えております。新商品やイベントの情報など随時発信していきます☆
                div.body-1
                  | 営業時間 8:00～19:00 / 水曜定休
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品の割引をいただきました
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
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-chip(
              class="ma-2"
              color="red"
              text-color="white"
            )
              | ご協賛
            a(href="https://twitter.com/subhuman_2") まいちゃん
            span.body-1 よりライブ動画部門の賞品をご提供頂きました
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
                | LOGIN
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://docs.google.com/document/d/1-vRzkOKvFc-Fa-f1cmnAMRNJwMtL1QkEaLLh234LnXo/edit?usp=sharing')
              | 開催草案
              a(href='https://docs.google.com/document/d/15zlF7fmlSQeIL_9ha81tRp8lLPLiHH2wUloSW2t-Cww/edit?usp=sharing')  / Draft Plan (English Version)
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://youtu.be/qG7gwa3etrY')
              | {{ $t('前回の様子（動画)') }}
          v-card-text
            | {{ $t('こんな感じというのを掴んでもらいたくて，前回の様子を短い動画にまとめました。') }}
            | 本動画は Vol.2 開催までの限定公開となります。
      //- v-col(v-if="event.performing_format" ,cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       | 開催形式
      //-     v-card-text
      //-       | {{ event.performing_format }}
      v-col(v-if="event.howtoEntry" cols=12)
        v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | {{ $t('howtoEntry') }}
            v-card-text
              | {{ fireTrans(event, 'howtoEntry') }}
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
            | {{ $t('ofuse') }}
          v-card-text
            | {{ fireTrans(event, 'ofuse' )}}
            div
              a(href='https://ofuse.me/bgonfes') 
                | {{ $t('gotoOfuse') }} 
 
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            | Award (賞)
          v-card-text
            hr
            div.ma-2.pa-2
              | {{ $t('descriptionAward') }}
            div.ma-1.pa-2.red--text
              | {{ $t('noticeAward') }}
            hr
            v-expansion-panels
              v-expansion-panel
                v-expansion-panel-header
                  div.title.mt-2.font-weight-bold 
                    v-icon grade 
                    span.ma-2 {{ $t('liveVideoAward') }}
                v-expansion-panel-content
                  div.subtitle-2.ma-4 {{ $t('descLiveVideoAward') }}
                  div.subtitle-2.ma-4 {{ $t('liveVideoAwardPrize') }}
              v-expansion-panel
                v-expansion-panel-header
                  div.title.mt-2.font-weight-bold
                    v-icon grade 
                    span.ma-2 {{ $t('craftedVideoAward') }} 
                v-expansion-panel-content
                  div
                    | {{ $t('noticeCraftedAward') }}
                  v-simple-table
                    template
                      thead
                        tr
                          th {{ $t('awardTitle') }}
                          th {{ $t('prize') }}
                      tbody
                        tr
                          td {{ $t('superLike') }}
                          td {{ $t('repairTicket') }}
                        tr
                          td {{ $t('filmEditing') }}
                          td {{ $t('appleJuice')}}
                        tr
                          td {{ $t('musicTech') }}
                          td {{ $t('jindaijiBeer')}}
                        tr
                          td {{ $t('bluegrassLove') }}
                          td {{ $t('okashi') }}
                        tr
                          td {{ $t('creative') }}
                          td {{ $t('pick')}}
                        tr
                          td {{ $t('bestPerfomance') }}
                          td {{ $t('pick')}}
                        tr
                          td {{ $t('emotional') }}
                          td {{ $t('pick')}}
                        tr
                          td {{ $t('specialAward') }}
                          td {{ $t('soba')}}
            hr
            div.title.pa-2 {{ $t('notice') }}
            v-expansion-panels
              v-expansion-panel
                v-expansion-panel-header
                  | {{ $t('リペア券注意事項') }} (Sorry, This prize is only available for living person in Japan)
                v-expansion-panel-content
                  div.ma-2 提供元: 
                    a.blue--text(href="https://twitter.com/iwashita_md_gt")
                      | Iwashita Mandolins & Guitars
                  div.pa-2
                    div ・リペア券1枚につき楽器1本を対象に1度のみ利用可能とし、有効期限は当工房が廃業しない限り無期限とします。
                    div ・対象は1970年以降に製造された楽器に限らせていただきます。
                    div ・ご利用の際は予めリペア券ご利用の旨をご連絡の上、リペア券をケースに同梱して発送してください。
                  div.ma-2.font-weight-bold 送料と発送について
                  div.ma-2.pa-2
                    div ・送料についてはリペア券のご利用に限り当工房の負担と致しますので着払いでご発送ください。ただし30万円以上の楽器の場合は発送時のみお客様負担で運送保険へのご加入をお願い致します。(ヤマト運輸のヤマト便がおすすめです)
                    div ・発送時は弦を完全に緩めハードケースに入れた上で段ボール箱に梱包して発送してください。(分からなければメールやお電話でご相談ください) インターネットで調べるとギター運送用の段ボール箱も販売されています。
                  div.ma-2.font-weight-bold リペアについて
                  div.ma-2.pa-2
                    div 予め楽器の状態をお伝え頂くことも可能ですが、楽器到着後に実物を確認の上最終的な作業内容をご相談させて頂きます。
                  div.ma-2.font-weight-bold リフレットについて
                  div.ma-2.pa-2
                    div 対象となる楽器の指板の材質やバインディングの有無については問いません。原則として元々のフレットと類似した形状のニッケルシルバーのフレットへの交換とさせて頂きます。また指板のアールについても元々の状態と同じ形状での修正とさせて頂きます。フレット交換に合わせてナットも牛骨で製作・交換致します。
                  | 以上、不明な点がございましたらリペア券ご利用の際にご相談ください。
            
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
                  div {{ $t('QAPrepareVideo') }}
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
    gotoLogin() {
      const localePath = this.localePath('login')
      this.$router.push(localePath + '/')
    },
  },
}
</script>
