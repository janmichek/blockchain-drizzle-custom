<template>
  <div class="custom-account">
    <div>{{ activeAccount }}</div>
    <div>Balance {{ activeBalance }}</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: 'CustomAccount',
    computed: mapGetters('accounts', ['activeAccount', 'activeBalance']),
  }
</script>
