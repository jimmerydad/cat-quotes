<template>
  <!-- v-if="timerCount >0"  -->
  <span v-if="timerCount >0" class="mr-5">
    {{ timerCount }} {{ msg }}
  </span>
</template>

<script>

export default {
  name: 'CountDown',
  props: {
    timerAmount: { type: Number, default: 30 },
    msg: { type: String, default: '' },
    restart: { type: Boolean, default: false }
  },
  data () {
    return {
      timerCount: 30
    }
  },

  watch: {
    restart: {
      handler (value) {
        if (value) {
          this.timerCount = this.timerAmount
        }
      },
      immediate: true
    },
    timerCount: {
      handler (value) {
        if (value > 0) {
          console.debug('countdown value: ' + value)
          setTimeout(() => {
            this.timerCount--
            if (this.timerCount === 0) {
              console.debug('should be emitted complete status')
              this.$emit('complete')
            }
          }, 1000)
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  },
  mounted () {
    this.timerCount = this.timerAmount
  }
}

</script>
