import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjectsAction} from "../../redux/slices/project/projectsSlice";
import {Card, CardActions, CardContent, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "@material-ui/core/Link";
import {projectEditClickAction} from "../../redux/slices/project/editProjectSlice";
import EditProject from "./EditProject";
import mapboxSlice from "../../redux/slices/mapboxSlice";

const useStyle = makeStyles({
  content: {
    display: "inline-block"
  }
})

const ProjectSelect = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjectsAction())
  }, [])
  const projects = useSelector(state => state.project.projectsList)
  const {selectedProject, editActive} = useSelector(state => state.editProject)

  const handleEdit = (projectId, name) => {
    dispatch(projectEditClickAction({selectedProject: projectId, projectName: name}))
  }

  return (
    <>
      {projects.map((project) => {
        return <div key={project.id}>
          <Card hidden={editActive}>
            <Grid container>
              <Link>
                <CardContent className={classes.content}>
                  <Typography color="textPrimary">
                    {project.name}
                  </Typography>
                  <Typography color="textPrimary">
                    {moment(project.created_at).format('YYYY-MM-DD')}
                  </Typography>

                </CardContent>
              </Link>
              <CardActions>
                <Button
                  startIcon={<EditIcon/>}
                  color="secondary"
                  variant="contained"
                  size="small"
                  name="edit"
                  onClick={() => handleEdit(project.id, project.name)}
                >
                  Edit
                </Button>
                <Button
                  startIcon={<DeleteIcon/>}
                  color="secondary"
                  variant="contained"
                  size="small">Delete</Button>

              </CardActions>
            </Grid>
          </Card>
          <div>
            {selectedProject === project.id ? <EditProject/> : ""}
          </div>

        </div>
      })}

    </>


  )
}

export default ProjectSelect