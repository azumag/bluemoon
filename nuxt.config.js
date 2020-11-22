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
        content: '今最もクールな ウェブとして 注目されているのが Bluemoon だ',
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
    extend(_config, _ctx) { },
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
          events: 'Events',
          openEvent: 'Opening Event',
          eventDescription: 'Information of events and registrations',
          ja: 'Japanese',
          scheduledEvent: 'Scheduled Events',
          finishedEvent: 'Finished Events',
          entries: 'Your own entries',
          openRegistration: 'Registration has been started',
          registrationNotice: 'Please login for registration',
          registrationNotice2: '',
          entryForm: 'Entry Form',
          entryDescription: 'You can edit/withdraw your entries after submission. It\'s available to multiple entries, however, notße that please avoid same band entry.',
          formNameHint: '(e.g., Band name)',
          formEntryLabel: 'Entry Name',
          formEmailHint: '* information/confirmation may be sent to you.',
          formEmailLabel: 'Your email address',
          formDescriptionLabel: 'Description of videos or your band.',
          formDescriptionHint: '(e.g., A bluegrass band formed in 2010. Centered on the guitar and vocals born from the leader\'s unique sense of rhythm, Characterized by an aggressive and bouncy sound that makes you can\'t help but move your body.)',
          formVideoTypeLabel: 'Registration Type',
          formVideoTypeCraftedLabel: 'The video taken for this event: approx. 15minutes of less',
          formVideoTypeLiveLabel: 'The video of past live performance: approx. 15minutes of less',
          formVideoTypeMixedLabel: 'Mixed: approx. 10',
          formVideoTypeNotice: 'Even if you don\'t have a video yet, you can upload it until the deadline',
          formFileURLLabel: 'URL for video (can be more than one if the total time is in a limitation)',
          formUploadLabel: 'Upload your video with form (available multiple uploadings)',
          formPublishAgreeLabel: 'Whether or not allowing us to publish the video for archive',
          formPublishAgreeNotice: 'If you allow archival publishing, it may be included in the videos that will be published as "festival footage" after the online festival',
          submit: 'Submit',
          registrationFinished: 'Thank you for your entry!',
          fileUploadError: 'File Upload Error',
          entryList: 'Your own entries',
          edit: 'Edit',
          withdraw: 'Withdraw',
          required: 'Requied',
          uploadedFiles: "Uploaded Files",
          delete: 'Delete'
        },
        ja: {
          welcome: 'yokoso',
          events: '行事',
          openEvent: '開催行事',
          eventDescription: '行事の情報・参加登録等',
          en: "English",
          scheduledEvent: '開催予定',
          finishedEvent: '終了',
          entries: 'あなたのエントリー',
          openRegistration: 'エントリー受付開始しました',
          registrationNotice: 'エントリーするにはログインして下さい🙇',
          registrationNotice2: 'エントリー管理のためログイン必須になっています，お手数ですがご協力下さい',
          entryForm: 'エントリーフォーム',
          entryDescription: '内容はエントリー送信後，「自分のエントリー」ページから編集・取り下げできます。一つのアカウントで複数のエントリーは可能ですが，同じ個人，同じバンドでの複数のエントリーは控えていただけると幸いです。',
          formNameHint: '（例）バンド名，個人名',
          formEntryLabel: 'エントリー名',
          formEmailHint: '主催から連絡や確認等行う場合があります',
          formEmailLabel: '連絡用メールアドレス',
          formDescriptionLabel: '紹介文，動画説明等',
          formDescriptionHint: '（例）\n2010年に結成されたブルーグラスバンド. リーダーの無二のリズム感から生まれるギター＆ボーカルを中心に、個性あふれるストリングスが絡み合って紡ぎ出される、思わず身体を動かさずにはいられなくなるアグレッシブでバウンシーなサウンドが特徴。',
          formVideoTypeLabel: 'エントリー動画の種類',
          formVideoTypeCraftedLabel: 'フェス用に作成した動画（15分程度）',
          formVideoTypeLiveLabel: '過去行われたライブの録画（10分程度）',
          formVideoTypeMixedLabel: '混在(10分程度）',
          formVideoTypeNotice: '※ 動画がまだなくとも締め切りまで更新可能・取り下げ可能ですので，ぜひまずエントリーを✍',
          formFileURLLabel: 'エントリー動画への URL（合計時間が枠内ならば複数可）',
          formUploadLabel: '直接アップロードする(複数選択可)',
          formPublishAgreeLabel: 'エントリー動画のアーカイブ公開を許可',
          formPublishAgreeNotice: '※ アーカイブ公開を許可すると，オンラインフェス終了後に「フェスのようす」として公開される動画の中に含まれる可能性があります',
          submit: 'エントリーする',
          registrationFinished: '参加登録しました',
          fileUploadError: 'ファイルアップロード時にエラーが起こりました',
          entryList: 'エントリーリスト',
          edit: '編集',
          withdraw: '取り消す',
          required: '必須項目です',
          uploadedFiles: "アップロード済ファイル",
          delete: '削除'
        },
      },
    },
  },
}
