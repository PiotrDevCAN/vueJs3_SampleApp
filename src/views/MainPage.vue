<template>
  <h1>Main Page!</h1>

  <h2>Posts read via FETCH</h2>
  <!-- <div v-for="post in $store.getters['fetchMod/getHttpFetchPosts']" :key="post.id"> -->
  <div v-for="post in getHttpFetchPosts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <hr>
  <button @click="setFetchPosts">Show FETCH Posts</button>
  <hr>

  <h2>Posts read via Axios</h2>
  <!-- <div v-for="post in $store.getters['axiosMod/getHttpAxiosPosts']" :key="post.id"> -->
  <div v-for="post in getHttpAxiosPosts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <hr>
  <button @click="setAxiosPosts">Show AXIOS Posts</button>
  <hr>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      isLoading: false,

      // get values from FETCH store
      FetchPosts: this.$store.getters['fetchMod/getHttpFetchPosts'],

      // get values from AXIOS store
      AxiosPosts: this.$store.getters['axiosMod/getHttpAxiosPosts']
    }
  },
  computed: {
    ...mapGetters('fetchMod', ['getHttpFetchPosts']),
    ...mapGetters('axiosMod', ['getHttpAxiosPosts'])
  },
  methods: {
    ...mapActions('fetchMod', ['setFetchPosts']),
    ...mapActions('axiosMod', ['setAxiosPosts'])
  },
  // methods: {
  //   getFetchPosts() {
  //     this.$store.dispatch('fetchMod/setFetchPosts')
  //   },
  //   getAxiosPosts() {
  //     this.$store.dispatch('axiosMod/setAxiosPosts')
  //   }
  // },
  mounted() {
    // this.$store.dispatch('setFetchPosts')
    // this.$store.dispatch('setAxiosPosts')
  }
}
</script>