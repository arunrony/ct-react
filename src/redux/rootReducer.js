import loginSlice from "./slices/loginSlice";
import {combineReducers} from "redux";
import signupSlice from "./slices/signupSlice";

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice
})


export default rootReducer;