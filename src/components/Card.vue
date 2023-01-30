<script>
export default {
    name: 'Card',
    data() {
        return {
            posterBaseUri: 'https://image.tmdb.org/t/p/w342/',
            placeholder: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
        }
    },
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en', 'es', 'fr', 'pl', 'sv', 'tl', 'hi', 'pt', 'ko', 'nl', 'de', 'ja', 'id', 'ro', 'hu', 'mo', 'ru', 'mk'];
            return flags.includes(this.item.original_language)
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url)
            return url.href
        },
        posterSrc() {
            const posterSrc = `${this.posterBaseUri}${this.item.poster_path}`
            if (!this.item.poster_path) return this.placeholder
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
    <div class="card-film mb-4">
        <img :src="posterSrc" :alt="item.original_title || item.original_name">
        <div class="card-film-data p-3">
            <h2 class="text-uppercase mb-2">{{ item.title || item.name }}</h2>
            <h6 class="mb-2">{{ item.original_title || item.original_name }}</h6>
            <div class="d-flex flex-align-center justify-content-center mb-2">
                <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language" class="flag">
                <div v-else class="h6">Original language: {{ item.original_language }}</div>
            </div>
            <p class="overview px-1 mb-2">{{ item.overview }}</p>
            <div>
                <i v-for="i in starFull" :key="i" class="fa-solid fa-star m-0"></i>
                <i v-for="i in starEmpty" :key="i" class="fa-regular fa-star m-0"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../assets/style/partials/variables' as *;

.card-film {
    text-align: center;
    position: relative;

    img {
        height: 100%;
        width: 100%;
    }
}

.card-film-data {
    color: white;
    visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;

    h2 {
        font-size: 16px
    }

    h6,
    .h6 {
        font-size: 12px
    }

    p {
        font-size: 10px
    }

    .flag {
        width: 30px;
    }

    .fa-star {
        font-size: 0.7rem;
        color: $star;
    }
}

.card-film:hover .card-film-data {
    background-color: rgba(0, 0, 0, 0.8);
    visibility: visible;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
}
</style>