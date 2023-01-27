<script>
import axios from 'axios'; //importo axios
import { store } from './store/store.js'; //importo lo store perchè dovrò riempirlo in base alle chiamate API
import { apiUri, getMovies, getTvSeries, apiKey, langIt, } from './assets/data' //importo per poter poi generare le url per le chiamte API

export default {
  name: 'Boolflix',
  components: {},
  data() {
    return { store }
  },
  methods: {

  }
}
</script>

<template>


</template>

<style lang="scss">

</style>