<template>
    <br />
    --------
    <greeting-message ref="componentRef" />
    --------
    <br />
</template>

<script>
import GreetingMessage from './GreetingMessage.vue'

export default {
    components: { GreetingMessage },
    mounted() {
        console.log('TEST')
        console.log(this.$refs)
        console.log(this.$refs.componentRef.msg)
    }
}
</script>