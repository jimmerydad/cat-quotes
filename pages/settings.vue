<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title class="secondary">
          <span :style="$vuetify.theme.dark ? 'color:#FFFFFF':'color:#E0E0E0'">Settings</span>
        </v-card-title>
        <v-card-text>
          <div class="pa-5">
            <h2>Theme</h2>
            <v-switch
              v-model="theme"
              hint="This toggles the global state of the Vuetify theme"
              inset
              label="Dark Theme"
            />
            <v-divider class="my-5" />
            <h2>Image Types</h2>
            <v-radio-group
              v-model="imageType"
              row
            >
              <v-radio
                label="Static"
                value="static"
                color="orange"
              />
              <v-radio
                color="deep-purple accent-1"
                label="Gif"
                value="gif"
              />
            </v-radio-group>
            <v-divider class="my-5" />
            <h2>Quote Location</h2>
            <v-radio-group
              v-model="quoteLocation"
              row
            >
              <v-radio
                label="Above"
                value="above"
                color="green"
              />
              <v-radio
                color="orange accent-1"
                label="On"
                value="on"
              />
              <v-radio
                color="red accent-1"
                label="Below"
                value="below"
              />
            </v-radio-group>
            <v-divider class="my-5" />
            <h2>Quote Types</h2>
            <v-radio-group
              v-model="quoteType"
              row
            >
              <v-radio
                label="Dad Joke"
                value="dad"
                color="light-blue lighten-3"
              />
              <v-radio
                color="yellow lighten-2"
                label="Inspiration Quotes"
                value="inspiration"
              />
              <v-radio
                color="purple lighten-2"
                label="Advice"
                value="advice"
              />
              <v-radio
                color="light-green accent-4"
                label="Random"
                value="random"
              />
            </v-radio-group>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/cat-quote"
          >
            <v-icon class="mx-3">
              mdi-cat
            </v-icon> Get Me a Cat Quote!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// $vuetify.theme.dark
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'SettingsPage',
  data () {
    return {
      quoteLocation: 'above',
      quoteType: 'random',
      theme: false,
      imageType: 'gif'
    }
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      quoteLoc: 'getQuoteLocation',
      quote: 'getQuote',
      getImageType: 'getImageType',
      pixid: 'getPixid',
      getTheme: 'getTheme'
    })

  },
  watch: {
    // whenever question changes, this function will run
    theme (newVal, oldVal) {
      this.setTheme(newVal)
      this.$vuetify.theme.dark = newVal
      console.log('theme: ' + this.getTheme)
    },
    imageType (newVal, oldVal) {
      this.setImageType(newVal)
    },
    quoteLocation (newVal, oldVal) {
      this.setQuoteLocation(newVal)
    }

  },
  mounted () {
    this.imageType = this.getImageType
    this.theme = this.getTheme
    this.quoteLocation = this.quoteLoc
  },
  methods: {
    ...mapActions([
      'getDadQuote'
    ]),
    ...mapMutations([
      'setImageType',
      'setQuoteType',
      'setQuoteLocation',
      'setTheme'
    ])
  }
}

</script>
