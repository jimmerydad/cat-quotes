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

            <v-btn class="primary" @click="getDadQuote">
              Test Dad
            </v-btn>
          </div>
        </v-card-text>
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
      theme: false
    }
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      quoteLoc: 'getQuoteLocation',
      quote: 'getQuote',
      imageType: 'getImageType',
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
    }
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
