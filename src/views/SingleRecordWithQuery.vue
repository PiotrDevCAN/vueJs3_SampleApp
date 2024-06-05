<template>
    Single record by ID (with query):
    <p>
        <b>{{ $route.params.id }} (route param) == {{ id }} (prop value)</b>
    </p>
    <p>
        <b>Name from query: {{ name }}</b>
    </p>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        name() {
            return this.$route.query.name
        }
    }
}
</script>
