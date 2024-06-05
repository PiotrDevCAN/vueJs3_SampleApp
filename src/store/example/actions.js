const counterActions = {
    increment(context, payload) {
        context.commit('increment', payload);
    }
}

export default counterActions