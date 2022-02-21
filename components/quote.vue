<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Architects Daughter" rel="stylesheet">
    <div v-if="show" :style="'font-size: ' + size + '; font-family: \'' + family +'\''">
      <span v-if="quoteBy!==''">&#8220;</span>

      {{ quote }}
      <span v-if="quoteBy!==''">&#8221;</span>

      <footer v-if="quoteBy !=''">
        <small>
          <em>&mdash; {{ quoteBy }}</em>
        </small>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuoteBlock',
  props: {
    show: {
      type: Boolean
    },
    size: { type: String, default: '18px' },
    quoteLoc: {
      type: String,
      default: ''
    },
    family: { type: String, default: 'Architects Daughter' }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      quote: 'getQuote',
      quoteBy: 'getQuoteBy'
    })
  },
  mounted () {
    console.debug('reason to ' + this.show + ' show location: ' + this.quoteLoc)
  }
}
</script>

<style>
body {
    font-family: 'Architects Daughter';
}

</style>
