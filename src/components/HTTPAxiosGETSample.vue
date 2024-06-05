<template>
  <hr>
  <button @click="setAxiosPosts">Show AXIOS Posts</button>
  <hr>

  <p v-if="isLoading">Loading...</p>

  <!-- <div v-for="post in $store.getters['axiosMod/getHttpAxiosPosts']" :key="post.id"> -->
  <div v-for="post in getHttpAxiosPosts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('axiosMod', ['getHttpAxiosPosts'])
  },
  methods: {
    ...mapActions('axiosMod', ['setAxiosPosts'])
  },
  // methods: {
  //   getPosts() {
  //     this.isLoading = false,
  //       this.$store.dispatch('axiosMod/setAxiosPosts')
  //   }
  // },
  mounted() {
    // this.getPosts()
  }
}
</script>