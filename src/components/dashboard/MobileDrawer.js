import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LeftSideBarItemsList from "./LeftSideBarItemsList";
import logo from "../../images/core/logo-long.svg";


const useStyles = makeStyles((theme) => ({

  linkBrand: {
    lineHeight: 1,
    marginRight: 'auto',
    minWidth: "250px",
    [theme.breakpoints.down('md')]: {
      minWidth: "200px",
    }
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    width: 300,
  }
}));


const MobileDrawer = ({drawerState, toggleDrawer}) => {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={drawerState.open} onClose={toggleDrawer(false)}>
      <div className={classes.drawerContainer}>
        <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0}
             borderColor="background.emphasis">
          <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
            <img src={logo} alt="" className={classes.linkBrand}/>
          </Link>
        </Box>
        <LeftSideBarItemsList/>
      </div>
    </Drawer>
  )
}

export default MobileDrawer

