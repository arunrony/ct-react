import {takeLatest} from "redux-saga/effects"
import {googleLoginAction, login} from "../slices/loginSlice";
import {googleLoginHandler, loginHandler} from "./handlers/loginHandler";
import {signupAction} from "../slices/signupSlice";
import {signupHandler} from "./handlers/signupHandler";
import {passwordResetAction} from "../slices/passwordResetSlice";
import {passwordResetHandler} from "./handlers/passwordResetHandler";
import {setPasswordAction} from "../slices/setPasswordSlice";
import {setPasswordHandler} from "./handlers/setPasswordHandler";
import {takeLeading, takeEvery} from "@redux-saga/core/effects";
import {getProjectsAction} from "../slices/project/projectsSlice";
import {
    createGeoTIFFProjectHandler,
    createRawProjectHandler,
    deleteProjectHandler,
    getProjectHandler,
    updateProjectNameHandler, uploadRawProjectImageHandler
} from "./handlers/projectHandler";
import {updateProjectNameAction} from "../slices/project/editProjectSlice";
import {deleteProjectAction} from "../slices/project/deleteProjectSlice";
import {
    createGeoTIFFProjectAction,
    createRawProjectAction,
    uploadRawProjectImageAction
} from "../slices/project/createProjectSlice";

export function* watcherSaga(){
    yield takeLeading(login.type, loginHandler)
    yield takeLeading(signupAction.type, signupHandler)
    yield takeLatest(googleLoginAction.type, googleLoginHandler)
    yield takeLeading(passwordResetAction.type, passwordResetHandler)
    yield takeLeading(setPasswordAction.type, setPasswordHandler)
    yield takeLeading(getProjectsAction.type, getProjectHandler)
    yield takeLeading(updateProjectNameAction.type, updateProjectNameHandler)
    yield takeLeading(deleteProjectAction.type, deleteProjectHandler)
    yield takeLeading(createRawProjectAction.type, createRawProjectHandler)
    yield takeEvery(uploadRawProjectImageAction.type, uploadRawProjectImageHandler)
    yield takeLeading(createGeoTIFFProjectAction.type, createGeoTIFFProjectHandler)
}
