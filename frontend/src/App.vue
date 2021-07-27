<template>
  <div v-if="isDrizzleInitialized" id="app">
    <section>
      <h2>Account</h2>
      <custom-account/>
    </section>

    <section>
      <h2>Custom Storage</h2>
      <custom-storage/>
      <custom-storage-form/>
    </section>

    <flash-message/>
  </div>
  <div v-else>
    Loading
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CustomAccount from "./CustomAccount"
  import CustomStorage from "./CustomStorage"
  import CustomStorageForm from "./CustomStorageForm"
  import FlashMessage from "./FlashMessage"

  export default {
    name: 'app',
    components: { FlashMessage, CustomStorageForm, CustomStorage, CustomAccount },
    computed: mapGetters('drizzle', ['isDrizzleInitialized']),
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
</style>
