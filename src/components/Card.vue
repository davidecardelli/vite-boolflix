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
    <div class="card-film">
        <img :src="posterSrc" :alt="item.original_title || item.original_name">
        <div class="card-film-hover">
            <h2 class="text-uppercase">{{ item.title || item.name }}</h2>
            <h6>{{ item.original_title || item.original_name }}</h6>
            <div class="d-flex flex-align-center justify-content-center">
                <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language" class="flag">
                <div v-else>{{ item.original_language }}</div>
            </div>
            <p class="overview px-1">{{ item.overview }}</p>
            <div>
                <i v-for="i in starFull" :key="i" class="fa-solid fa-star"></i>
                <i v-for="i in starEmpty" :key="i" class="fa-regular fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../assets/style/partials/variables' as *;

.card-film {
    // margin: 5px;
    /* padding: 20px 5px 10px; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* background-blend-mode: color; */
    width: 245px;
    // box-shadow: 10px 10px 10px #111;
    /* transition: background-color .25s linear; */
    text-align: center;
    /* font-family: 'Roboto', sans-serif */
    /* background-size: cover; */
    /* border: 1px solid red; */
    position: relative;

    img {
        height: 100%;
        width: 100%;
    }
}

.card-film-hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    h6 {
        font-size: 12px
    }

    p {
        font-size: 10px
    }

    .flag {
        width: 30px;
    }

    .fa-star {
        font-size: 1.2em;
        color: $star;
    }
}

.card-film:hover .card-film-hover {
    background-color: rgba(0, 0, 0, 0.7);
    visibility: visible;
}
</style>