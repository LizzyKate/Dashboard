export const state = () => ({
  side: false,
  open: false,
  close: false,
})

export const mutations = {
  appear(state, payload) {
    state.side = true
    state.open = false
    state.close = false
  },
  disappear(state, payload) {
    if (state.side) {
      state.side = false
    }
  },
  show(state, payload) {
    state.open = !state.open
    if (state.open) {
      state.close = false
    }
  },
  hide(state, payload) {
    state.close = !state.close
    if (state.close) {
      state.open = false
    }
  },
}
