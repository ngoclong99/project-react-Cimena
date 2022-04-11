import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { rapAPI } from './../../api/rapAPI'

export const getTrailer = createAsyncThunk('trailer/getTrailer', async (id) => {
  const { content } = await rapAPI.useMovieDetail(id)
  console.log(content)
  return content
})

const trailerSlice = createSlice({
  name: 'trailer',
  initialState: {
    loading: false,
    visibleModal: false,
    trailer: ''
  },

  reducers: {
    setVisibleTrailer: (state, action) => {
      state.visibleModal = action.payload
    },

    setTrailer: (state, action) => {
      state.trailer = action.payload
    }
  },

  extraReducers: {
    [getTrailer.fulfilled]: (state, action) => {
      state.trailer = action.payload
    }
  }
})

export const { setVisibleTrailer, setTrailer } = trailerSlice.actions
export default trailerSlice.reducer
