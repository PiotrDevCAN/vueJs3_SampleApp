const counterMutations = {
    increment(state, payload) {
        state.counter = state.counter + payload
    }
}

export default counterMutations