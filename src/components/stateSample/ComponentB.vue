<template>
    <p>Component B</p><hr>
    {{ userName }}
    <component-c />
  </template>
  
  <script>
  import ComponentC from './ComponentC.vue'
  
  export default {
    components: { ComponentC },
    inject: ['userName']
  }
  </script>