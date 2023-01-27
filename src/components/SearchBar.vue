<script>
export default {
    name: 'SearchBar',
    data() {
        return { searchTerm: '' }
    },
    emits: ['term-has-change']
}

</script>

<template>

    <form>
        <input type="text" v-model.trim="searchTerm" placeholder="Cerca.."
            @keyup="$emit('term-has-change', searchTerm)">
        <button>Cerca</button>
    </form>

</template>