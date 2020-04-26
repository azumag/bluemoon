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
              | 多重録画アプリの紹介
          v-card-text
            | 多重録画とは，
            | ある動画に重ねて別の動画をつけることでセッション動画を作ることができる一つの手法です
            | メンバー同士が集まらずともセッション動画を作成できる他，一人でも（複数の楽器を弾けるならば）
            | 厚みのある演奏動画を作成することが出来ます。
            | 様々なモバイルアプリを使うことでも手軽に作成できるので，ここで紹介しています。
    v-row
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-list
            v-list-item
              v-list-item-content
                v-list-item-title.headline
                  | Acapella（iOS, Android)
                div
                  | SNS の形をとっており，投稿に対してコラボという形で録画を重ねることが出来ます。
                  | 投稿された動画にあわせながら演奏を録画して，その録画を保存すれば多重録画の動画をつくることができます。
                  | メンバーと作る場合は，保存後に「Collaboration」を選ぶことでリンクが作成され，そのリンクを共有することで動画を作成することができます
                v-img(
                  max-width="200px"
                  src="/howto/multi-recording/acapella1.png"
                )
                v-img(
                  max-width="200px"
                  src="/howto/multi-recording/acapella2.png"
                )
          hr
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-list
            v-list-item
              v-list-item-content
                v-list-item-title.headline
                  | 4xcamera (iOS)
                div
                  | Roland 社謹製。簡単な操作で分割動画を作成できます。
                  | ただし，複数人で共有作成する手段はアプリ内に用意されていないため，
                  | 個別で動画を集めて代表者が調整を行って最終版を作成する必要があります。
                v-img(
                  max-width="200px"
                  src="/howto/multi-recording/4xcamera.png"
                )
</template>
