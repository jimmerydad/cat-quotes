<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Architects Daughter" rel="stylesheet">
    <v-row>
      <v-col class="text-center">
        <quote quote-loc="above" :show="quoteLoc==='above'" class="quote large" size="35px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div class="container">
          <img
            :src="url"
            alt="Cat as service"
            class="mb-5"
            width="100%"
            height="600px"
          >
          <div v-if="quoteLoc==='on'" class="centered quote medium">
            {{ quote }}
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <quote quote-loc="below" :show="quoteLoc==='below'" class="quote" size="35px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        xs="6"
        sm="4"
      >
        <v-switch
          v-model="newPix"
          class="col-6"
          hint="Grab a new picture"
          inset
          label="New picture"
        />
      </v-col>
      <v-col

        xs="6"
        sm="4"
      >
        <v-switch
          v-model="newQuote"
          hint="Grab a new quote"
          inset
          label="New Quote"
        />
      </v-col>
      <v-col
        xs="6"
        sm="4"
      >
        <v-btn class="primary" :disabled="!newPix && !newQuote" @click="update">
          <v-icon class="mx-3">
            mdi-cat
          </v-icon>
          Cat Me!
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CatQuote',

  data () {
    return {
      url: '',
      quoteBy: '',
      newQuote: false,
      newPix: false
    }
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      quoteLoc: 'getQuoteLocation',
      quote: 'getQuote',
      imageType: 'getImageType',
      pixid: 'getPixId',
      getTheme: 'getTheme',
      catService: 'getCatService'

    }
    )
  },

  mounted () {
    this.$vuetify.theme.dark = this.getTheme
    this.getCatId()
    this.getCatUrl()
    this.getQuoteText()
  },
  methods: {
    ...mapMutations(['setQuote']),
    ...mapActions([
      'getDadQuote', 'catJSON'
    ]),
    getCatId () {
      // get a new id if blank of toggled to
      if (this.pixid === '' || this.newPix) {
        this.catJSON(this.imageType === 'gif')
      }
    },
    getCatUrl () {
      const u = this.catService + '/' + this.pixid
      console.log('cat url:' + u)
      this.url = u
    },

    getQuoteText () {
      // TODO: use quote configuration
      if (this.getQuote == null || this.getQuote === '') {
        this.getDadQuote()
      }
    },
    update () {
      if (this.newQuote) {
        this.getDadQuote()
      }
      this.getCatId()
      this.getCatUrl()
    }

  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Architects Daughter';
.quote {
    font-family: 'Architects Daughter';
}
.medium{
font-size: 22px;
}

.centered {
  position: absolute;
  top: 75%;
  left: 40%;
  transform: translate(-30%, -70%);
  background: rgba(45, 189, 45, 0.664);
}

.container {
  position: relative;
  text-align: center;
}
</style>
