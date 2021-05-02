import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    open: false,
    type: "success",
    message: ""
  },
  reducers: {
    notificationClose() {
      return {
        open: false,
        type: "success",
        message: ""
      }
    },
    notificationOpen(state, action) {
      return{
        open: true,
        type: action.payload.type,
        message: action.payload.message
      }
    }
  }
})

export const {notificationClose, notificationOpen} = notificationSlice.actions

export default notificationSlice.reducer