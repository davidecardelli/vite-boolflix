<script>
import axios from 'axios';
import { api } from './assets/data'
import { store } from './assets/data/store';
import SearchBar from './components/SearchBar.vue';
import ContainerCard from './components/ContainerCard.vue';

export default {
  name: 'Boolflix',
  components: { SearchBar, ContainerCard },
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

  <!-- ! Inizio Header ! -->
  <header>
    <div class="container d-flex justify-content-between align-items-center h-100">
      <h1 class="text-uppercase m-0 p-0">Boolflix</h1>
      <search-bar @term-has-change="updateSearchTerm" @submit-form="searchTerm"></search-bar>
    </div>
  </header>
  <!-- ! Fine Header ! -->

  <!-- ! Inizio Main ! -->
  <main>
    <container-card title="Film:" collection="films"></container-card>
    <container-card title="Serie:" collection="series"></container-card>
  </main>
  <!-- ! Fine Main !-->

</template>

<style lang="scss">
@use'./assets/style/style.scss';
</style>