<template>
    <p>Component C</p><hr>
    {{ userName }}
  </template>
  
  <script>
  export default {
    inject: ['userName']
  }
  </script>