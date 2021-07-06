<template>
  <div class="custom-storage">
    Stored data: {{ contractData }}
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: 'CustomStorage',
    data () {
      return {
        args: {
          contractName: 'CustomStorage',
          method: 'storedData',
          methodArgs: '',
        },
      }
    },
    computed: {
      ...mapGetters('contracts', ['getContractData']),
      contractData () {
        return this.getContractData({
          contract: this.args.contractName,
          method: this.args.method,
        })
      },
    },
    created () {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', this.args)
    },
  }
</script>

