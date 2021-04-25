import { createSlice } from '@reduxjs/toolkit'


const signupSlice = createSlice({
  name: 'signup',
  initialState: {},
  reducers: {
    signupAction() {},
    // setUser(state , action) {
    //     console.log({...state})
    //     console.log(action.payload)
    //     return {
    //         ...state,
    //         ...action.payload
    //     }
    // }
  }
})

export const { signupAction } = signupSlice.actions

export default signupSlice.reducer