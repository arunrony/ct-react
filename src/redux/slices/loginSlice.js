import { createSlice } from '@reduxjs/toolkit'


const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    login() {},
    setUser(state , action) {
        console.log({...state})
        console.log(action.payload)
        return {
            ...state,
            ...action.payload
        }
    }
  }
})

export const { login, setUser } = loginSlice.actions

export default loginSlice.reducer