import { createSelector } from 'reselect'

const checkOutSelecter = (state) => state.ticketSlice.bookingSeat

const totalMonneySelector = createSelector(checkOutSelecter, (list) => {
  const result = list?.reduce((total, item) => total + item.giaVe, 0)
  return result.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
})

export { totalMonneySelector }
