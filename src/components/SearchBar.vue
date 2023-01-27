<script>
export default {
    name: 'SearchBar',
    data() {
        return { searchTerm: '' }
    },
    emits: ['term-has-change', 'submit-form']
}

</script>

<template>

    <form @submit.prevent="$emit('submit-form')">
        <input type="text" v-model.trim="searchTerm" placeholder="Cerca.."
            @keyup="$emit('term-has-change', searchTerm)">
        <button>Cerca</button>
    </form>

</template>