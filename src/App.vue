<script>
import axios from 'axios';
import { api } from './assets/data'
import { store } from './assets/data/store';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'Boolflix',
  components: { SearchBar },
  data() { return { store, searchedTitle: '' } },
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

    callApi(endpoint, typology) {
      axios.get(`${api.baseUri}${endpoint}`, this.urlConfig)
        .then(res => {
          this.store[typology] = res.data.results;
        })
    },

    searchTerm() {
      if (!this.searchedTitle) {
        this.store.films = [];
        this.store.series = [];
        return;
      }
      this.callApi(api.getMovies, 'films')
      this.callApi(api.getTvSeries, 'series')
    },

  }
}
</script>

<template>
  <search-bar @term-has-change="updateSearchTerm" @submit-form="searchTerm"></search-bar>

  <h2>Film</h2>
  <ul v-for="film in store.films" :key="film.id">
    <li>{{ film.title }}</li>
    <li>{{ film.original_title }}</li>
    <li>{{ film.original_language }}</li>
    <li>{{ film.vote_average }}</li>
  </ul>

  <h2>Serie</h2>
  <ul v-for="serie in store.series" :key="serie.id">
    <li>{{ serie.name }}</li>
    <li>{{ serie.original_name }}</li>
    <li>{{ serie.original_language }}</li>
    <li>{{ serie.vote_average }}</li>
  </ul>



</template>
