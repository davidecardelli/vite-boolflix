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

    <form class="input-group" @submit.prevent="$emit('submit-form')">
        <input class="form-control" type="text" v-model.trim="searchTerm" placeholder="Cerca.."
            @keyup="$emit('term-has-change', searchTerm)">
        <button class="btn btn-danger">Cerca</button>
    </form>

</template>

<style lang="scss" scoped>
@use'../assets/style/partials/variables' as *;

.input-group {
    width: 250px;
}

.btn-danger {
    background-color: $primary-color;
}
</style>