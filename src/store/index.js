import { createStore } from 'vuex'

// import exampleModule to
// use in createStore()
import exampleModule from './example/index'
import fetchDataModule from './FetchData/index'
import axiosDataModule from './AxiosData/index'

const store = createStore({
    modules: {
        exampleMod: exampleModule,
        fetchMod: fetchDataModule,
        axiosMod: axiosDataModule
    },
    state() {
        return {
            counter: 0,
            storeKey: 'some default value'
        }
    },
    /*
      Vuex allows us to fetch data indirectly with getter methods in the getters option of the store.
      Any method we define will also automatically receive the state object as the first parameter.
    */
    getters: {
        getCounter(state) {
            return state.counter
        },
        getNormalizedCounter(state, getter) {
            // get the getCounter() return
            // value from the object
            if (getter.getCounter >= 50) {
                return 50
            }
            return getter.getCounter
        }
    },
    /*
      We want to keep state changes in a single place as much as possible, 
      but sometimes we may need to pass data to a Mutation method.
    */
    /* -------- synchronous -------- */
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload
        },
        incrementCommonState(state, payload) {
            state.counter++
            console.log(payload)
        },
        decrementCommonState(state, payload) {
            state.counter--
            console.log(payload)
        }
    },
    /*
      Actions allow us to perform async operations before a mutation is invoked.
    */
    /* -------- asynchronous -------- */
    actions: {
        increment(context) {
            // commit the 'increment'
            // mutation after 2 seconds
            setTimeout(() => {
                context.commit('increment', 10);
            }, 2000)
        }
    }
})

// export store to use in main.js
export default store