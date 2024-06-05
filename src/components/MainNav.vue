<template>
  <div class="us__nav">
    <router-link to="/">home</router-link>
    <br />
    <h1>Hello, name:(({{ name }})) prop1:({{ prop1 }}) prop2:({{ prop2 }}) prop3:({{ prop3 }})</h1>
    <br />
    <router-link to="/settings/emails">emails</router-link>
    <br />
    <router-link to="/settings/profile">profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    name: {
      type: String,
      default: 'Default String',
    },
    prop1: String,
    prop2: {
      type: String,
      required: true,
    },
    prop3: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
.router-link-exact-active {
  color: red
}
</style>