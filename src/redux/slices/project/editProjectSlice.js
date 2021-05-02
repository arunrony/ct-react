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
    isLoading: false
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
    editProjectCancelAction() {
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
    },
    updateProjectNameAction(state) {
      return{
        ...state,
        isLoading: true
      }
    },
    setUpdateProjectNameFailedAction(state, action){
      console.log("failed edit")
      console.log(action.payload)
      // const {message} = action.payload
      return {
        ...state,
        errorMessage: action.payload.message,
        isLoading: false,
        successMessage: ""
      }
    },
    setUpdateProjectNameSuccessAction(state, action) {
      return{
        ...state,
        isLoading: false,
        successMessage: action.payload.message,
        errorMessage: ""
      }
    }
  }
})

export const {
  projectEditClickAction,
  changeProjectNameAction,
  editProjectCancelAction,
  updateProjectNameAction,
  setUpdateProjectNameFailedAction,
  setUpdateProjectNameSuccessAction
} = editProject.actions

export default editProject.reducer