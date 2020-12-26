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
          span.body-1  賞品(お菓子詰め合わせ）をご提供頂きました!!!
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
          span.body-1  賞品(リペア券、ピック）の割引をいただきました!
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
            span.body-1 よりライブ動画部門の賞品 (ビール）をご提供頂きました!!
      v-row
        v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-chip(
              class="ma-2"
              color="red"
              text-color="white"
            )
              | ご協賛
            a(href="https://twitter.com/komeya88") 米屋さん
            span.body-1 より米屋賞の品（チューハイ詰め合わせ）をご提供頂きました!!
        v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-chip(
              class="ma-2"
              color="red"
              text-color="white"
            )
              | ご協賛
            a(href="https://twitter.com/tempakyousuke2") てんぱさん
            span.body-1 より賞品（信州・丸山農園特製りんごジュース）をご提供頂きました!!
    v-row
      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline.red--text
              | 放送終了いたしました。本当にありがとうございました。
            //-   投票ページをオープンしておりますので、是非各エントリに対しての投票お願いします
            //- v-btn(@click="gotoVote()"
            //-   outlined
            //-   block
            //- )
            //-   | 投票ページ
    v-row
      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | 投票結果
            v-card-text
              div.headline
                a(href="https://youtu.be/IbjMAwLjhXk" target="_blank") 発表会動画はこちら
    v-row
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | ライブ動画賞 
          v-card-text
            div.title 1位: 日本アルプス弦楽団
            div.subtitle
              | 2位 鳩正宗
            div.subtitle
              | 3位 マーマレードボーイズ
            div.headline
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 演奏すごい賞
          v-card-text
            div.title.ma-2 1位: 雑貨屋フレイヴァー
            div.subtitle.ma-2
              | 2位 Deep Blue Boys
            div.subtitle.ma-2
              | 3位 Lonesome Garage Band
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | とにかく端的に好き賞
          v-card-text
            div.title.ma-2 1位: 米屋 with 原宿限界タピオカボーイズ
            div.subtitle.ma-2
              | 2位 雑貨屋フレイヴァー
              | まいばす
            div.subtitle.ma-2
              | 3位  コーラスウォーター
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 動画編集技術賞
          v-card-text
            div.title.ma-2 1位: Masaoka and Friends Band
            div.subtitle.ma-2
              | 2位 タピオカボーイズ
            div.subtitle.ma-2
              | 3位  Unripened Stringplunkers
              | まいばす
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 独創独自賞 
          v-card-text
            div.title.ma-2 1位: まいばす
            div.subtitle.ma-2
              | 2位 タピオカボーイズ
            div.subtitle.ma-2
              | 3位 Unripened Stringplunkers
              | まいばす
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 音声技術賞
          v-card-text
            div.title.ma-2 1位: ジャンクション
            div.subtitle.ma-2
              | 2位 まいばす
      v-col(cols=6)
        v-card
          v-card-title
            v-icon grade
            | ブルーグラス愛を感じる賞
          v-card-text
            div.title 1位: 扇町ボンバーズ
            div.subtitle
              | 2位 Master of Traditional Bluegrass

      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 心にしみた賞
          v-card-text
            div.title.ma-2 1位: コーラスウォーター
            div.subtitle.ma-2
              | 2位 まいばす
            div.subtitle.ma-2
              | 3位 扇町ボンバーズ
              | Lonesome Garage Band
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 主催者特別賞
          v-card-text
            div.title.ma-2 Deep Blue Boys
      v-col(cols=6)
        v-card
          v-card-title
            v-icon.ma-2 grade
            | 米屋賞
          v-card-text
            div.title.ma-2 Unripened Stringplunkers
      v-col(cols=12)
        v-card
          v-card-title
            | 入賞は逃しましたが…特筆したい個人エントリ
          v-card-text
            div.title.ma-2 Lonesome Garage Band
            | もひかん /
            | まるみ /
            | 引きこもりジジイ /
            | もっつ /
            | かみおか（おだ） /
            | Lingerie Douglas /
            | Hiroshi Masuda /
            | ゆうと /
            | 箸休め？Sacred

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
              v-expansion-panel
                v-expansion-panel-header
                  div.title.mt-2.font-weight-bold 
                    v-icon grade 
                    span.ma-2 {{ $t('komeyaAward') }}
                v-expansion-panel-content
                  div.subtitle-2.ma-4 {{ $t('descKomeyaAward') }}
                  div.subtitle-2.ma-4 {{ $t('komeyaAwardPrize') }}
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
 
    v-row
      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | 12月19日(土曜) 開催
              | タイムテーブルが決まりました
            v-card-text
              | エントリ放送時間帯は多少前後する可能性があります
              div.red--text
                | * 不備・漏れなどがありましたらお申し付けください →
                a(href='https://twitter.com/bluegrass_moon' target='_blank')
                  | @bluegrass_moon
              v-timeline(dense)
                v-timeline-item
                  v-card
                    v-card-title.headline
                      | 17:30
                    v-card-text
                      a(href="https://cluster.mu/" target='_blank') Cluster 
                      | フェスバーチャル会場の開場 （入退場自由）
                v-timeline-item
                  v-card
                    v-card-title.headline
                      | 18:15
                    v-card-text
                      | Youtube 放送開始
                      div.headline
                        a(href='https://youtu.be/8aQyxnLzbv8' target="_blank")
                          | https://youtu.be/8aQyxnLzbv8
                v-timeline-item
                  v-card
                    v-card-title
                      | 18:15 - 19:30 (順不同)
                    v-card-text
                      div.red--text * 時間帯内の一覧は放送順ではありません、ご注意ください
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | Lingerie Douglas
                          v-expansion-panel-content
                            | 本人は多分覚えて無いとはおもいますがドブロの巨匠Jerry Douglas氏からランジェリー ダグラスを名乗っても良いとのお許しを頂いているので今回はランジェリー ・ダグラスでエントリーします。 曲はオリジナルの”Island Christmas “とFlatt & Scruggsのドブロ弾きJosh Gravesの”Foggy mountain rock”です。
                        v-expansion-panel
                          v-expansion-panel-header
                            | BLUEST BELIEVERS
                          v-expansion-panel-content
                            | 2019年夏、東北大のブルーグラス信者たちによって結成されたフェスバンドです。 二十歳からアラフォーまで幅広い年齢層でお送りします☆ お前ら...心に宿った青い炎が消えないかぎり...信じることを...やめるんじゃねぇぞ...！ Don’t stop believing！！！
                        v-expansion-panel
                          v-expansion-panel-header
                            | もっつ
                          v-expansion-panel-content
                            | エセfoggy mountain breakdown(flatt&scruggsの初期バージョン)
                        v-expansion-panel
                          v-expansion-panel-header
                            | まるみ
                          v-expansion-panel-content
                            | ブルーグラスを始めてもう40年になってしまいました。典型的な下手の横好きですが、好きなので、体が動く限り続けたいと思います。Long Black Veilをソロで演奏させていただきました。トラディショナル曲のように聞こえますが、1950年代のレフティ・フリーゼルのカントリーヒット曲。ブルーグラス系はもちろん、The Bandはじめ多くのアーティストがジャンルを超えて取り上げています。珍しいところではミック・ジャガーも。Webまるみというサイトをやっています。ブルーグラスフェスが大好きで、がんばってフェススケジュールをフォローしています。今年はとても残念な年でしたが、来年はぜひ、フェス会場で皆様とお会いできますように！
                        v-expansion-panel
                          v-expansion-panel-header
                            | A-RISE
                          v-expansion-panel-content
                            | 調布で活躍する味のあるバンドです。リーダー アライの魂のこもった歌詞に惚れてください。下北沢「らうん」にてたまにライブしています。今回はその「らうん」での演奏を2曲，エントリーします。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 自由人 :-)
                          v-expansion-panel-content
                            | 2011年、音楽性の違いにより結成。個々の単独思想から生まれる自由な音楽がウリ。名大OBバンドとして細く長く活動しているが、その存在は広く知られてはいない。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Hiroshi Masuda
                          v-expansion-panel-content
                            | 還暦バンジョー弾き、増田と申します。クリスマスナンバー1曲「Sleigh Ride」と、還暦ギタリスト高橋新吾とのユニット「マスダスインゴ」によるBeatles Medleyをエントリーさせて下さい。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Two Crie Stringband
                          v-expansion-panel-content
                            | トゥークリエストリングバンドと読みます。実はバンドじゃなくてデュオです。 オールドタイムやフォークを中心にお届けします！ 今回はバンドで演奏できました！やったー！！ オールドタイムに興味を持った方はこちらのTwitterアカウントのフォローをぜひお願いします🙇‍♀️ → @OldTimeJP
                       
                v-timeline-item
                  v-card
                    v-card-title
                      | 19:30 - 21:00（順不同）
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | Lonesome Garage Band
                          v-expansion-panel-content
                            | Where is my destination?
                        v-expansion-panel
                          v-expansion-panel-header
                            | もひかん
                          v-expansion-panel-content
                            | 前回の楽しそうなご様子や、SNSで繋がる皆さんに背中を押して頂き14年振りにまたドブロを触ることになりました。 相当なブランクでお耳汚しとは思いますが、40の手習いを優しく見守って頂けたら幸いです。 曲は賛美歌のhow great thou art （というかロブアイクスのコピー）です。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Masaoka and Friends Band
                          v-expansion-panel-content
                            | 本当にごめんなさい、今回は大学の修士論文の中間発表などもあり忙しく、 皆さんが待ち望んでいた茶番タイムがありません…… でも参加はしたかったので時間を探して動画を撮りました。良ければ聞いて下さい。 締め切り日の朝に動画内でバンジョーの名前入れ忘れてることに気づいたんですけど普通に正岡が弾いてます。 動画内のあれは、実在のあれとなんも関係ないです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 引きこもりジジイ
                          v-expansion-panel-content
                            | 63歳で、一からアパラチアン・ダルシマーを学び直した、来年70歳になるジジイです。 アパラチアン・ダルシマーを、フラット・ピッキングとフィンガー・ピッキングで弾きます。 ドライヴのかかった、かっこいいブルーグラスの合間に、もたもた弾きます。休憩時間としてお使いください。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 扇町ボンバーズ
                          v-expansion-panel-content
                            | 北海道札幌を中心に活動しているバンドです。年齢、出身地、出身校、仕事も全く異なる社会人6名が、それぞれの好みやこだわりをぶつけ合い試行錯誤の日々。今年、参加予定だった旭川ブルーグラスフェスティバルが中止になってしまったので、はじめての動画配信にチャレンジしてみました。不慣れなところも多々ありますが、楽しんでいただければ幸いです。この動画は、札幌市文化芸術公演配信補助金「さっぽろアートライブ」という企画のために制作したもので、そちらの12曲フルバージョンは12月30日からYouTube上にて公開予定です。12月30日以降に「さっぽろアートライブ、扇町ボンバーズ」で検索して是非ご視聴ください。 撮影場所：珈琲・軽食ひいらぎ（札幌市中央区）会場の”ひいらぎ”は旭川ブルーグラスフェスティバルの主催・運営のお手伝いをしています。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 米屋 with 原宿限界タピオカボーイズ
                          v-expansion-panel-content
                            | 概念空間に舞い降りた究極の爽やかボーイズバンド。長く愛され，様々な形態変化を見せていったブルーグラスの「あの」名曲を我々なりの爽やかでバウンシーかつソリッドなアレンジでお届けします。お嫁さん募集中です。ナァ…どうャ…？
                        v-expansion-panel
                          v-expansion-panel-header
                            | ゴールデンロッドガールズ
                          v-expansion-panel-content
                            | 結成3年目のゆるふわガールズバンドです。聞いて楽しい&弾いて楽しい演奏を目指して、トラッド曲からポップな曲まで幅広く挑戦中です！がんばるぞ〜〜💪💪
                        v-expansion-panel
                          v-expansion-panel-header
                            | ゆうと
                          v-expansion-panel-content
                            | 1曲だけですが箸休めに…
                v-timeline-item
                  v-card
                    v-card-title
                      | 21:00 - 21:15
                    v-card-text
                      |  中入り（休憩） Cluster バーチャルイベント会場切り替えのため
                v-timeline-item
                  v-card
                    v-card-title
                      | 21:15 - 22:30 (順不同)
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | Unripened Stringplunkers
                          v-expansion-panel-content
                            | 結成10年ぐらいになるものの、『完熟することはない・いつまでも成長し続ける』という意味を込めて“Unripened Stringplunkers=まだ熟していない弦楽器弾きたち”笑
                            | ブルーグラスを破壊…ではなく、ブルーグラスを主軸として、様々なジャンル・空気感にチャレンジ中。
                            | 今回の Lockdown Fes への準備中、F2F 会議・練習をしないことにより幾度となく崩壊しかけましたが、映像と音声をゴリゴリに編集し無理くり完成させました。
                            | 個性の集大成をお楽しみいただければと思います。
                            | イカれたメンバをよろしくな!
                        v-expansion-panel
                          v-expansion-panel-header
                            | B-RISE
                          v-expansion-panel-content
                            | B-rise です。 なかなか室内で集まっての練習も憚られる日々、練習はもっぱら近所の公園。 憧れの名曲”Yankees revenge “を目指すも、撮影したものを見てみると、元曲にみなぎる殺気が感じられない､､､と言う事で”calm revenge “”穏やかな復讐”と言う題にしました。 最後まで聞いて頂ければ嬉しいです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 日本アルプス弦楽団
                          v-expansion-panel-content
                            | 京都のヨーデル娘を筆頭にしたヨーデル好きによるヨーデル好きのためのヨーデルをするバンド。 さあ、画面の前の皆さんもご一緒に、ヨロレイヒー！＼(^o^)／
                        v-expansion-panel
                          v-expansion-panel-header
                            | 箸休め?Sacred
                          v-expansion-panel-content
                            | 「ブルーグラスの背後にあるキリスト教の文脈の把握」
                            | 右耳：語り 左耳：ギター
                        v-expansion-panel
                          v-expansion-panel-header
                            | Copper Kettles
                          v-expansion-panel-content
                            | メンバーのほとんどは北大ブルーグラス研究会のOBです。Country Gentlemen の曲を中心に、他の曲もやるバンドです。18年と19年のフェスの動画をエントリーします。
                        v-expansion-panel
                          v-expansion-panel-header
                            | まいばす
                          v-expansion-panel-content
                            | 非日常の中で感じる日常と、日常の中で演出した非日常と、それらを内包して回っていく個人的生活について。
                        v-expansion-panel
                          v-expansion-panel-header
                            | れいじーぴっかーず
                          v-expansion-panel-content
                            | いつもお世話になっております。れいじーぴっかーずです。 前回はライブの動画でしたので今回はリモートで演奏を重ねてみました。 オリジナルのインスト曲で「五条別れ」といいます。 ドブロの池田が作曲しました。曲名は曲のモチーフを思いついた場所の地名から取りました。 短いですが結構な難曲です。頑張って演奏しましたのでみなさんに聴いていただきたいです。 どうぞよろしくお願いします。
                v-timeline-item
                  v-card
                    v-card-title
                      | 22:30 - 24:00（順不同）
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | 鳩正宗
                          v-expansion-panel-content
                            | 2009年結成。神戸を中心に活動中。Traditionalな曲から色物まで、いろんな曲やってます！New Grass Revivalが多め。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 雑貨屋フレイヴァー
                          v-expansion-panel-content
                            | 2007年、東北大ブルーグラス同好会の部室に居合わせた面々で結成。今ではそれぞれ社会人となり、家業の都合やメンバーの海外転勤などにより活動が少なくなっていましたが、今回リモートセッションで距離、時差の壁を越えて参加します。Lockdown fesのために新曲2曲を書き下ろしてきました！
                        v-expansion-panel
                          v-expansion-panel-header
                            | マーマレードボーイズ
                          v-expansion-panel-content
                            | みなさま 初めまして、大谷大学OBのマッキーです。 大谷大学OBのマッキーとひらりんが1年の時、「いつかツインギターのバンドを絶対組もう！」と言っていたが、 誰も参加する人がおらず、 残ったのはギター２つと野郎が２人、あとOOOが２本、、、、、、、、、、、、、、、 ギター初心者だった二人が切磋琢磨など一切せず！互いに好きなように楽しんだ３年間の一興として、楽しんでもらえれば幸いです。 野郎２人が自分達なりに、無い頭絞ったんで、生温かい目でみてもらえれば恐縮です。 それではお聞きください、「マーマレードメドレー♪」 マッキー
                        v-expansion-panel
                          v-expansion-panel-header
                            | コーラスウォーター
                          v-expansion-panel-content
                            | 名古屋を拠点に活動しています、コーラスウォーターと申します。主にブルーグラスの楽器編成で日本語のオリジナル曲を演奏しています。 今回はオンラインフェスに参加するにあたって、ブルーグラッサーにとって馴染み深い場所で（勝手に）演奏しました。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Master of Traditional Bluegrass 
                          v-expansion-panel-content
                            | MTB(Master of Traditional Bluegrass )を目指して活動を始めました！ fd テイター(安田) bj もっつ md アッキー gt 村田
                        v-expansion-panel
                          v-expansion-panel-header
                            | Deep Blue Boys
                          v-expansion-panel-content
                            | 歌、リズム、ハーモニー、そして楽器、全てがそこそこの出来で調和できたそこそこのバンドです。お楽しみください。
                        v-expansion-panel
                          v-expansion-panel-header
                            | ジャンクション
                          v-expansion-panel-content
                            | ブルーグラスに用いる楽器でサカナクションのアレンジを試みる実験的バンド お馴染みの楽器から出される音色で、表拍に強調を置いたテクノ・ダンスサウンドに挑戦します サウンドエンジニアリングガチ勢によるミックスは必聴です
                        v-expansion-panel
                          v-expansion-panel-header
                            | かみおか（おだ）
                          v-expansion-panel-content
                            | こんばんは。北大ブルーグラスOBのおだです。前回のフェスではかみおかwithぴぐもんとしてデュエットで参加しましたが、今回は1人で2曲やります。前回のオンラインフェスは顔の見えない動画が多かったので、顔芸で勝負します！バンドの方は、仲が悪くなって解散した…とかじゃありません。むしろ結婚しました。お祝い投票求む！！！！！！！
                        v-expansion-panel
                          v-expansion-panel-header
                            | 水木ゆうこ＆サウザンドリバー
                          v-expansion-panel-content
                            | 2020年第二回オンラインフェス参加用に再編集！H・M・フォーク村「小さな仲間フォーク・コンサート」水木ゆう子＆サウザンドリバーライブ演奏。ボーカル＆ギター：畠山和治、ハーモニー＆ベース：野口冨次郎、バンジョー：石切山平仁。尚、水木ゆうこ、荒井信夫、小島慎司は所用でお休み。演奏は三十数年前のものです。よろしくお願いします。

    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://docs.google.com/document/d/1-vRzkOKvFc-Fa-f1cmnAMRNJwMtL1QkEaLLh234LnXo/edit?usp=sharing')
              | 開催草案
              a(href='https://docs.google.com/document/d/15zlF7fmlSQeIL_9ha81tRp8lLPLiHH2wUloSW2t-Cww/edit?usp=sharing')  / Draft Plan (English Version)
      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     v-card-title.headline
      //-       a(href='https://youtu.be/qG7gwa3etrY')
      //-         | {{ $t('前回の様子（動画)') }}
      //-     v-card-text
      //-       | {{ $t('こんな感じというのを掴んでもらいたくて，前回の様子を短い動画にまとめました。') }}
      //-       | 本動画は Vol.2 開催までの限定公開となります。
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

      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | エントリー締め切りました
            //- v-card-title.headline {{ $t('openRegistration') }}
            //- v-btn(outlined block @click="gotoEntryList")
            //-   | エントリーリスト
            //- v-card-text(v-if="this.$firebase.currentUser")
            //-   v-btn(@click="gotoEntryForm()"
            //-     outlined
            //-     block
            //-   )
            //-     | {{ $t('entryForm') }}
            //- v-card-text(v-else)
            //-   | {{ $t('registrationNotice') }}
            //-   | {{ $t('registrationNotice2') }}
            //-   div
            //-     v-btn.mx-2(@click="gotoLogin()"
            //-       block
            //-       outlined
            //-     )
                  | LOGIN
    
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
