import React from 'react';
import List from "@material-ui/core/List";
import {IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper} from "@material-ui/core";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";
import {useSelector} from "react-redux";

function ProjectItem({handleEdit, handleDelete, project, hidden}) {
    const projects = useSelector(state => state.project.projectsList)
  return (
    <div style={hidden ? {display: "none"} : {}}>
            <ListItem divider>
              <ListItemText primary={project.name} secondaryTypographyProps={{color: "primary"}} secondary={moment(project.created_at).format('YYYY-MM-DD')}/>
              <ListItemSecondaryAction>
                <ListItemIcon>
                  <IconButton onClick={() => handleEdit(project.id, project.name)}><EditIcon/></IconButton>
                </ListItemIcon>
                <ListItemIcon>
                  <IconButton onClick={() => handleDelete(project.id, project.name)}><DeleteIcon/></IconButton>

                </ListItemIcon>
              </ListItemSecondaryAction>

            </ListItem>
      </div>

  );
}

export default ProjectItem;