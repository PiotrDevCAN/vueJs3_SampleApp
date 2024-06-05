const fetchDataModule = {
  // namespace the module
  namespaced: true,
  state() {
    return {
      httpFetchPosts: {}
    }
  },
  getters: {
    getHttpFetchPosts(state) {
      return state.httpFetchPosts
    }
  },
  mutations: {
    setFetchPosts(state, payload) {
      state.httpFetchPosts = payload
    }
  },
  actions: {
    setFetchPosts(context) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          // this.httpFetchPosts = data
          this.isLoading = false

          // specify value for payload - trigger mutation
          context.commit('setFetchPosts', data);
        })
    },

    // automatically get 'payload' param
    setFetchPostsWithData(context, payload) {

      // forward payload to 'dispatch' method
      context.commit('setFetchPosts', payload);
    }
  }
}

export default fetchDataModule