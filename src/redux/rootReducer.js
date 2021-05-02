import loginSlice from "./slices/loginSlice";
import {combineReducers} from "redux";
import signupSlice from "./slices/signupSlice";
import passwordReset from "./slices/passwordResetSlice"
import setPassword from "./slices/setPasswordSlice"
import mapbox from "./slices/mapboxSlice"
import project from "./slices/project/projectsSlice"
import notification from "./slices/notificationSlice"
import editProject from "./slices/project/editProjectSlice"

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
    passwordReset: passwordReset,
    setPassword: setPassword,
    mapbox: mapbox,
    project: project,
    notification: notification,
    editProject: editProject
})


export default rootReducer;