<template>
    <h1>Iteration over variable!</h1>

    <p v-for="name in names" :key="name">
        {{ name }}
    </p>
</template>

<script>
export default {
    data() {
        return {
            names: ['John', 'Jane']
        }
    }
}
</script>