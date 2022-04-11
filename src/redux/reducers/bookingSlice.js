import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { rapAPI } from './../../api/rapAPI'

export const getTickets = createAsyncThunk('booking/getTickets', async (id) => {
  const { content } = await rapAPI.getInfoLichChieuPhim(id)
  return content.heThongRapChieu
})

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    loading: false,
    visibleModal: false,
    heThongRapChieu: null,
    heThongRap: {}
  },

  reducers: {
    setVisible: (state, action) => {
      state.visibleModal = action.payload
    },

    setHeThongRap: (state, action) => {
      let result = state.heThongRapChieu.find((item) => {
        return item.maHeThongRap === action.payload
      })
      state.heThongRap = result
    }
  },

  extraReducers: {
    [getTickets.fulfilled]: (state, action) => {
      state.heThongRapChieu = action.payload
      state.heThongRap = state.heThongRapChieu[0]
    }
  }
})

export const { setVisible, setHeThongRap } = bookingSlice.actions
export default bookingSlice.reducer
