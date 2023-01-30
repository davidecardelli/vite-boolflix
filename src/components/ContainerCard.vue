<script>
import Card from './Card.vue';
import { store } from '../assets/data/store';

export default {
    name: 'ContainerCard',
    components: { Card },
    data() { return { store } },
    props: {
        collection: String
    }
}
</script>



<template>
    <section id="films" class="container mt-4">
        <h2 class="text-center mb-3" v-if="store.films.length">Film:</h2>
        <div class="row row-cols-5">
            <card v-for="film in store.films" :key="film.id" :item="film"></card>
        </div>
    </section>
</template>
