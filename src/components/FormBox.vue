<template>
    <p>Name: {{ formData.firstName }} {{ formData.lastName }}</p>
    <form @submit.prevent="submitForm">
      <p>
        <label for="firstName">First Name:</label>
        <input id="firstName" type="text" v-model.lazy.trim="formData.firstName">
      </p>
      <p>
        <label for="lastName">Last Name:</label>
        <input id="lastName" type="text" v-model.lazy.trim="formData.lastName">
      </p>
      <button>Submit Form</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          firstName: '',
          lastName: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form Data', this.formData)
      }
    }
  }
  </script>