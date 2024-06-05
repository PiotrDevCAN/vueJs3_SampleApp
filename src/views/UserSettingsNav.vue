<template>
    <div class="us__nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <br />
      <router-link :to="{ name: 'helloWorld' }">Hello World</router-link>
      <br />
      <router-link to="/settings/emails">emails</router-link>
      <br />
      <router-link to="/settings/profile">profile</router-link>
    </div>
  </template>