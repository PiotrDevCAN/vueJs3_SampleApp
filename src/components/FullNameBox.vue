<template>
    <p>Your name: {{ fullName }}</p>
  
    <p>First name: <input type="text" @input="getFirstName"></p>
    <p>Last name:  <input type="text" @input="getLastName"></p>

    <button v-on:click="setDefaultFullName">Change name</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: ''
      };
    },
    methods: {
      getFirstName(event) {
        this.firstName = event.target.value
      },
      getLastName(event) {
        this.lastName = event.target.value
      },
      setDefaultFullName() {
        this.firstName = 'Default First Name'
        this.lastName = 'Default Last Name'
      }
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  }
  </script>