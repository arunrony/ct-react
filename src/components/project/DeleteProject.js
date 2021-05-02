import {Card, CardActions, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteProjectAction, resetProjectDeleteAction} from "../../redux/slices/project/deleteProject";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from '@material-ui/icons/Check';
import {useEffect} from "react";
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
    <Card>
      <CardContent>
        <Typography>
          Are you really want to delete? <Typography>{projectName}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
            startIcon={<CheckIcon/>}
            color="secondary"
            variant="contained"
            size="small"
            onClick={handleConfirm}
          >
          Confirm
        </Button>
        <Button
            startIcon={<CancelIcon/>}
            color="secondary"
            variant="contained"
            size="small"
            onClick={handleCancel}
          >
          Cancel
        </Button>

      </CardActions>
    </Card>
  )
}
export default DeleteProject