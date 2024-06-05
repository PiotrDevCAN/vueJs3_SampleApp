<template>
  <p>Component A</p>
  <hr>
  {{ userName }}
  <component-b />
</template>

<script>
import ComponentB from './ComponentB.vue'

export default {
  components: { ComponentB },
  inject: ['userName']
}
</script>