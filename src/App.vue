<script>
import axios from 'axios';
import { api } from './assets/data'
import { store } from './assets/data/store';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'Boolflix',
  components: { SearchBar },
  data() {
    return { store, searchedTitle: '' }
  },
  computed: {
    urlConfig() {
      const { api_key, language } = api;
      return {
        params: {
          api_key: api_key,
          language: language,
          query: this.searchedTitle
        }
      }
    }
  },
  methods: {
    updateSearchTerm(searchTerm) {
      this.searchedTitle = searchTerm;
    },

    searchTerm() {
      axios.get(`${api.baseUri}/search/movie`, this.urlConfig)
        .then(res => {
          this.store.films = res.data.results;
        }).catch(err => { console.error(err) });
    },
  }
}
</script>

<template>
  <search-bar @term-has-change="updateSearchTerm" @submit-form="searchTerm"></search-bar>
</template>
