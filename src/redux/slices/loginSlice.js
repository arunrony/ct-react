import {createSlice} from '@reduxjs/toolkit'


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    errors: {},
    isAuthenticated: false
  },
  reducers: {
    login(state) {
      return {
        ...state,
        isLoading: true
      }
    },
    googleLoginAction() {
    },
    setLoginSuccessResponse(state, action) {
      const {key} = action.payload
      localStorage.setItem("token", key)
      localStorage.setItem("isAuthenticated", "true")

      return {
        errors: {},
        isLoading: false,
        isAuthenticated: true
      }
    },
    setLoginErrorResponse(state, action) {
      localStorage.setItem("isAuthenticated", "false")
      localStorage.removeItem("token")
      return {
        isLoading: false,
        isAuthenticated: false,
        errors: action.payload,
      }
    }
  }
})

export const {login, setLoginSuccessResponse, googleLoginAction, setLoginErrorResponse} = loginSlice.actions

export default loginSlice.reducer