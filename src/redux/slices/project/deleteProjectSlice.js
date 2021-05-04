import {createSlice} from "@reduxjs/toolkit";

const deleteProjectSlice = createSlice({
  name: "deleteProject",
  initialState: {
    projectName: "",
    deleteSelectedProject: null,
    deleteActive: false,
    isLoading: false,
    successMessage: "",
    errorMessage: "",
    showSnackbar:false
  },
  reducers: {
    projectDeleteCLickAction(state, action) {
      return {
        ...state,
        deleteSelectedProject: action.payload.selectedProject,
        projectName: action.payload.projectName,
        deleteActive: true
      }
    },
    resetProjectDeleteAction() {
      return {
        projectName: "",
        deleteSelectedProject: null,
        deleteActive: false,
        isLoading: false,
        successMessage: "",
        errorMessage: ""
      }
    },
    deleteProjectAction(state, action) {
      return {
        ...state,
        isLoading: true
      }
    },
    setDeleteProjectSuccessAction(state, action) {
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        successMessage: action.payload.message,
        showSnackbar: true
      }
    },
    setDeleteProjectFailedAction(state, action) {
      return{
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
        successMessage: "",
        showSnackbar: true
      }
    }
  }
})

export const {
  projectDeleteCLickAction,
  resetProjectDeleteAction,
  deleteProjectAction,
  setDeleteProjectSuccessAction,
  setDeleteProjectFailedAction
} = deleteProjectSlice.actions
export default deleteProjectSlice.reducer