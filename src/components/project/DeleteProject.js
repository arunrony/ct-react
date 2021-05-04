import {IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {deleteProjectAction, resetProjectDeleteAction} from "../../redux/slices/project/deleteProjectSlice";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from '@material-ui/icons/Check';
import React, {useEffect} from "react";
import {notificationOpen} from "../../redux/slices/notificationSlice";
import {deleteProjectDataAction} from "../../redux/slices/project/projectsSlice";

const DeleteProject = () => {
  const {projectName, deleteSelectedProject, showSnackbar, successMessage, errorMessage} = useSelector(state => state.deleteProject)
  const dispatch = useDispatch()

  // show Snackbar
  useEffect(() => {
    if (showSnackbar) {
      if (successMessage) {
        dispatch(notificationOpen({type: "success", message: successMessage}))
        dispatch(deleteProjectDataAction({projectId: deleteSelectedProject}))
        dispatch(resetProjectDeleteAction())
      }
      if(errorMessage) {
        dispatch(notificationOpen({type: "error", message: errorMessage}))
      }
    }
  })

  const handleCancel = e => {
    e.preventDefault()
    dispatch(resetProjectDeleteAction())
  }
  const handleConfirm = e => {
    e.preventDefault()
    dispatch(deleteProjectAction({projectId: deleteSelectedProject}))
  }
  return(

    <ListItem divider>
              <ListItemText primary={projectName} secondaryTypographyProps={{color: "primary"}} secondary={<>
                <Typography variant="body2" color="error"> Are you really</Typography>
                <Typography variant="body2" color="error"> want to delete?</Typography>
              </>}/>
              <ListItemSecondaryAction>
                <ListItemIcon>
                  <IconButton onClick={handleConfirm}><CheckIcon/></IconButton>
                </ListItemIcon>
                <ListItemIcon>
                  <IconButton onClick={handleCancel}><CancelIcon/></IconButton>

                </ListItemIcon>
              </ListItemSecondaryAction>

            </ListItem>
  )
}
export default DeleteProject