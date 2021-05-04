import {call, put} from "redux-saga/effects";
import {setGetProjectsSuccessAction} from "../../slices/project/projectsSlice";
import {
  createGeoTIFFProjectHandlerRequest,
  createRawProjectRequest,
  deleteProjectRequest,
  getProjectRequest,
  updateProjectNameRequest, uploadRawProjectImageRequest
} from "../requests/projectRequest";
import {
  setUpdateProjectNameFailedAction,
  setUpdateProjectNameSuccessAction
} from "../../slices/project/editProjectSlice";
import {setDeleteProjectFailedAction, setDeleteProjectSuccessAction} from "../../slices/project/deleteProjectSlice";
import {
  setCreateRawProjectFailedAction,
  setCreateRawProjectSuccessAction
} from "../../slices/project/createProjectSlice";

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

export function* createRawProjectHandler(action) {
  try {
    const response = yield call(createRawProjectRequest, action.payload)
    const {status} = response.data
    if (status === "ok") {
      yield put(setCreateRawProjectSuccessAction({...response.data}))
    } else {
      yield put(setCreateRawProjectFailedAction({...response.data}))
    }
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export function* uploadRawProjectImageHandler(action) {
  try {
    const response = yield call(uploadRawProjectImageRequest, action.payload)
    const {status} = response.data
    if (status === "ok") {
      console.log("success")
      // yield put(setCreateRawProjectSuccessAction({...response.data}))
    } else {
      console.log("failed")
      // yield put(setCreateRawProjectFailedAction({...response.data}))
    }
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export function* createGeoTIFFProjectHandler(action) {
  try {
    const response = yield call(createGeoTIFFProjectHandlerRequest, action.payload)
    const {status} = response.data
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}