import loginSlice from "./slices/loginSlice";
import {combineReducers} from "redux";
import signupSlice from "./slices/signupSlice";
import passwordReset from "./slices/passwordResetSlice"
import setPassword from "./slices/setPasswordSlice"

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
    passwordReset: passwordReset,
    setPassword: setPassword
})


export default rootReducer;