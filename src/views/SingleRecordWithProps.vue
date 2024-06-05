<template>
    Single record by ID (with props example): 
    <p>
        <b>{{ $route.params.id }} (route param) == {{ id }} (prop value)</b>
    </p>
</template>

<script>
export default {
    props: ['id']
}
</script>
