<template>
  <div class="flash-message"></div>
</template>

<script>
  import Toasted from 'vue-toasted'
  import Vue from 'vue'

  Vue.use(Toasted)

  export default {
    name: 'FlashMessage',
    mounted () {
      const contractEventHandler = ({ contractName, data }) => {
        const message = `New value  ${data.newValue}, set to ${contractName} on ${this.convertToDateString(data.date)}`
        const options = { duration: 5000 }
        this.$toasted.show(message, options)
      }
      this.$drizzleEvents.$on('drizzle/contractEvent', payload => {
        contractEventHandler(payload)
      })
    },
    methods: {
      convertToDateString (unixtime) {
        const newDate = new Date();
        newDate.setTime(unixtime * 1000);
        return newDate.toUTCString();
      },
    },
  }
</script>

