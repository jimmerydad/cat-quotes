<template>
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <img :src="homeImage" width="100%">
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Cat Quotes
        </v-card-title>
        <v-card-text>
          <p>Have some fun!</p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/jimmerydad/cat-quotes/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Jim Romaine</small></em>
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

export default {
  name: 'IndexPage',
  data () {
    return {
      homeImage: require('../assets/img/whatdidyousay.jpg')
    }
  }
}
</script>
