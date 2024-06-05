<template>
    <button @click="decrement">Decrement</button>
</template>

<script>
export default {
    methods: {
        decrement() {
            this.$store.commit('incrementCommonState')
        }
    }
}
</script>