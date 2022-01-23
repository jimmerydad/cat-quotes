<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;Some Quote Here {{ quote }}&#8221;
        <footer>
          <small>
            <em>&mdash; Who</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CatQuote',
  data () {
    return {
      quote: 'This is a message'
    }
  }
}
</script>
