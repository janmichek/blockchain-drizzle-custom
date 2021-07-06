<template>
  <form class="custom-storage-form">
    <input
      type="number"
      v-model="value"
      placeholder="value">
    <button @click.prevent="submit">
      Submit
    </button>
  </form>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: 'CustomStorageForm',
    computed: {
      ...mapGetters('drizzle', ['drizzleInstance']),
    },
    data () {
      return {
        value: '',
      }
    },
    methods: {
      submit () {
        this.drizzleInstance
          .contracts['CustomStorage']
          .methods['set']
          .cacheSend(this.value)

        this.value = ''
      },
    },
  }
</script>
