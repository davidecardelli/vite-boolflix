<script>
export default {
    name: 'Card',
    data() {
        return {
            posterBaseUri: 'https://image.tmdb.org/t/p/w342/',
        }
    },
    props: {
        item: Object,
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language)
        },

        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url)
            return url.href
        },

        posterSrc() {
            const posterSrc = `${this.posterBaseUri}${this.item.poster_path}`
            console.log(posterSrc)
            return posterSrc
        },
        starFull() {
            return this.starFull = Math.ceil(this.item.vote_average / 2);
        },
        starEmpty() {
            return this.starEmpty = 5 - this.starFull;
        }
    },
}
</script>



<template>
    <ul>
        <li>
            <img :src="posterSrc" :alt="item.original_title || item.original_name">
        </li>
        <li>{{ item.title || item.name }}</li>
        <li>{{ item.original_title || item.original_name }}</li>
        <li>
            <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <div v-else>{{ item.original_language }}</div>
        </li>
        <li>{{ item.vote_average }}</li>
        <li>
            <i v-for="i in starFull" :key="i" class="fa-solid fa-star"></i>
            <i v-for="i in starEmpty" :key="i" class="fa-regular fa-star"></i>
        </li>
    </ul>
</template>