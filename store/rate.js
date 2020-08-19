export const state = () => ({
  property: {
    title: 'Tasks Completed',
    drop: ['Account settings', 'Support', 'Licence'],
    rate: 8 + '/' + 26,
    full: 'See Details',
  },
  contact: {
    title: 'Contacts',
    drop: ['Account settings', 'Support', 'Licence'],
    rate: 123 + '/' + 127,
    full: 'See Details',
  },
  item: {
    title: 'Items Sold',
    drop: ['Account settings', 'Support', 'Licence'],
    rate: 200 + '/' + 300,
    full: 'See Details',
  },
  notification: {
    title: 'Notifications',
    drop: ['Account settings', 'Support', 'Licence'],
    rate: 50 + '/' + 62,
    full: 'See Details',
  },
  open: false,
})

export const mutations = {
  show(state, payload) {
    if (state.property) {
      state.open = !state.open
    } else if (state.contact) {
      state.open = !state.open
    } else if (state.item) {
      state.open = !state.open
    } else if (state.notification) {
      state.open = !state.open
    } else {
      state.open = false
    }
  },
}
