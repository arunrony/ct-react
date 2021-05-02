import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Accordion, AccordionDetails, Divider, Paper} from "@material-ui/core";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TerrainIcon from '@material-ui/icons/Terrain';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import StraightenIcon from '@material-ui/icons/Straighten';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import TransformIcon from '@material-ui/icons/Transform';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import GetAppIcon from '@material-ui/icons/GetApp';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ProjectSelect from "../project/ProjectSelect";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  iconWrapper: {
    minWidth: 40,
    display: "inline-flex",
  },
  icon: {
    color: theme.palette.primary,
  },
  accordion:{
    border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: theme.palette.secondary,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  accordionSummary: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
     minHeight: 56,
    },
  }
}));

const LeftSideBarItemsList = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (index) => (event, newExpanded) => {
    setExpanded(newExpanded ? index : false);
  }
    const menuItems = [
      {name: "Projects", icon: <PermMediaIcon className={classes.icon}/>, expand:
          {name: "panel1", aria: "panel1d-content", id: "panel1d-header"}},
      {name: "Flights", icon: <FlightTakeoffIcon className={classes.icon}/>, expand: {}},
      {name: "Materials", icon: <ViewQuiltIcon className={classes.icon}/>, expand: {}},
      {name: "See", icon: <VisibilityIcon className={classes.icon}/>, expand: {}},
      {name: "Measure", icon: <StraightenIcon className={classes.icon}/> ,expand: {}},
      {name: "Smart Tracking", icon: <TerrainIcon className={classes.icon}/> , expand: {}},
      {name: "Design", icon: <TransformIcon className={classes.icon}/>, expand: {}},
      {name: "Report", icon: <CreateNewFolderIcon className={classes.icon}/>, expand: {}},
      {name: "Export", icon: <GetAppIcon className={classes.icon}/>, expand: {}},
    ]
    return (
      <>
        <div className={classes.root}>
          <ProjectSelect/>
          <Divider/>

          {menuItems.map((item, index) => (
            <Accordion key={index} className={classes.accordion} square expanded={expanded === item.expand.name} onChange={handleChange(item.expand.name)}>
              <AccordionSummary className={classes.accordionSummary} aria-controls={item.expand.aria} id={item.expand.id}>
                <Box display="flex"><div style={{marginRight: 10}}>{item.icon}</div><Typography>{item.name}</Typography></Box>
              </AccordionSummary>
              <AccordionDetails>
                <div>hello</div> {/*<ProjectSelect/>*/}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </>
    )
  }

  export default LeftSideBarItemsList