import {makeStyles} from "@material-ui/core/styles";
import DashboardAppBar from "./DashboardAppBar";
import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useEffect, useState} from "react";
import MapBox from "mapbox-gl/dist/mapbox-gl"
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  content: {
    flexGrow: 1,
  },
   toolbar: {
    minHeight: 70
  },
  map: {
      height:"100vh",
    width: "100%"
  }
  })
)
const DashboardLayout = () => {
  const [drawerState, setDrawerState] = useState({open: false});
  const mapData = useSelector(state => state.mapbox)
  useEffect(() => {
    console.log("inside Use efecr")
    MapBox.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC_ACCESS_TOKEN
    const map = new MapBox.Map(mapData)
    map.addControl(new MapBox.NavigationControl())
  }, [mapData])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({...drawerState, open});
  };

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <DashboardAppBar toggleDrawer={toggleDrawer}/>
      <DesktopDrawer/>
      <MobileDrawer drawerState={drawerState} toggleDrawer={toggleDrawer}/>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <div id="map" className={classes.map}>Main Area</div>
      </main>
    </div>
  )
}
export default DashboardLayout