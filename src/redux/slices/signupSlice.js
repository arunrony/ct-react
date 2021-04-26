import { createSlice } from '@reduxjs/toolkit'


const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    isLoading: false,
    errors:{}
  },
  reducers: {
    signupAction(state) {
      return {
        ...state,
        isLoading: true
      }
    },
    setSignupSuccessResponse(state, action) {
      const {key} = action.payload
      localStorage.setItem("token", key)
      localStorage.setItem("isAuthenticate", "true")
      return {
        errors: {},
        isLoading: false
      }
    },
    setSignupErrorResponse(state, action) {
      localStorage.setItem("isAuthenticate", "false")
      localStorage.removeItem("token")
      return {
            errors: action.payload,
        }
    },
  }
})

export const { signupAction, setSignupSuccessResponse, setSignupErrorResponse } = signupSlice.actions

export default signupSlice.reducer