import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LeftSideBarItemsList from "./LeftSideBarItemsList";

const useStyles = makeStyles((theme) => ({

  toolbar: {
    minHeight: 70
  },
  drawerRoot: {
    width: 300,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    minWidth: 300,
  },
}));

const DesktopDrawer = () => {
  const classes = useStyles()
  return (
    <Drawer className={classes.drawerRoot} variant="permanent">
      <Toolbar className={classes.toolbar}/>
      <div className={classes.drawerContainer}>
        <LeftSideBarItemsList/>
      </div>
    </Drawer>
  )
}

export default DesktopDrawer

