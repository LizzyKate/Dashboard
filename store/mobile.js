export const state = () => ({
  side: false,
})

export const mutations = {
  appear(state, payload) {
    state.side = true
  },
  disappear(state, payload) {
    if (state.side) {
      state.side = false
    }
  },
}
