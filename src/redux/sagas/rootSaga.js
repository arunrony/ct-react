import {takeLatest} from "redux-saga/effects"
import {googleLoginAction, login} from "../slices/loginSlice";
import {googleLoginHandler, loginHandler} from "./handlers/loginHandler";
import {signupAction} from "../slices/signupSlice";
import {signupHandler} from "./handlers/signupHandler";
import {passwordResetAction} from "../slices/passwordResetSlice";
import {passwordResetHandler} from "./handlers/passwordResetHandler";
import {setPasswordAction} from "../slices/setPasswordSlice";
import {setPasswordHandler} from "./handlers/setPasswordHandler";
import {takeLeading} from "@redux-saga/core/effects";
import {getProjectsAction} from "../slices/project/projectsSlice";
import {getProjectHandler, updateProjectNameHandler} from "./handlers/projectHandler";
import {updateProjectNameAction} from "../slices/project/editProjectSlice";

export function* watcherSaga(){
    yield takeLeading(login.type, loginHandler)
    yield takeLeading(signupAction.type, signupHandler)
    yield takeLatest(googleLoginAction.type, googleLoginHandler)
    yield takeLeading(passwordResetAction.type, passwordResetHandler)
    yield takeLeading(setPasswordAction.type, setPasswordHandler)
    yield takeLeading(getProjectsAction.type, getProjectHandler)
    yield takeLeading(updateProjectNameAction.type, updateProjectNameHandler)
}
