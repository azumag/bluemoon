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
          v-card-text
            | {{ event.abstract }}
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
          v-card-text
            | {{ event.performing_weeks }}
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 人気投票等
          v-card-text
            | {{ event.contest }}
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
        performing_weeks: '2020年5月4日〜開催期間はエントリー数によって変動',
        contest: '検討中'
      }
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
