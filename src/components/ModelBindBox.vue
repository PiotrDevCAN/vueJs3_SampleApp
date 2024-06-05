<template>
    <p>Name: {{ name }}</p>
    <input type="text" v-model="name">

    <p>Personal Profile: {{ profile }}</p>
    <textarea cols="30" rows="10" v-model="profile"></textarea>
  
    <p>Country: {{ country }}</p>
    <select v-model="country">
      <option value="">Please select your Coutry</option>
      <option value="US">United States</option>
      <option value="UK">United Kingdom</option>
      <option value="AU">Australia</option>
    </select>

    <p>Rate this page: {{ rating }}</p>
    <label><input type="radio" name="rating" value="Bad"  v-model="rating" />  Bad</label><br>
    <label><input type="radio" name="rating" value="Okay" v-model="rating" /> Okay</label><br>
    <label><input type="radio" name="rating" value="Good" v-model="rating" /> Good</label>

    <p>Subscribed: {{ subscribe }}</p>
    <label>
      <input type="checkbox" v-model="subscribe" />
      Do you want to subscribe to our newsletter?
    </label>

  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        profile: '',
        country: '',
        rating: '',
        subscribe: ''
      }
    }
  }
  </script>