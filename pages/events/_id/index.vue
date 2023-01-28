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
      v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | 1月28日(土曜) 開催
              //- | タイムテーブルが決まりました
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
                      | 18:45 開場
                    v-card-text.headline
                      a.white--text(href="https://cluster.mu/e/95a657d5-10a5-406e-83b6-27941dc21753" target='_blank') 
                        a.white--text
                          | Cluster フェスバーチャル会場の開場 （入退場自由）
                v-timeline-item
                  v-card
                    v-card-title
                      | 19:00 配信開始
                    v-card-text.headline
                      a.white--text(href='https://www.youtube.com/watch?v=xeAb34NTNA4' target="_blank")
                        | Youtube配信
                    //- v-card-title.headline
                    //-   a.white--text
                    //-     | 視聴・参加方法のヘルプ 
                    //-   div.ma-4
                    //-     a.white--text(href="https://www.bluemoon.works/participate.pdf")
                    //-       | Clusterの使い方と YouTube / Twich 会場アクセス URL
                v-timeline-item
                  v-card
                    v-card-title
                      | Block A: 19:10 - 19:54
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | テイター安田ともっつ
                          v-expansion-panel-content
                            | turkey in the straw north carolina breakdown
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | もやしちゃん
                          v-expansion-panel-content
                            | ワールド製作担当のもやしです。 Arkansas Travelerをカンテレをメインにアレンジして弾いてみました。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | B-rise
                          v-expansion-panel-content
                            | あけましておめでとうございます！ 今年も開催されるという事でありがとうございます！ 公園生活も長くなって来ましたが 今回は歌もの、一発どりに挑戦しました。 曲は 京王線の唄 Whiskey Before Breakfast 遠くまで行くんだ〜I’ll fly away 〜 楽しんでいただけたら嬉しいです！
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | Deep Blue Boys
                          v-expansion-panel-content
                            | 東京中心に活動する高年齢ブルーグラスバンド。昨年5月に催したライブハウスでの演奏から3曲お届けします。前回出場の際はお蕎麦をいただいたので、今回は節分の豆を狙いにいきます。
                            div
                              v-chip オフライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | Well & Gone
                          v-expansion-panel-content
                            | 滋賀と岐阜のトニーライスオタクらによる貴重な不定期会合のシーン 絶賛仲間募集中だよ（ﾆﾁｬｱ
                            | Twitter -> @Welpurgis @gt9822
                            | 追記：工房もひかん（仮）さん素敵なストラップ×2ありがとうございました！！
                            div
                              v-chip オンライン・ブルーグラス・アワード
                v-timeline-item
                  v-card
                    v-card-title
                      | Block B: 19:55 - 20:35
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | dixie mohicks
                          v-expansion-panel-content
                            | 本業がかなり忙しく間に合うかわかりませんが、取り敢えず白塗り部門にエントリーいたします。いま紹介されているのであれば間に合ったんでしょう。 戦争が1日でも早く終わることを願い、また正しいことを貫く彼女たちに敬意を表してdixie chicksのI'm ready to make niceを選びました。 見どころは先月この曲の為に、メルカリで買った6800円のフィドルです。 工房も年末から少々おろそかにしておりますが、お山のフェスに行けない私にはここで皆さんとお会い出来ることを楽しみに、楽器を維持しております。 本年もどうぞよろしくお願いします。 もひかん
                            div
                              v-chip オンライン・ブルーグラス・アワード
                              v-chip 白塗り
                        v-expansion-panel
                          v-expansion-panel-header
                            | マスダスインゴ
                          v-expansion-panel-content
                            | 3回目の出場 "マスダスインゴ"です。少し古いですがコロナ前の墨田ストリートジャズフェスでの演奏です。揺れるバスの中で40分間、Beatlesを中心に43曲を弾きまくったものの一部を切り取りました。曲目はどれもBeatlesの有名曲です。
                            div
                              v-chip オフライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | ゴールデンロッドガールズ
                          v-expansion-panel-content
                            | 結成5年目名大OGゆるふわガールズバンドです❤︎chu!年々ゆるふわ度が増しちゃってごめん❤︎less filterな演奏をゆるゆるとお楽しみくださいまし( o̴̶̷᷄ ·̫ o̴̶̷̥᷅ )
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | 引きこもりジジイ
                          v-expansion-panel-content
                            | 相変わらず、今回も71歳の年寄りが、もたもた弾きます。 「年寄りの冷や水」 「名選手必ずしも名コーチならず」 71歳のジジイが、断続的に半世紀やってきた「各種押弦楽器の左手の準備運動～初心者修錬法」の簡単な練習法と「Gランの各種変形」等を時間一杯、ぎっしり詰め込んで残しておきたいと参加します。 長年楽器を弾いている方には、既によくご存じの方法もあるでしょう。でも、初心者には、手近な楽器であるギターを使い、左手に限っているので「ギター弾き」ならば簡単に想像がつき、容易にバンジョー、マンドリン等各種楽器への応用も想像できるはずです。 なお、前回の「クロハンマーバンジョー入門から応用各種」の動画は、Youtubeに「多摩川童仙坊」で投稿しています。今回の動画も、近いうちにそちらに上げる予定です。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                v-timeline-item
                  v-card
                    v-card-title
                      | ショート・ブルーグラス・アワード 20:35 - 20:50
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | StudioBABA & MASAKI
                          v-expansion-panel-content
                            | Mao&Masaki StudioBABA&Masakiの撮影後のジャムで「高田渡の「アイスクリーム」ってショート動画にちょうど良くないですか？」という話になり急遽撮影。 「もっとブルーグラス界で高田渡が流行って欲しい」「高田渡の「生活の柄」で一緒にジャムをしたい」「えーマジ？高田渡知らないの？キモーイ　高田渡知らないのは小学生までだよね？キャハハハハハハ（出典「奪！童貞。」）」っていう思いで演奏しました。よろしくお願いします。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 松本達也
                          v-expansion-panel-content
                            | 北大ブルーグラス研究会のOBで、Copper Kettlesのギター弾きです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | 米屋 with 原宿限界タピオカボーイズ
                          v-expansion-panel-content
                            | 勇気を持ってニャーンすること。それこそが人生で大事なんです。ニャーンが無ければ何も変えられない。ニャーンから始まるんです。みんな、わかってはいるがニャーンしない。ニャーンを面倒がる。ニャーンは自分に関係ないと思い込む。でも実はあなたの中にも素敵なニャーンがある。
                        v-expansion-panel
                          v-expansion-panel-header
                            | H.MOMIYAMA
                          v-expansion-panel-content
                            | 心筋梗塞から復活して、リハビリを兼ねて録音したものです。
                        v-expansion-panel
                          v-expansion-panel-header
                            | インターネットやめろ
                          v-expansion-panel-content
                            | 去年英語圏を中心に世界的に大流行したアレを、自分で演奏する形でやってみました。
                            | これをやれと呟いたんですよ。私の中のモンローが。
                        v-expansion-panel
                          v-expansion-panel-header
                            | あぶらげ
                          v-expansion-panel-content
                            | 私はVRにかまけていて楽器の練習を怠っていました(首から札)
                        v-expansion-panel
                          v-expansion-panel-header
                            | Lonesome Garage Band
                          v-expansion-panel-content
                            | Send My Love
                v-timeline-item
                  v-card
                    v-card-title
                      | Block C: 20:50 - 21:40
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | Copper Kettles
                          v-expansion-panel-content
                            | Country Gentlemenの曲を中心に、他の曲もやるバンドです。 ギターとマンドリンは北大ブルーグラス研究会のOBで、バンジョーは京大軽音楽部のOBです。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | 野村昌毅
                          v-expansion-panel-content
                            | 「私が歌う理由」谷川俊太郎とラングストン・ヒューズの詩に曲をつけました。オートハープでの弾き語りです。2017年7月2日 第7回 隅田川フォークフェスティバルにて。使用楽器：Kotokoto Harp Blue Night（ウォルナット/マホガニー） 1980年、東京生まれ。主に都内でオートハープとギターの弾き語りをやっています。
                            | 日本画作品のホームページ → https://nomuramasaki.jimdofree.com/
                            div
                              v-chip オフライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | hanji
                          v-expansion-panel-content
                            | 30年前　友人が金沢を旅した時に書いた歌です。当時　録音したきり歌わなくなってしまっていたので　久しぶりに歌ってみました。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | Blue Moon of kenタニコ feat.ちょび
                          v-expansion-panel-content
                            | こんばんは！神大ブルーグラスサークル4回生のBlue Moon of Kenタニコと、ちょびです！ロックダウンフェス初投稿させてもらいます！ 「君と唄ったブルームーン」は今回のオンラインフェスのために書き下ろした、出来立てホヤホヤのオリジナル曲です！ポップなメロディはもちろん、ブルーグラッサーならニヤけちゃうようなネタを散りばめた歌詞にもご注目！ フェス当日はどうしても外せない用事ができてしまい、非常に非常に非常に残念ながらリアルタイムで参加できなくなってしまったのですが、アーカイブで楽しませてもらおうと思います！よろしくお願いします🤲
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | ヤンボーマーボー今日も天気だ仲良しファイターズ
                          v-expansion-panel-content
                            | 「ええ感じやん！」って思ってもらえるバンドを目指し、 ブルーグラスやカントリーなどの曲を、 ブルーグラスらしからぬスタイルで演奏するバンドです。 ブルーグラス進化系ハイブリットヤンボースタイル！って呼んでもらっていいですか？！（笑） よろしくお願いいたします！ この動画は、昨年10月に神戸の宇治川音楽祭で演奏した時の動画（YouTubeに公開済み）を、 BLMF用に再編集し直した未公開のBLMF.versionの動画（限定公開）になります。
                            div
                              v-chip オフライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | StudioBABA & MASAKI
                          v-expansion-panel-content
                            | StudioBABA&Masaki 今回のBluegrass Lockdown Music Festival Vol.4のために結成されたバンド れいじーぴっかーずの和泉眞生とその友達、馬場、正木での三人組でお届けします。 本来は３曲やる予定でしたが3人の怠惰がそれを許さなかったので今回は一曲の投稿となります。 評判が良ければ、次回に残りの２曲を完成させようと思うので皆様応援よろしくお願い致します。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                v-timeline-item
                  v-card
                    v-card-title
                      | Block D: 21:40 - 23:00
                    v-card-text
                      v-expansion-panels
                        v-expansion-panel
                          v-expansion-panel-header
                            | masaoka and friends
                          v-expansion-panel-content
                            | これまではネタ動画系に走っていましたが、今回は真面目に弾きました。 編曲が好きで巷の曲を聴くと頭でバンジョーのロールが流れてしまいます。 今回は選りすぐりのアニソン5曲をブルーグラス楽器で弾いてみました。 サークルを卒業するなりPopsやら軽音楽に浮気してしまう先輩の心に届けば幸いです。 こだわりポイントとしては各楽器1トラックで電子的な編集も入れてないので皆さんのブルーグラスバンドで明日から演奏可能です。 最後になりますが、締め切り2日前に曲決めて深夜の0時からスタジオ入りしてくださったボーカルのはおさん、ベースのたけがみさん、本当に本当にありがとうございました。
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | ちの井本
                          v-expansion-panel-content
                            | BanjoとVocalでなんかやります
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | 美女とBLUE
                          v-expansion-panel-content
                            | ギター、マンドリンのデュオです。今回はソリッドなトラッド（歌詞が良い！）と、メロディアスなジャズ、＋aで参加します。 追伸. オリジナル曲のアルバム制作がほぼ完成しましたので、またどこかで聞いて貰えると嬉しいです！よろしくお願いします！
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | Lonesome Garage Band
                          v-expansion-panel-content
                            | Song for a Winter's Night
                            div
                              v-chip オンライン・ブルーグラス・アワード
                        v-expansion-panel
                          v-expansion-panel-header
                            | Master of Traditional Bluegrass
                          v-expansion-panel-content
                            | Fiddle、"Tater"安田と、Banjo、手嶋のトラッド志向バンドも何だかんだ結成から3年が経過し、コロナの間を縫いながら地域の東西行ったり来たり細々と活動してきました。
                            | 今回もオンフェス、渋めの選曲で参戦させていただきます！新たに女性ベースを加えパワーアップしたサウンドでお送りいたします。
                            | Fiddle: "Tater"安田、Banjo:手嶋、Mandolin:鈴木アッキー、Guitar:村田、Bass:菅沼
                            div
                              v-chip オンライン・ブルーグラス・アワード

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

      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
            v-card-title.headline
              | エントリーは締切です!
            //  | エントリーしていただいた方は、以下ページから動画アップロードを
            //  | 2023-1-25 9:00 GMT	までしていただけます。
            //  | よろしくお願いいたします!
            // v-btn(outlined block)
            //   a.white--text(href="https://www.bluemoon.works/entries")
            //     | エントリ編集ページ(要ログイン)

      //- v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)')
      //-     // v-card-title.headline
      //-     // | エントリー準備中
      //-     v-card-title.headline {{ $t('openRegistration') }}
      //-     // v-btn(outlined block @click="gotoEntryList")
      //-     //  | エントリーリスト
      //-     v-card-text(v-if="this.$firebase.currentUser")
      //-       v-btn(@click="gotoEntryForm()"
      //-         outlined
      //-         block
      //-       )
      //-         | {{ $t('entryForm') }}
      //-     v-card-text(v-else)
      //-       | {{ $t('registrationNotice') }}
      //-       | {{ $t('registrationNotice2') }}
      //-       div
      //-         v-btn.mx-2(@click="gotoLogin()"
      //-           block
      //-           outlined
      //-         )
      //-           | LOGIN

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
      
      

      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1  賞品(生チョコ25個入り）をご提供いただきました
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
                  v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/hirasawa3.png")
              a.white--text(href="https://www.facebook.com/hirasawasweets/")
              a.white--text(href="https://www.tunecore.co.jp/artists/Ryota-Hirasawa")
                | ヒラサワリョータ: "the stray bug" / "パティスリーヒラサワ"
              div.ma-4
                div.white--text.body-1
                  | パティシエマンドリニスト・ヒラサワリョータ氏による疾走感あふれるブルーグラスインスト
                div.white--text.body-1
                  | 各種音楽配信サービスにてリリース！
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
      v-row
        v-col(cols=12)
          v-card(color='rgb(100, 100, 100, 0.4)')
            v-chip(
              class="ma-2"
              color="red"
              text-color="white"
            )
              | ご協賛
            span.body-1 ま〜バァ様より「ビール券」6枚組をご提供いただきました！
            v-container(
              style="background-image: url('/beer.jpeg'); background-size: cover"
              height="auto"
            )
              v-container(
                style="background-color: rgba(80, 80, 80, 0.8);"
              )
      v-col(cols=12)  
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          span.body-1 賞品（Web store 商品券5000円分）をご提供いただきました
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
          span.body-1  賞品(ピック）の割引をご提供いただきます!
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
          span.body-1 あぶらげ様より「うどん（生うどん＆つゆ＆具材のセット、市販品）」をご提供いただきました！
          v-container(
            style="background-image: url('/food_udon.png'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              a.white--text 香川のうどんはおいしいよ… 
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
          this.$router.push('/')
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
