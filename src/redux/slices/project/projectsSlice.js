import {createSlice} from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    isLoading: false,
    projectsList: []
  },
  reducers: {
    getProjectsAction(state, action) {
      return {
        ...state,
        isLoading: true
      }
    },
    setGetProjectsSuccessAction(state, action) {
      console.log(action.payload)
      return {
        isLoading: false,
        projectsList: action.payload
      }
    },
    updateProjectsData(state, action) {
      console.log(state)
      console.log(action)
      const index = state.projectsList.findIndex((project) => project.id === action.payload.updatedProject.id)
      void(state.projectsList[index] = action.payload.updatedProject)

    },
    deleteProjectDataAction(state, action) {
      const index = state.projectsList.findIndex((project) => project.id === action.payload.projectId)
      console.log(index)
      void(delete state.projectsList[index])
    }
  }

})

export const {getProjectsAction, setGetProjectsSuccessAction, updateProjectsData, deleteProjectDataAction} = projectsSlice.actions
export default projectsSlice.reducer