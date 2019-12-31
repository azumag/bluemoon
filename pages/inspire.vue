<template lang="pug">
  v-layout
    v-flex.text-xs-center
      img(src="/v.png" alt="Vuetify.js" class="mb-5")
      blockquote.blockquote
        | &#8220;First, solve the problem. Then, write the code.&#8221;
      v-btn(color='white', outlined=true, block=true, text, nuxt, to='/tunes')
        | to
      footer
        small
          em
            | &mdash;John Johnson
</template>
