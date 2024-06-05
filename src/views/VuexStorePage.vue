<template>
    Vuex Store page
    <p>Update field in HEADER</p>
    <button @click="incrementCounter">Increment</button>
</template>

<script>
export default {
    methods: {
        incrementCounter() {
            this.$store.dispatch('increment')
        },
    },
    mounted() {
        alert('mounted VUEX Store');
    }
}
</script>