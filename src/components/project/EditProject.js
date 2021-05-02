import {useDispatch, useSelector} from "react-redux";
import {Card, CardActions, CardContent, Grid, TextField} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  changeProjectNameAction,
  editProjectCancelAction,
  updateProjectNameAction
} from "../../redux/slices/project/editProjectSlice";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";
import {notificationOpen} from "../../redux/slices/notificationSlice";

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
    if(projectEditState.errorMessage) {
      dispatch(notificationOpen({type:"error", message: projectEditState.errorMessage}))
    }
    if(projectEditState.successMessage) {
      dispatch(notificationOpen({type:"success", message: projectEditState.successMessage}))
    }

  }, [projectEditState.successMessage, projectEditState.errorMessage])

  const handleChange = e => {
    dispatch(changeProjectNameAction({projectName: e.target.value}))
  }

  const handleCancel = e => {
    e.preventDefault()
    dispatch(editProjectCancelAction())
  }

  const handleSave = e => {
    e.preventDefault()
    dispatch(updateProjectNameAction({projectId: projectEditState.selectedProject, data: {name: projectEditState.projectName}}))
  }

  return (
    <Card hidden={!projectEditState.editActive}>
      <form>
        <CardContent>

          <TextField
            variant="outlined"
            required
            fullWidth
            name="projectName"
            type="text"
            label="Project Name"
            value={projectEditState.projectName}
            onChange={handleChange}
          >

          </TextField>

        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            startIcon={<SaveIcon/>}
            color="secondary"
            variant="contained"
            size="small"
            name="edit"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            startIcon={<CancelIcon/>}
            color="secondary"
            variant="contained"
            size="small"
            name="edit"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}
export default EditProject