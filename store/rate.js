export const state = () => ({
  property: [
    {
      title: 'Tasks Completed',
      drop: ['Account settings', 'Support', 'Licence'],
      rate: 8 + '/' + 26,
      full: 'See Details',
      open: false,
      width: 'w-1/4',
      gradient: 'gradientD',
    },
    {
      title: 'Contacts',
      drop: ['Account settings', 'Support', 'Licence'],
      rate: 123 + '/' + 127,
      full: 'See Details',
      open: false,
      width: 'w-1/2',
      gradient: 'gradientP',
    },
    {
      title: 'Items Sold',
      drop: ['Account settings', 'Support', 'Licence'],
      rate: 200 + '/' + 300,
      full: 'See Details',
      open: false,
      width: 'w-3/4',
      gradient: 'gradientI',
    },
    {
      title: 'Notifications',
      drop: ['Account settings', 'Support', 'Licence'],
      rate: 50 + '/' + 62,
      full: 'See Details',
      open: false,
      width: 'w-11/12',
      gradient: 'gradientDe',
    },
  ],
})

export const mutations = {
  // {index:77, show:true}
  show(state, payload) {
    state.property.forEach((element) => {
      element.open = false
    })
    state.property[payload.index].open = payload.show
  },
}
