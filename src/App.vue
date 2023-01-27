<script>
import axios from 'axios'; //importo axios
import { store } from './assets/data/store'; //importo lo store perchè dovrò riempirlo in base alle chiamate API
import { apiUri, getMovies, getTvSeries, apiKey, langIt, } from './assets/data' //importo per poter poi generare le url per le chiamte API
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'Boolflix',
  components: { SearchBar },
  data() {
    return { store, searchedTitle: '' }
  },
  methods: {
    updateSearchTerm(searchTerm) {
      this.searchedTitle = searchTerm;
    },
  }
}
</script>

<template>
  <search-bar @term-has-change="updateSearchTerm"></search-bar>
</template>

<style lang="scss">

</style>