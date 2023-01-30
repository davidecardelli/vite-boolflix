<script>
import Card from './Card.vue';
import { store } from '../assets/data/store';

export default {
    name: 'ContainerCard',
    components: { Card },
    data() { return { store } },
    props: {
        collection: String,
        title: String
    }
}
</script>



<template>
    <section id="films" class="container mt-4">
        <h2 class="text-center mb-3" v-if="store[collection].length">{{ title }}</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            <card v-for="prodcution in store[collection]" :key="prodcution.id" :item="prodcution"></card>
        </div>
    </section>
</template>
