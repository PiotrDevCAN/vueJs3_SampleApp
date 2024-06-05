<template>
    <p>Current value: {{ num }}</p>

    <p>Counter in Counter Box by Getter: {{ $store.getters.getCounter }}</p>
    // avoid direct access to state key
    <p>Counter in Counter Box: {{ $store.state.counter }}</p>

    <button v-on:click="incrementInternalValue">Increase number</button>
    <button v-on:click="decrementInternalValue">Decrease number</button>

    <p v-if="num === 5">Counter equals 5</p>
</template>

<script>
export default {
    name: 'CounterBox',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        incrementInternalValue() {
            this.num++
            // update main store
            this.$store.commit('incrementCommonState')
        },
        decrementInternalValue() {
            this.num--
            // update main store
            this.$store.commit('decrementCommonState')
        }
    },
    watch: {
        num(newValue) {
            if (newValue === 5) alert('Value reached 5')
        }
    } 
}
</script>