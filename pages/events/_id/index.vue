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
                  | がエモいインフルエンサーとなり世に広めました。
                  | アコースティック楽器とシンプルなコード進行を基盤とした、2ビートの疾走感、独特な歌唱とリズムによる寂寥感、速弾きやソロ交代による各楽器の魅せプレイなど、聞く人と演奏する人を虜にする魅力を持った音楽です。
                div.ma-2.white--text.body-1
                  | 近代においては楽器、リズムを含め様々に多様化しており、端的な意味でのルーツ・ミュージックにとどまらない、変化し続ける生きた音楽と言えましょう。  
    v-row
      v-col(cols=4)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2021-1-orig.png')
            v-img(src="/blmf2021-1.png")
      v-col(cols=4)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2021-2-orig.png')
            v-img(src="/blmf2021-2.png")
      v-col(cols=4)
        v-card(color='rgb(100, 100, 100, 0.4)')
          a(href='/blmf2021-3-orig.png')
            v-img(src="/blmf2021-3.png")

    v-row
      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | 12月29日(木曜) 開催
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
                      | 19:00 開場
                    v-card-text.headline
                      a.white--text(href="https://cluster.mu/e/f4c7c8b6-2704-4f49-a925-dcab36f541c7" target='_blank') 
                        | Cluster フェスバーチャル会場の開場 （入退場自由）
                    v-card-text.headline
                      a.white--text(href='https://www.youtube.com/watch?v=zphlLUWIVpw' target="_blank")
                        | Youtube
                    v-card-title.headline
                      a.white--text
                        | 視聴・参加方法のヘルプ 
                      div.ma-4
                        a.white--text(href="https://www.bluemoon.works/participate.pdf")
                          | Clusterの使い方と YouTube / Twich 会場アクセス URL
                v-timeline-item
                  v-card
                    v-card-title
                      | 19:10 - 20:25 (順不同)
                    v-card-title
                      div.red--text * 時間帯内の一覧は放送順ではありません、ご注意ください
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | もっつ
                          v-expansion-panel-content
                            | 似非Cripple Creek
                        v-expansion-panel
                          v-expansion-panel-header
                            | B-rise
                          v-expansion-panel-content
                            | 3回目の開催ありがとうございます！公園でコツコツレパートリーを増やしておりますが、こういうイベントがあると練習にも熱が入るのでありがたいです！今回は2曲録りました！拙い演奏ですが、楽しんでいただけたら嬉しいです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | ヒラサワリョータ
                          v-expansion-panel-content
                            | 栃木でマンドリン弾きながらパティシエしてます！ 今回はオリジナルインストを2曲弾かせていただきます。 また、毎週金曜日に自分のYouTubeチャンネルにてオリジナルのマンドリン曲をアップしています！ 会場の皆さま！フェスをご視聴の皆さま！「ヒラサワリョータ」で検索、からのチャンネル登録・高評価お待ちしております！！！
                        v-expansion-panel
                          v-expansion-panel-header
                            | Bluegrass Babe
                          v-expansion-panel-content
                            | ブルーグラス系ユーチューバー武谷健をリーダーとするオンラインブルーグラスバンド。 2ヶ月に一度、Western Acoustic Musicの配信ライブにて演奏動画を公開！チャンネル登録よろしくお願いします！
                        v-expansion-panel
                          v-expansion-panel-header
                            | ランジェリー・ダグラス
                          v-expansion-panel-content
                            | 毎度お世話になります。 今回はLingerie Douglas ではなくランジェリー・ダグラスでエントリーさせていただきます。ドブロ好きの方はもちろんそうでない方にも観て頂きたいです。調子に乗って撮ってたら11分になってしまいました。ごめんなさい。4曲のうち3曲はオリジナルで攻めたいと思います。よろしくお願い申し上げます。
                        v-expansion-panel
                          v-expansion-panel-header
                            | ブラックタイガー
                          v-expansion-panel-content
                            | 神戸大学ブルーグラスサークルで結成したバンドです！ コロナ禍でほとんど活動できなかった時期もありましたが、なんとか解散せず続けられています。このフェスの参加者の方々には及ばないところが多々あるかと思いますが、ハモりに力を入れています！ よろしくお願いします🙇‍♂️
                        v-expansion-panel
                          v-expansion-panel-header
                            | のれん
                          v-expansion-panel-content
                            | 仙台でドブロプレイヤーとして活動している “のれん”こと野崎廉です ドブロでやっていこうと決めて最初に作ったソロドブロインスト”森と凪” ドブロをブルーグラス界隈以外の人に知ってもらいたいと思って作ったYOASOBIカバー、そしてことし発売した自分のミニアルバムにも収録したAngeline the bakerです！ どの動画もドブロの音のみで作られています ぜひお楽しみください！
                        v-expansion-panel
                          v-expansion-panel-header
                            | あぶらげもやし
                          v-expansion-panel-content
                            | バンジョーって和風な曲をしんみり演奏するのにも合いそうだよね！ということで、原神というゲームから和テーマのエリア「稲妻」の音楽をアレンジして演奏します。 あぶらげ：バンジョー、ギター(2曲目) もやし：カンテレ、ギター(1曲目)、ミックス
 
                v-timeline-item
                  v-card
                    v-card-title
                      | 20:25 - 21:50（順不同）
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | Tuxedocat
                          v-expansion-panel-content
                            | Tuxedocatはハチワレ猫ちゃんのことです。ハチワレちゃんと暮らしていたブルーグラスが大好きな恩師が昨年コロナで亡くなりました。「いつかブルーグラス歌ってほしい」と言われていて、このような場があることを知り、これは天から出せと言われてる気がしたので、今回出させていただきました。
                        v-expansion-panel
                          v-expansion-panel-header
                            | コーラスウォーター 
                          v-expansion-panel-content
                            | 名古屋を拠点に活動中のブルーグラスポップバンドコーラスウォーターです。今回は演奏動画ではないのですが、アルバム『めがねと水玉』を録音した際のメイキング映像でエントリーします。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Okano Brothers
                          v-expansion-panel-content
                            | コロナ禍で自宅にいる時間を利用して一人バンドで遊んだものからオリジナル曲を 1. 土砂降りの雨 2. 真っ白な麻シャツ 3. 海への忘れ物
                        v-expansion-panel
                          v-expansion-panel-header
                            | Wellぷれいず…
                          v-expansion-panel-content
                            | わぁい Bryan Sutton うぇる Bryan Sutton 大好き 発表の場があるだけで自主練のモチベも変わったので運営様には頭上がりません サットン先生の弾いてた綺麗な曲を弾きます …今年はおとなしくしたつもりです ゆっくりしていってね！
                        v-expansion-panel
                          v-expansion-panel-header
                            | 米屋 with 原宿限界タピオカボーイズ
                          v-expansion-panel-content
                            | 
                        v-expansion-panel
                          v-expansion-panel-header
                            | 美女とBLUE
                          v-expansion-panel-content
                            | ギターとマンドリンのバンドです。オリジナル4つでのエントリーです。こんな感じでブルーグラスを背景にしつつ演奏の幅を広げれたらと思ってます。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Copper Kettles
                          v-expansion-panel-content
                            | Country Gentlemenの曲を中心に、他の曲もやるバンドです。ギターとマンドリンはバンドメンバーで、北大ブルーグラス研究会のOBです。1曲だけバンジョーがゲストで参加します
                        v-expansion-panel
                          v-expansion-panel-header
                            | hanji
                          v-expansion-panel-content
                            | 40年以上前のブッチロビンスのアルバムの中の曲です。一緒にやる人いないので一人でやってみました。
                v-timeline-item
                  v-card
                    v-card-title
                      | 22:50 - 22:00
                    v-card-text
                      |  中入り（休憩） Cluster バーチャルイベント枠 移動のため
                    v-card-text.headline
                      a.white--text(href="https://cluster.mu/e/0554a113-a821-492c-8b61-9eb141efb303")
                        | 第２会場 URL
                    v-card-text
                      | * Youtube ではそのままご覧いただけます
                v-timeline-item
                  v-card
                    v-card-title
                      | 22:00 - 23:20 (順不同)
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | 引きこもりジジイ 
                          v-expansion-panel-content
                            | 70歳のジジイが、断続的に53年やってきた「フレイリング～クローハンマー」スタイルの非常に簡単な習得法と、あまり知られていない弾き方、意外かもしれない応用法を「次代を担う方達」への何かしらのヒントとして時間一杯、ぎっしり詰め込んで残しておきたいと参加します。 右手に限っているので「ブルーグラス・バンジョー弾き」ならば簡単に想像がつき、様々なリズム・色々な音楽への応用が出来るでしょう。クローハンマーに自由を！
                        v-expansion-panel
                          v-expansion-panel-header
                            | The Music of Masterpieces
                          v-expansion-panel-content
                            | 個人製作動画です。 ゲーム挿入曲をBG調に演奏してみました。 箸休めにどうぞ
                        v-expansion-panel
                          v-expansion-panel-header
                            | Unripened Stringplunkers
                          v-expansion-panel-content
                            | 
                        v-expansion-panel
                          v-expansion-panel-header
                            | もひかんクラウス＆もひかんステーション
                          v-expansion-panel-content
                            | 第1回は拝見。 第2回は勇気を出してエントリ 第3回は工房として協賛させていただく事になりました。 腕も知識もございませんが、好きだけはずっと続けていたブルーグラス。 前回のエントリーに際して沢山の皆さんから背中を押して頂き、ドブロも再び触ることになりました。 そして今年も無事に、白塗り部門にエント リーできました。 ロックダウンフェス運営の皆さまをはじめ、工房のお客さま、 twitterのフォロワーの皆さま。あと米ちゃん。 本当にありがとうございます これから出会う皆さん。 どうぞよろしくお願いします。 動画の説明 大好きなakusを演ってみました。公式MVをご存知の方なら、クスッと笑って頂けるかなと思います。 深夜気温2度の河原でキャミソールは凍死するかと思いました。個人的に白塗りロンブロックが気に入ったので、これからもプライベートでやっていこうかなと思います。 次回までにマンドリンを手に入れて、演奏できるバリエーションを増やせたらと思います。どこかに岩下マンドリン落ちてないかな。 最後になりましたが、白塗りは敬愛表現です。アリソンクラウス＆ユニオンステーションは、私の大切な青春です。
                        v-expansion-panel
                          v-expansion-panel-header
                            | マスダスインゴ
                          v-expansion-panel-content
                            | 昨年はビートルズメドレーでお邪魔しました還暦超え高校同窓Duoです。今回はユーミンメドレーです。ご存知の曲は口ずさみながら楽しんでいただければうれしいです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 大椿山
                          v-expansion-panel-content
                            | 北海道大学ブルーグラス研究会の大椿山（おおつばきやま）です。 同期3人で組んだバンドで、うちの歌姫である大久保の歌唱力とギター演奏、ベースの端山による安定した支えに、マンドリンの椿がおんぶにだっこされることで少人数ながらもバランスの良い演奏をお届けできるかなと思っています。 次回Vol.4（コロナがおさまっても開催してほしいです）では北海道大学ブルーグラス研究会全体として参加させてください！
                        v-expansion-panel
                          v-expansion-panel-header
                            | 日本アルプス弦楽団
                          v-expansion-panel-content
                            | 京都のヨーデル娘を筆頭にした、ヨーデル好きによるヨーデル好きのためのヨーデルをするバンド。 楽しいヨーデルが皆さんを健康に導きます！
                v-timeline-item
                  v-card
                    v-card-title
                      | 23:20 - 1:00（順不同）
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | 新・Acoustic’s Sound Garden 2nd Edition 
                          v-expansion-panel-content
                            | 前回自前の曲を投稿する人がちらほらいたので、僕も作ってみました。 今回、曲パートが2部構成で、思ったより長くなってしまい茶番を入れられませんでした。 すいません。 しかし、前半は僕の考えうる最高のブルーグラスを表現できた学生6年間の集大成だと思うのでぜひ最後までお楽しみください。 僕に友達がいないばっかりにベース以外僕が弾いていることが画的におぞましくなってしまったので、もし曲を聴いて一緒にやってくれる人いたら募集中です。 後半にはみんなが大好きなブルーグラスをより親やすくアレンジし、友達と弾いてみました。 良いお年を。
                        v-expansion-panel
                          v-expansion-panel-header
                            | The Old Folks
                          v-expansion-panel-content
                            | このバンドは結成して1年半。名古屋のオールザットグラス、フィドルで活躍している籾山君をメインボーカルにしたバンドがやりたいという事で集まりました。メンバーは80年代 立命、関大のサークルで同学年だった照屋（Bj）、イノシシ（G）、籾山（G）、小寺（Mn）、そして岐阜の吉村さん（Bs）、名大の正岡くん（Fi）です。バンドのコンセプトは “カオス(混沌)”。それぞれの個性、価値観がぶつかり合って、普通でない“カオスな状態”の演奏を目指しています。
                        v-expansion-panel
                          v-expansion-panel-header
                            | もやしちゃん
                          v-expansion-panel-content
                            | 前回は会場製作係でしたが今回は投稿動画でも参加します！ 少し毛色は異なりますが、フィンランドの伝統楽器カンテレにギターとバイオリンを加えて 1曲だけですが曲を作って演奏しました。 カンテレの響きをお楽しみください！
                        v-expansion-panel
                          v-expansion-panel-header
                            | 雑貨屋フレイヴァー
                          v-expansion-panel-content
                            | 東北大ブルーグラス同好会のOBバンド、雑貨屋フレイヴァーです。 前回に引き続き、栃木、東京、そしてドイツから、リモートで動画を作って参加させて頂きます。 届け、俺たちの魂のサウンド！ ブルーグラーース！！
                        v-expansion-panel
                          v-expansion-panel-header
                            | Lonesome Garage Band
                          v-expansion-panel-content
                            | 短いですが聴いていただけたら嬉しいです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | Masterof Traditional Bluegrass
                          v-expansion-panel-content
                            | Bill Monroeを始めtraditionalなブルーグラスを中心に渋くキメます！ 
                            div fd テイター安田 
                            div bj もっつ 
                            div md アッキー
                            div gt 村田 
                            div bs 武田(特別ゲスト)
                        v-expansion-panel
                          v-expansion-panel-header
                            | 位牌/真夏日
                          v-expansion-panel-content
                            | maiBass
    v-row
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://docs.google.com/document/d/1kcnwA8b1p2ms_9fR42gL_58JJ-UMYNFqzqw4YDd_YuU/')
              | 開催草案 (DRAFT)
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
            a(href='https://youtu.be/8aQyxnLzbv8')
              | {{ $t('前回の様子（動画)') }}

      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | エントリーは締切です!
      //-         | エントリーしていただいた方は、以下ページから動画アップロードを
      //-         | 2021-12-27 9:00 GMT	までしていただけます。
      //-         | よろしくお願いいたします!
      //-       v-btn(outlined block)
      //-         a.white--text(href="https://www.bluemoon.works/entries")
      //-           | エントリ編集ページ(要ログイン)

      //- v-col(cols=12)
      //-     v-card(color='rgb(100, 100, 100, 0.4)')
      //-       // v-card-title.headline
      //-       // | エントリー準備中
      //-       v-card-title.headline {{ $t('openRegistration') }}
      //-       // v-btn(outlined block @click="gotoEntryList")
      //-       //  | エントリーリスト
      //-       v-card-text(v-if="this.$firebase.currentUser")
      //-         v-btn(@click="gotoEntryForm()"
      //-           outlined
      //-           block
      //-         )
      //-           | {{ $t('entryForm') }}
      //-       v-card-text(v-else)
      //-         | {{ $t('registrationNotice') }}
      //-         | {{ $t('registrationNotice2') }}
      //-         div
      //-           v-btn.mx-2(@click="gotoLogin()"
      //-             block
      //-             outlined
      //-           )
      //-             | LOGIN

    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-container(
            style="background-image: url('/participate.png'); background-size: cover"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-card-title.headline
                a.white--text
                  | 視聴・参加方法 
              div.ma-4
                v-btn(outlined block)
                  a.white--text(href="https://www.bluemoon.works/participate.pdf")
                    | Clusterの使い方と YouTube / Twich 会場アクセス URL

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
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1 賞品（フルオーダーストラップ、がま口小物入れ）をご提供いただきます
          v-container(
            style="background-image: url('/mohikan-koubou.jpeg'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/m-icon.png")
              a.white--text(href="https://mohikan1974.theshop.jp/")
                | 工房もひかん（仮）
              div.ma-4
                div.white--text.body-1
                  | トニーライススタイルストラップなど、アメリカンヴィンテージスタイルを得意とするレザークラフト工房。
                div.body-1
                  | 売れ線アイテムが苦手な、長距離大型トラック運転手の完全趣味片手間変態副業オンラインストアです。その代わり頂いたオーダーはどこよりも丁寧に製作致します。
      v-col(cols=12)  
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品(リペア券、ピック）の割引をご提供いただきます
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
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品(ロールケーキ2本セット）をご提供いただきます
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
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品(ボトル券）をご提供いただきます
          v-container(
            style="background-image: url('/rockeytop.jpeg'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/rockeytop.jpeg")
              a.white--text(href="http://ginza-club.net/rocky-top/")
                | Rocky Top (ロッキートップ)
              div.ma-4
                div.white--text.body-1
                  | 東京の老舗、ミュージックレストラン銀座ロッキートップは、ブルーグラス音楽のメッカとして世界的に知られているところです。
                  | 「ブルーグラスの父」ビルモンローが作り上げたこの素晴らしい音楽を生演奏という形で再現し、
                  | 魅力溢れるバンジョーやマンドリン、フィドル(バイオリン)、
                  | ドブロなどの音色を出来る限り多くの方にお伝えしたいと思っています。
                  | お食事もできて、ドリンク、フード、チャージ、共にリーズナブル！地下鉄・JRからも徒歩10分以内！
      v-row
        v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-chip(
              class="ma-2"
              color="red"
              text-color="white"
            )
              | ご協賛
            a(href="https://twitter.com/tempakyousuke2") てんぱさん
            span.body-1 より賞品（信州・丸山農園特製りんごジュース）をご提供頂きます
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
            span.body-1 より「何か」をご提供頂きます
            
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
