<template>
  <blockquote v-if="show" class="blockquote" :style="'font-size: ' + size">
    <link href="https://fonts.googleapis.com/css?family=Architects Daughter" rel="stylesheet">
    &#8220;{{ quote }}&#8221;
    <footer v-if="quoteBy !=''">
      <small>
        <em>&mdash; {{ quoteBy }}</em>
      </small>
    </footer>
  </blockquote>
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
    }
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
