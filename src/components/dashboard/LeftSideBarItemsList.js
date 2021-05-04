import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Accordion, AccordionDetails, Avatar, Collapse, Divider, ListItemAvatar, Paper} from "@material-ui/core";
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
import {useDispatch, useSelector} from "react-redux";
import {updateCollapseValueAction} from "../../redux/slices/leftDrawerSlice";

const useStyles = makeStyles((theme) => ({}));

const iconMap ={
  PermMediaIcon: <PermMediaIcon />,
  FlightTakeoffIcon: <FlightTakeoffIcon/>,
  ViewQuiltIcon: <ViewQuiltIcon/>,
  VisibilityIcon: <VisibilityIcon/>,
  StraightenIcon: <StraightenIcon/>,
  TerrainIcon: <TerrainIcon/>,
  TransformIcon: <TransformIcon/>,
  CreateNewFolderIcon:<CreateNewFolderIcon/>,
  GetAppIcon:<GetAppIcon/>
}

const childMap = {
  ProjectSelect: <ProjectSelect/>
}

const LeftSideBarItemsList = () => {
  const menuItems = useSelector(state => state.leftDrawer)
  const dispatch = useDispatch()

    return (
      <>
        <List component="nav">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => dispatch(updateCollapseValueAction({id:index}))}
              selected={item.expand.open}>
                <ListItemAvatar>
                    <Avatar>
                      {iconMap.hasOwnProperty(item.icon) && iconMap[item.icon]}
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider />
              <Collapse
                in={item.expand.open}
                unmountOnExit
              >
                {childMap.hasOwnProperty(item.child) && childMap[item.child]}
              </Collapse>
            </React.Fragment>
          ))}
        </List>



      </>
    )
  }

  export default LeftSideBarItemsList