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
  }

})

export const {getProjectsAction, setGetProjectsSuccessAction} = projectsSlice.actions
export default projectsSlice.reducer