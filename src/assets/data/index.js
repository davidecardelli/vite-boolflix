// Creao questo index.js con i miei dati statici in maniera da portarmi dietro il BaseUri e i vari endpoint che mi serviranno a generare le chiamate API in APP.vue che sarà l'unico componente che comunicherà con le API.

const apiUri = 'https://api.themoviedb.org/3'; //base url
const getMovies = '/search/movie'; //endpoint per cercare i film
const getTvSeries = '/search/tv'; //endpoint per cercare i film
const apiKey = '?api_key=af822cdedab9eedc4c5bb768e026bddd'; //apiKey personale
const langIt = '&language=it-IT'; // filtro per la lingua

export { apiUri, getMovies, getTvSeries, apiKey, langIt, } //esporto per poterlo usare dove mi serve
