<script>
import { store } from '../assets/data/store';
import Card from './Card.vue';
export default {
    name: 'ContainerCard',
    components: { Card },
    data() {
        return { store }
    },
    props: {
        title: String,
        collection: String,
    }
}
</script>

<template>
    <section id="films" class="container mt-4">
        <h2 class="text-center mb-3" v-if="store[collection].length">{{ title }}</h2>
        <div class="row row-cols-5">
            <card v-for="collection in store[collection]" :key="collection.id" :item="collection"></card>
        </div>
    </section>
</template>

