import {createSlice} from "@reduxjs/toolkit";

const passwordResetSlice = createSlice({
    name: "passwordReset",
    initialState: {
        isSuccess: false,
        errors: {},
        isLoading: false,
        email: ""
    },
    reducers: {
        passwordResetAction(state, action) {
            return {
                ...state,
                isLoading: true,
                email: action.payload.email
            }
        },
        setpasswordResetSuccessAction(state, action) {
            return {
                isSuccess: true,
                isLoading: false,
                errors: {},
                email: state.email
            }
        },
        setpasswordResetErrorAction(state, action) {
            return {
                isSuccess: false,
                isLoading: false,
                errors: action.payload
            }
        },
    }
})

export const  {passwordResetAction, setpasswordResetErrorAction, setpasswordResetSuccessAction} = passwordResetSlice.actions

export default passwordResetSlice.reducer