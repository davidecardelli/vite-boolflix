<script>
export default {
    name: 'SearchBar',
    data() {
        return { searchTerm: '' }
    }
}

</script>

<template>

    <form>
        <input type="text" v-model.trim="searchTerm">
        <button>Cerca</button>
    </form>

</template>