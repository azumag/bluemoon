import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_version,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ブルーグラスフェス/エントリーシステム',
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@bluegrass_moon',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@azumag',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.bluemoon.works/bluemoon_icon.png',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.bluemoon.works/bluemoon_icon.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/firebase',
    '@/plugins/firebase-auth',
    '@/plugins/nuxt-client-init.js',
    '@/plugins/autolink.js',
    '@/plugins/message',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    [
      '@nuxtjs/dotenv',
      {
        filename:
          process.env.NODE_ENV !== 'production'
            ? './config/.env.dev'
            : './config/.env.prod',
      },
    ],
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      dark: true,
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(_config, _ctx) {},
  },
  buildModules: ['@nuxt/typescript-build'],
  server: {
    host: '0.0.0.0',
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        en: {
          welcome: 'Welcome',
          notice: 'Notice',
          ofuse: 'To give money',
          superLike: 'Super Like Award',
          awardTitle: 'Award title',
          bestPerfomance: 'Best Performance Award',
          emotional: 'Emotional Award',
          specialAward: 'Special Award',
          noticeCraftedAward:
            'For each crafted video entry, ask for the following votes, and the one with the highest number of votes will be the prize.',
          prize: 'Prize',
          repairTicket: 'Iwashita Mandolins & Guitars Repair Ticket (Re-FLET)',
          liveVideoAward: 'Live Video Award',
          liveVideoAwardPrize: 'Prize: Bluemoon Beer',
          craftedVideoAward: 'Crafted Video Award',
          descLiveVideoAward:
            'The most popular entry out of the live video entries will be chosen in the voting.',
          QAPrepareVideo: 'Should we make an entry after preparing the movie?',
          QAPrepareVideoAnswer: 'Entry first, Upload second  is acceptable.',
          QAVideoTooShort: 'The movie is too short, would it be acceptable?',
          QAVideoTooShortAnswer:
            'Of course yes! We are very glad for you to make an entry even one song, or one minute.',
          QAVideoKind: 'What kind of video is accepted?',
          QAVideoKindAnswer:
            'There is no strict rule. Basically, we will accept whatever the player claims “Bluegrass”. Family music such as Irish music, old time music will also be welcomed.',
          QAPastVideo: 'Is that OK to entry with already published videos?',
          QAPastVideoAnswer:
            'Absolutelly Yes except for entried videos in past festival.',
          okashi: 'Macaron & Baked Sweets from the patisserie Hirasawa',
          creative: 'Creative & Originality Award',
          pick: 'Iwashita Mandolins & Guitars Original Wooden pick',
          descriptionAward:
            'Conduct a popularity contest for each entry. The voting page will be opened after the festival broadcast. The voting period will last three days, and you can vote for your most memorable entry from a variety of prizes. The first place winner of each award will receive a prize. In the event of a tie, we will draw for the prize. There is only one prize per entry and multiple prizes will be applied in a drawing.',
          noticeAward:
            'Each prize is limited to one piece. Even if your band is made up of five members, only one prize will be delivered.',
          gotoOfuse: 'Link to give money',
          QAhowtoMakeVideos: 'How to make entry videos?',
          QAhowtoMakeVideosAnswer: '',
          aboutTimetable: 'About the timetable',
          howtoEntry: 'How to entry',
          events: 'Events',
          komeyaAward: 'Komeya Award',
          descKomeyaAward:
            'The criteria is a secret... and well see what we can come up with!',
          komeyaAwardPrize: 'Some of canned shōchū highballs',
          openEvent: 'Opening Event',
          eventDescription: 'Information of events and registrations',
          ja: 'Japanese',
          filmEditing: 'Film Editing Award',
          appleJuice: 'Apple Juice',
          scheduledEvent: 'Scheduled Events',
          finishedEvent: 'Finished Events',
          entries: 'Your own entries',
          openRegistration: 'Registration has been started',
          registrationNotice: 'Please login for registration',
          musicTech: 'Music Mastering / Mixing Award',
          jindaijiBeer: 'Jindaiji Beer',
          registrationNotice2: '',
          bluegrassLove: 'Bluegrass Love Award',
          entryForm: 'Entry Form',
          entryDescription:
            "You can edit/withdraw your entries after submission. It's available to multiple entries, however, notße that please avoid same band entry.",
          formNameHint: '(e.g., Band name)',
          formEntryLabel: 'Entry Name',
          formEmailHint: '* information/confirmation may be sent to you.',
          formEmailLabel: 'Your email address',
          formDescriptionLabel: 'Description of videos or your band.',
          formDescriptionHint:
            "(e.g., A bluegrass band formed in 2010. Centered on the guitar and vocals born from the leader's unique sense of rhythm, Characterized by an aggressive and bouncy sound that makes you can't help but move your body.)",
          formVideoTypeLabel: 'Registration Type',
          formVideoTypeCraftedLabel:
            'The video taken for this event: approx. 15minutes of less',
          formVideoTypeLiveLabel:
            'The video of past live performance: approx. 15minutes of less',
          formVideoTypeMixedLabel: 'Mixed: approx. 10',
          formVideoTypeOnlineLabel: 'The video taken for this event: approx. 15minutes of less',
          formVideoTypeOfflineLabel: 'The video of past live performance: approx. 15minutes of less',
          formVideoTypeShortLabel: 'The video within 1 minutes',
          formVideoTypeNotice:
            "Even if you don't have a video yet, you can upload it until the deadline",
          soba: 'Jindaiji Soba & Special Pick',
          formFileURLLabel:
            'URL for video (can be more than one if the total time is in a limitation)',
          formUploadLabel:
            'Upload your video with form (available multiple uploadings)',
          formPublishAgreeLabel:
            'Whether or not allowing us to publish the video for archive',
          formPublishAgreeNotice:
            'If you allow archival publishing, it may be included in the videos that will be published as "festival footage" after the online festival',
          submit: 'Submit',
          registrationFinished: 'Thank you for your entry!',
          fileUploadError: 'File Upload Error',
          entryList: 'Your own entries',
          edit: 'Edit',
          withdraw: 'Withdraw',
          required: 'Requied',
          uploadedFiles: 'Uploaded Files',
          delete: 'Delete',
          update: 'UPDATE',
          deleteConfirmation: 'Cancel the entry, OK?',
          deleted: 'Withdrawed',
          deleteError: 'Error',
          updateEntry: 'Entry Updated',
          detail: 'Detail',
        },
        ja: {
          welcome: 'yokoso',
          specialAward: '主催者特別賞',
          soba: '深大寺そば & 特製ピック',
          noticeCraftedAward:
            '創作動画のエントリに対して、それぞれ以下の投票をしてもらい、その得票数数が最も多いものを賞とします',
          notice: '注意事項',
          liveVideoAward: 'ライブ動画賞',
          liveVideoAwardPrize:
            '賞品： クラフトビール　ブルームーン　（1ダース）',
          descLiveVideoAward:
            'ライブ動画エントリのうち最も人気のエントリが投票で選ばれます',
          noticeAward:
            '※ 賞品はそれぞれ一点限りとなります。五人組のバンドでの受賞であっても，一点限りの配送になりますので，ご了承よろしくお願いいたします',
          QAhowtoMakeVideos: '投稿動画の作り方がわからない',
          awardTitle: 'タイトル',
          filmEditing: '動画編集技術賞',
          repairTicket: 'Iwashita Mandolins & Guitars リペア券 (リフレット)',
          creative: '独創独自賞',
          prize: '賞品',
          appleJuice: '信州・丸山農園特製りんごジュース',
          musicTech: '音声技術賞',
          jindaijiBeer: '深大寺ビール',
          bluegrassLove: 'ブルーグラス愛を感じる賞',
          okashi: 'パティスリーヒラサワ様提供 マカロン＆焼き菓子詰め合わせ',
          QAhowtoMakeVideosAnswer:
            'YouTubeなどで多く説明動画を作ってくださっているので，これらの動画を参考にするとよいです',
          QAPrepareVideo: '動画を用意してからエントリーすべき？',
          superLike: 'とにかく端的に好き賞',
          QAPrepareVideoAnswer:
            '先にエントリーを作成してもらい，（URL欄にはその旨を記載）あとから編集ページでアップロードしてもらっても構いません！',
          QAVideoTooShort: '動画が時間に満たないのですが',
          QAVideoTooShortAnswer:
            '問題ありません！1曲でも1分でも，投稿いただけるだけで幸いです',
          QAVideoKind: 'どんな動画ならOK？',
          pick: 'Iwashita Mandolins & Guitars 特製木製ピック　人数分',
          bestPerfomance: '演奏すごい賞',
          emotional: '心にしみた賞',
          QAVideoKindAnswer:
            '一概にこれはダメ，これはよい，と規定はできません。基本的には投稿者がブルーグラスであると言い張ればブルーグラスとして受理します。また近縁であるようなアイリッシュ寄りのもの・オールドタイムも歓迎です。個人的にですが主催者はかなり攻めたものが好きだったりするので，かなりの範囲大丈夫と考えてもらってよいです。',
          QAPastVideo: '過去の動画でもよい？',
          craftedVideoAward: '創作動画賞',
          QAPastVideoAnswer:
            '過去にエントリーされた動画でなければ是非お願いいたします',
          descriptionAward:
            'エントリーごとへの人気投票を実施します。フェス放送後に投票ページをオープンします。投票期間は３日間で、 印象に残ったエントリーを様々な賞から選び投票してください。各賞の１位には賞品を贈呈いたします。同票だった場合，申し訳ありませんが抽選させていただきます。賞品は一エントリ一つのみで、複数賞受賞の場合は抽選で適用されます。',
          ofuse: 'お布施',
          gotoOfuse: '募金ページはこちら',
          aboutTimetable: 'タイムテーブルについて',
          howtoEntry: 'エントリー方法',
          events: '行事',
          openEvent: '開催行事',
          eventDescription: '行事の情報・参加登録等',
          en: 'English',
          scheduledEvent: '開催予定',
          finishedEvent: '終了',
          entries: 'あなたのエントリー',
          openRegistration: 'エントリー受付開始しました',
          registrationNotice: 'エントリーするにはログインして下さい🙇',
          registrationNotice2:
            'エントリー管理のためログイン必須になっています，お手数ですがご協力下さい',
          entryForm: 'エントリーフォーム',
          entryDescription:
            '内容はエントリー送信後，「自分のエントリー」ページから編集・取り下げできます。一つのアカウントで複数のエントリーは可能ですが，同じ個人，同じバンドの複数のエントリーは控えていただけると幸いです。',
          formNameHint: '（例）バンド名，個人名',
          formEntryLabel: 'エントリー名',
          formEmailHint: '主催から連絡や確認等行う場合があります',
          formEmailLabel: '連絡用メールアドレス',
          formDescriptionLabel: '紹介文，動画説明等',
          formDescriptionHint:
            '（例）\n2010年に結成されたブルーグラスバンド. リーダーの無二のリズム感から生まれるギター＆ボーカルを中心に、個性あふれるストリングスが絡み合って紡ぎ出される、思わず身体を動かさずにはいられなくなるアグレッシブでバウンシーなサウンドが特徴。',
          formVideoTypeLabel: 'エントリー動画の種類',
          formVideoTypeCraftedLabel: 'フェス用に作成した動画（15分程度）',
          formVideoTypeLiveLabel: '過去行われたライブの録画（10分程度）',
          formVideoTypeMixedLabel: '混在(10分程度）',
          formVideoTypeOnlineLabel: 'オンライン・ブルーグラス・アワード: 今回作成した動画（15分程度）',
          formVideoTypeOfflineLabel: 'オフライン・ブルーグラス・アワード: 過去の録画（10分程度）',
          formVideoTypeShortLabel: 'ショート・ブルーグラス・アワード: 1分以内の動画',
          formVideoTypeNotice:
            '※ 動画がまだなくとも締め切りまで更新可能・取り下げ可能ですので，ぜひエントリーを✍',
          formFileURLLabel:
            'エントリー動画への URL（合計時間が枠内ならば複数可）',
          formUploadLabel: '直接アップロードする(複数選択可)',
          formPublishAgreeLabel: 'エントリー動画のアーカイブ公開を許可',
          formPublishAgreeNotice:
            '※ アーカイブ公開を許可すると，オンラインフェス終了後のアーカイブに含まれます',
          submit: 'エントリーする',
          registrationFinished: '参加登録しました',
          fileUploadError: 'ファイルアップロード時にエラーが起こりました',
          entryList: 'エントリーリスト',
          edit: '編集',
          withdraw: '取り消す',
          required: '必須項目です',
          uploadedFiles: 'アップロード済ファイル',
          delete: '削除',
          update: '更新する',
          deleteConfirmation: 'エントリーを取り消します。よろしいですか',
          deleted: '取り消しました',
          deleteError: '取り消し中にエラーが発生しました',
          updateEntry: '更新しました',
          detail: '詳細',
          komeyaAward: '米屋賞',
          descKomeyaAward:
            'チャットコメントの数を集計/ 最もコメントが多かったエントリを表彰/ Cluster 側コメントは集計不可のため、youtube 側のみで判定（すみません）/ 集計対象期間は、当該エントリの説明が始まったときから担ぎエントリの説明が始まるまでの、エントリに関わるコメント（前エントリ用のコメントと思われるものは差し引く） ',
          komeyaAwardPrize: 'チューハイ詰め合わせ',
        },
      },
    },
  },
}
