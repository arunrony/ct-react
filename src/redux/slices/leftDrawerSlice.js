import {createSlice} from "@reduxjs/toolkit";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import ProjectSelect from "../../components/project/ProjectSelect";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StraightenIcon from "@material-ui/icons/Straighten";
import TerrainIcon from "@material-ui/icons/Terrain";
import TransformIcon from "@material-ui/icons/Transform";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import GetAppIcon from "@material-ui/icons/GetApp";
import React from "react";

const leftDrawerSlice = createSlice({
  name: "leftDrawer",
  initialState:[
      {name: "Projects", icon: "PermMediaIcon", expand:
          {open: true}, child: "ProjectSelect"},
      {name: "Flights", icon: "FlightTakeoffIcon", expand: {open: false}, child: "ProjectSelect"},
      {name: "Materials", icon: "ViewQuiltIcon", expand: {open: false}, child: ""},
      {name: "See", icon: "VisibilityIcon" , expand: {open: false}, child: ""},
      {name: "Measure", icon: "StraightenIcon" ,expand: {open: false}, child: ""},
      {name: "Smart Tracking", icon: "TerrainIcon" , expand: {open: false}, child: ""},
      {name: "Design", icon: "TransformIcon", expand: {open: false}, child: ""},
      {name: "Report", icon: "CreateNewFolderIcon", expand: {open: false}, child: ""},
      {name: "Export", icon: "GetAppIcon", expand: {open: false}, child: ""},
    ],
  reducers: {
      updateCollapseValueAction(state, action) {
        void(state.map((item, index) => {
      index === action.payload.id ? item.expand.open = !item.expand.open : item.expand.open = false
    }))
      }
  }
})
export const {updateCollapseValueAction} = leftDrawerSlice.actions

export default leftDrawerSlice.reducer
