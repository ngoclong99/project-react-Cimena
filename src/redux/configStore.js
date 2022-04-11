import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './reducers/bookingSlice'
import trailerSlice from './reducers/trailerSlice'
import userSlice from './reducers/userSlice'
import ticketSlice from './reducers/ticketSlice'

const rootReducer = {
  bookingSlice,
  trailerSlice,
  userSlice,
  ticketSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store
