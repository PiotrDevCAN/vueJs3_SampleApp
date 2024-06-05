import axios from 'axios'

const axiosDataModule = {
  // namespace the module
  namespaced: true,
  state() {
    return {
      httpAxiosPosts: {},
    }
  },
  getters: {
    getHttpAxiosPosts(state) {
      return state.httpAxiosPosts
    }
  },
  mutations: {
    setAxiosPosts(state, payload) {
      state.httpAxiosPosts = payload
    }
  },
  actions: {
    setAxiosPosts(context) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
          this.isLoading = false

          // specify value for payload - trigger mutation
          context.commit('setAxiosPosts', response.data);
        })
        .catch((error) => console.log(error))
    },

    // automatically get 'payload' param
    setAxiosPostsWithData(context, payload) {

      // forward payload to 'dispatch' method
      context.commit('setAxiosPosts', payload);
    }
  }
}

export default axiosDataModule