<template>
    <button @click="increment">Increment</button>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$store.commit('incrementCommonState')
        }
    }
}
</script>