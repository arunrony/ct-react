import {call, put} from "redux-saga/effects";
import {getProjectsAction, setGetProjectsSuccessAction} from "../../slices/project/projectsSlice";
import {deleteProjectRequest, getProjectRequest, updateProjectNameRequest} from "../requests/projectRequest";
import {
  setUpdateProjectNameFailedAction,
  setUpdateProjectNameSuccessAction
} from "../../slices/project/editProjectSlice";
import {setDeleteProjectFailedAction, setDeleteProjectSuccessAction} from "../../slices/project/deleteProject";

export function* getProjectHandler(action) {
  try {
    const response = yield call(getProjectRequest);

    const {status, projects} = response.data
    console.log(response.data)
    if (status === "ok") {
      yield put(setGetProjectsSuccessAction(projects))
    }
  } catch (error) {
    console.log(error.response.data)
  }
}

export function* updateProjectNameHandler(action) {
  try {
    const response = yield call(updateProjectNameRequest, action.payload)
    console.log(response)
    const {status} = response.data
    if (status === "ok") {
      console.log(response)
      yield put(setUpdateProjectNameSuccessAction({message: response.data.message, project: response.data.project}))
    } else {
      yield put(setUpdateProjectNameFailedAction({message: response.data.message}))
    }

  } catch (error) {

    console.log(error)
  }
}

export function* deleteProjectHandler(action) {
  try {
    const response = yield call(deleteProjectRequest, action.payload)
    const {status} = response.data
    if (status === "ok") {
      yield put(setDeleteProjectSuccessAction({message: response.data.message}))
    } else {
      yield put(setDeleteProjectFailedAction({message: response.data.message}))
    }
  } catch (error) {
    console.log(error)
  }
}