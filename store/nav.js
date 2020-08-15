export const state = () => ({
  open: false,
  close: true,
  clicked: false,
})

export const mutations = {
  show(state, payload) {
    if (state.clicked) {
    } else {
      state.open = true
      state.close = false
    }
  },
  dissappear(state, payload) {
    if (state.clicked) {
    } else {
      state.open = false
      state.close = true
    }
  },
  stayed(state, payload) {
    state.open = true
    state.clicked = !state.clicked
  },
}
