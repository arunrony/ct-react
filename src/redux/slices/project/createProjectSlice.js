import {createSlice} from "@reduxjs/toolkit";

const createProjectSlice = createSlice({
  name: "createProject",
  initialState: {
    isLoading: false,
    projectId: null,
    projectFilePath: ""
  },
  reducers: {
    resetCreateProjectAction() {
      return {
        projectId: null
      }
    },
    createRawProjectAction(state, action) {
      return {
        ...state,
        isLoading: true
      }
    },
    setCreateRawProjectSuccessAction(state, action) {
      return {
        ...state,
        isLoading: false,
        projectId: action.payload.projectId,
        projectFilePath: action.payload.file_path,
        errorMessage: ""
      }
    },
    setCreateRawProjectFailedAction(state, action) {
      return {
        isLoading: false,
        projectId: null,
        projectFilePath: "",
        showSnackbar: true,
        errorMessage: action.payload.message
      }
    },
    uploadRawProjectImageAction(state, action){
      return{
        ...state,
        isLoading: true
      }
    },
    createGeoTIFFProjectAction(state, action) {
      return{
        ...state,
        isLoading: true
      }
    }
  }
})

export const {
  resetCreateProjectAction,
  createRawProjectAction,
  setCreateRawProjectSuccessAction,
  setCreateRawProjectFailedAction,
  uploadRawProjectImageAction,
  createGeoTIFFProjectAction
} = createProjectSlice.actions

export default createProjectSlice.reducer