import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import MailIcon from "@material-ui/icons/Mail";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from "@material-ui/core/AppBar";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import logo from "../../images/core/logo-long.svg";
import RightSideMenu from "./RightSideMenu";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    minHeight: 70
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    }
  },
  linkBrand: {
    lineHeight: 1,
    marginRight: 'auto',
    minWidth:"250px",
    [theme.breakpoints.down('md')]: {
      minWidth:"200px",
    }
  },
}));

const DashboardAppBar = ({toggleDrawer}) => {
  const classes = useStyles()
  const [anchorEL, setAnchorEL] = useState(null);
  const [selectedLink, setSelectedLink] = useState(1);
  const handleOpen = (e) => setAnchorEL(e.currentTarget);
  const handleClose = () => setAnchorEL(null);
  const handleSelect = (name) => {
    setSelectedLink(name);
    console.log(name)
    handleClose();
  };
  return(
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Link href="#" color="inherit" underline="none" variant="h5" className={classes.linkBrand}>
            <img src={ logo } alt=""  className={classes.linkBrand}/>
          </Link>
          <Button color="inherit" onClick={handleOpen} endIcon={<ExpandMoreIcon/>}>
            Arun Bamniya
          </Button>
          <RightSideMenu
            selectedAL={anchorEL}
            handleClose={handleClose}
            handleSelect={handleSelect}
          />
        </Toolbar>
      </AppBar>
  )
}

export default DashboardAppBar