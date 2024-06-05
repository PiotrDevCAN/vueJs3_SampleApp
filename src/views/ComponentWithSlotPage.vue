<template>
    <h1>Component with slot sample</h1>

    <!-- component with slot -->
    <component-with-slot />

    <component-with-slot>
        <h2>Card Title</h2>
        <img src="https://picsum.photos/200">
        <button>Read more...</button>
    </component-with-slot>

    <ComponentWithSlot>
        <img src="https://picsum.photos/200">
    </ComponentWithSlot>
</template>

<script>
import ComponentWithSlot from '../components/ComponentWithSlot.vue'

export default {
    name: "ComponentWithSlotPage",
    components: {
        ComponentWithSlot
    }
}
</script>
