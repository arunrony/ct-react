import {useDispatch, useSelector} from "react-redux";
import {
  Card,
  CardActions,
  CardContent, IconButton, ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  changeProjectNameAction,
  resetProjectEditAction,
  updateProjectNameAction
} from "../../redux/slices/project/editProjectSlice";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import {notificationOpen} from "../../redux/slices/notificationSlice";
import {updateProjectsData} from "../../redux/slices/project/projectsSlice";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import Controls from "../core/Controls";

const useStyle = makeStyles({
  actions: {
    display: "flex",
    justifyContent: "space-between"
  }
})

const EditProject = () => {
  const classes = useStyle()
  const projectEditState = useSelector(state => state.editProject)
  const dispatch = useDispatch()

  //Show snackbar massage
  useEffect(() => {
    if (projectEditState.showSnackbar) {
      if (projectEditState.errorMessage) {
        dispatch(notificationOpen({type: "error", message: projectEditState.errorMessage}))
      }
      if (projectEditState.successMessage) {
        dispatch(notificationOpen({type: "success", message: projectEditState.successMessage}))
        dispatch(updateProjectsData({updatedProject: projectEditState.updatedProjectData}))
        dispatch(resetProjectEditAction())
      }
    }
  })

  const handleChange = e => {
    dispatch(changeProjectNameAction({projectName: e.target.value}))
  }

  const handleCancel = e => {
    e.preventDefault()
    dispatch(resetProjectEditAction())
  }

  const handleSave = e => {
    e.preventDefault()
    dispatch(updateProjectNameAction({
      projectId: projectEditState.selectedProject,
      data: {name: projectEditState.projectName}
    }))
  }

  return (
    <ListItem divider>
      <ListItemText disableTypography>
        <Controls.Input
          variant={"standard"}
          label={"Change Project Name"}
          name={"projectName"}
          value={projectEditState.projectName}
          onChange={handleChange}
        />

      </ListItemText>
              <ListItemSecondaryAction>
                <ListItemIcon>
                  <IconButton onClick={handleSave}><SaveIcon/></IconButton>
                </ListItemIcon>
                <ListItemIcon>
                  <IconButton onClick={handleCancel}><CancelIcon/></IconButton>

                </ListItemIcon>
              </ListItemSecondaryAction>

            </ListItem>
    // <Card hidden={!projectEditState.editActive}>
    //   <form>
    //     <CardContent>
    //
    //       <TextField
    //         variant="outlined"
    //         required
    //         fullWidth
    //         name="projectName"
    //         type="text"
    //         label="Project Name"
    //         value={projectEditState.projectName}
    //         onChange={handleChange}
    //       >
    //
    //       </TextField>
    //
    //     </CardContent>
    //     <CardActions className={classes.actions}>
    //       <Button
    //         startIcon={<SaveIcon/>}
    //         color="secondary"
    //         variant="contained"
    //         size="small"
    //         name="edit"
    //         onClick={handleSave}
    //       >
    //         Save
    //       </Button>
    //       <Button
    //         startIcon={<CancelIcon/>}
    //         color="secondary"
    //         variant="contained"
    //         size="small"
    //         name="edit"
    //         onClick={handleCancel}
    //       >
    //         Cancel
    //       </Button>
    //     </CardActions>
    //   </form>
    // </Card>
  )
}
export default EditProject