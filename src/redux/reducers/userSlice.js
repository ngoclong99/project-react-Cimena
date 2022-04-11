import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from '../../api/useAPI'
import { USER_LOGIN } from '../../util/setting/config'
import StorageKeys from '../../util/setting/storage-keys'

//  Thunk API
export const signIn = createAsyncThunk('user/signIn', async (data, thunkAPI) => {
  const response = await userAPI.signIn(data)
  const { content } = response
  localStorage.setItem(USER_LOGIN, JSON.stringify(content))
  localStorage.setItem(StorageKeys.TOKEN, content.accessToken)
  return content
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: localStorage.getItem(USER_LOGIN) || {}
  },
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.login = action.payload
    }
  }
})

export const {} = userSlice.actions
export default userSlice.reducer
