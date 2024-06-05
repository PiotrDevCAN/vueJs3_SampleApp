<template>
  <hr>
  <button @click="setFetchPosts">Show FETCH Posts</button>
  <hr>

  <p v-if="isLoading">Loading...</p>

  <!-- <div v-for="p in $store.getters['fetchMod/getHttpFetchPosts']" :key="post.id"> -->
  <div v-for="post in getHttpFetchPosts" :key="post.id">
    <h2>{{ post.id }} - {{ post.title }}</h2>
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
    ...mapGetters('fetchMod', ['getHttpFetchPosts'])
  },
  methods: {
    ...mapActions('fetchMod', ['setFetchPosts'])
  },
  // methods: {
  //   getPosts() {
  //     this.isLoading = false,
  //       this.$store.dispatch('fetchMod/setFetchPosts')
  //   }
  // },
  mounted() {
    // this.getPosts()
  }
}
</script>