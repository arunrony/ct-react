import {takeLatest} from "redux-saga/effects"
import {googleLoginAction, login} from "../slices/loginSlice";
import {googleLoginHandler, loginHandler} from "./handlers/loginHandler";
import {signupAction} from "../slices/signupSlice";
import {signupHandler} from "./handlers/signupHandler";

export function* watcherSaga(){
    yield takeLatest(login.type, loginHandler)
    yield takeLatest(signupAction.type, signupHandler)
    yield takeLatest(googleLoginAction.type, googleLoginHandler)
}