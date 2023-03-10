import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  name: null,
  token: null,
  id: null
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser (state) {
      state.name = null
      state.email = null
      state.token = null
      state.id = null
    }
  }
})

export const { setUser, removeUser } = userReducer.actions

export default userReducer.reducer
