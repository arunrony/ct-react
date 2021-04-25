import {takeLatest} from "redux-saga/effects"
import {login} from "../slices/loginSlice";
import {loginHandler} from "./handlers/loginHandler";
import {signupAction} from "../slices/signupSlice";
import {signupHandler} from "./handlers/signupHandler";
export function* watcherSaga(){
    yield takeLatest(login.type, loginHandler)
    yield takeLatest(signupAction.type, signupHandler)
}