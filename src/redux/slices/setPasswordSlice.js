import {createSlice} from "@reduxjs/toolkit";

const setPasswordSlice = createSlice({
    name: "setPassword",
    initialState: {
        errors: {},
        isLoading: false,
        isSuccess: false
    },
    reducers: {
        setPasswordAction(state, action){
            return {
                ...state,
                isLoading: true
            }
        },
        setPasswordErrorAction(state, action){
            return {
                isLoading: false,
                errors: action.payload,
                isSuccess: false
            }
        },
        setPasswordSuccessAction(state, action){
            return {
                isLoading: false,
                errors: {},
                isSuccess: true
            }
        }
    }
})

export const {setPasswordAction, setPasswordErrorAction, setPasswordSuccessAction} = setPasswordSlice.actions

export default setPasswordSlice.reducer