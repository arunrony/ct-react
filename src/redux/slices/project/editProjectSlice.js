import {createSlice} from "@reduxjs/toolkit";

const editProject = createSlice({
  name: "editProject",
  initialState: {
    selectedProject: null,
    editActive: false,
    sendEditRequest: false,
    canceledEdit: false,
    projectName: "",
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    updatedProjectData: {},
    showSnackbar: false
  },
  reducers: {
    projectEditClickAction(state, action) {
      const {selectedProject, projectName} = action.payload
      console.log(selectedProject)
      console.log(projectName)
      return {
        ...state,
        selectedProject: selectedProject,
        editActive: true,
        projectName: projectName,
      }
    },
    changeProjectNameAction(state, action) {
      return {
        ...state,
        projectName: action.payload.projectName
      }
    },
    updateProjectNameAction(state) {
      return {
        ...state,
        isLoading: true
      }
    },
    setUpdateProjectNameFailedAction(state, action) {
      console.log("failed edit")
      console.log(action.payload)
      // const {message} = action.payload
      return {
        ...state,
        errorMessage: action.payload.message,
        isLoading: false,
        successMessage: "",
        showSnackbar: true
      }
    },
    setUpdateProjectNameSuccessAction(state, action) {
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload.message,
        errorMessage: "",
        updatedProjectData: action.payload.project,
        showSnackbar: true
      }
    },
    resetProjectEditAction() {
      return {
        selectedProject: null,
        editActive: false,
        sendEditRequest: false,
        canceledEdit: false,
        projectName: "",
        successMessage: "",
        errorMessage: "",
        isLoading: false
      }
    }
  }
})

export const {
  projectEditClickAction,
  changeProjectNameAction,
  updateProjectNameAction,
  setUpdateProjectNameFailedAction,
  setUpdateProjectNameSuccessAction,
  resetProjectEditAction
} = editProject.actions

export default editProject.reducer