<script>
import axios from 'axios';
import { api } from './assets/data'
import { store } from './assets/data/store';
import SearchBar from './components/SearchBar.vue';
import Card from './components/Card.vue';

export default {
  name: 'Boolflix',
  components: { SearchBar, Card },
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

    <!--** Inizio Sezione Film **-->
    <section id="films" class="container mt-4">
      <h2 class="text-center mb-3" v-if="store.films.length">Film:</h2>
      <div class="row row-cols-5">
        <card v-for="film in store.films" :key="film.id" :item="film"></card>
      </div>
    </section>
    <!-- ** Fine Sezione Film ** -->

    <!-- ** Inizio Sezione Serie **-->
    <section id="series" class="container mt-4 mb-4">
      <h2 class="text-center mb-3" v-if="store.series.length">Serie:</h2>
      <div class="row row-cols-5">
        <card v-for="serie in store.series" :key="serie.id" :item="serie"></card>
      </div>
    </section>
    <!-- ** Fine Sezione Serie ** -->

  </main>
  <!-- ! Fine Main !-->

</template>

<style lang="scss">
@use'./assets/style/style.scss';
</style>