/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <blockquote v-if="quoteLoc==='above'" class="blockquote">
          &#8220;Some Quote Here {{ quote }}&#8221;
          <footer>
            <small>
              <em>&mdash; Who</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <img
          :src="url"
          alt="Static Cat as service"
          class="mb-5"
          width="100%"
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <blockquote v-if="quoteLoc==='below'" class="blockquote">
          &#8220;Some Quote Here {{ quote }}&#8221;
          <footer>
            <small>
              <em>&mdash; Who</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          https://cataas.com/cat/says/Something+goes+here?wi=800

          /cat?width=:width or /cat?height=:height
          /c?wi=:width or /c?he=:height Will return a random cat with :width or :height
          /cat?html=true Will return a random cat in a HTML page, usefull for Twitter or Facebook embedded render
          /cat?json=true Will return a random cat in a JSON object
          /c/gif/s/Hello?fi=sepia&c=orange&s=40&t=or Mix 'em all :D
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CatQuote',
  data () {
    return {
      url: ''
    }
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      quoteLoc: 'getQuoteLocation',
      quote: 'getQuote',
      imageType: 'getImageType',
      pixid: 'getPixId',
      getTheme: 'getTheme'
    }
    )
  },

  mounted () {
    this.getUrl()
    this.$vuetify.theme.dark = this.getTheme
  },
  methods: {
    getUrl () {
      // TODO if optino to keep same image need the pixid
      // if text is on image... then use the 'says' option
      const msg = this.getQuoteText()
      // option to say something
      // src="cat/says/Something+goes+here?wi=800"
      let u = 'https://cataas.com/'
      if (this.imageType === 'gif') {
        u += 'c/gif'
      } else {
        u += 'cat'
      }
      if (this.quoteLoc === 'on') {
        u += '/s/' + msg
      }
      console.log('url made: ' + u)
      this.url = u
    },
    getQuoteText () {
      // TODO: use quote configuration
      let t = 'some message here ok?'
      t = encodeURIComponent(t)

      return t
    }

  }
}
</script>
