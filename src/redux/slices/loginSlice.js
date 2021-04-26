import { createSlice } from '@reduxjs/toolkit'


const loginSlice = createSlice({
  name: 'login',
  initialState: {
      isLoading: false,
      errors: {},
  },
  reducers: {
    login(state) {
        return {
            ...state,
            isLoading: true
        }
    },
    googleLoginAction(){},
    setLoginSuccessResponse(state , action) {
        const {key} = action.payload
        localStorage.setItem("token", key)
        localStorage.setItem("isAuthenticate", "true")
        return {
            errors: {},
            isLoading: false
        }
    },
    setLoginErrorResponse(state, action) {
        localStorage.setItem("isAuthenticate", "false")
        localStorage.removeItem("token")
        return {
            errors: action.payload,
        }
    }
  }
})

export const { login, setLoginSuccessResponse, googleLoginAction, setLoginErrorResponse } = loginSlice.actions

export default loginSlice.reducer