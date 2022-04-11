import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { datveAPI } from './../../api/datveAPI'

//  Thunk API
export const getListSeat = createAsyncThunk('ticket/getListSeat', async (MaLichChieu, thunkAPI) => {
  const { content } = await datveAPI.getListTicket(MaLichChieu)
  return content
})

export const booksTicket = createAsyncThunk('ticket/booksTicket', async (data, thunkAPI) => {
  const { content } = await datveAPI.booksTicket(data)
  return content
})

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    loading: false,
    alert: '',
    listSeat: [],
    info: {},
    bookingSeat: []
  },
  reducers: {
    setSeat: (state, action) => {
      let seat = action.payload
      let index = state.bookingSeat?.findIndex((item) => item.maGhe === seat.maGhe)
      index === -1 ? state.bookingSeat.push(seat) : state.bookingSeat.splice(index, 1)
    },
    setClearSeat: (state, action) => {
      state.bookingSeat.length = 0
    }
  },
  extraReducers: {
    [getListSeat.fulfilled]: (state, action) => {
      state.listSeat = action.payload.danhSachGhe.slice(0, 100)
      state.info = action.payload.thongTinPhim
    },
    [booksTicket.fulfilled]: (state, action) => {
      state.alert = action.payload
    }
  }
})

export const { setSeat, setClearSeat } = ticketSlice.actions
export default ticketSlice.reducer
