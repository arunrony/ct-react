import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjectsAction} from "../../redux/slices/project/projectsSlice";
import {
  Card,
  CardActions,
  CardContent,
  Grid, IconButton,
  ListItem, ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "@material-ui/core/Link";
import {projectEditClickAction} from "../../redux/slices/project/editProjectSlice";
import EditProject from "./EditProject";
import {projectDeleteCLickAction} from "../../redux/slices/project/deleteProjectSlice";
import DeleteProject from "./DeleteProject";
import CreateProject from "./createProject/CreateProject";
import Popup from "../core/popup/Popup";
import List from "@material-ui/core/List";
import ProjectItem from "./ProjectItem";
import Controls from "../core/Controls";


const useStyle = makeStyles({
  content: {
    display: "inline-block"
  },
})


const ProjectSelect = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjectsAction())
  }, [])
  const [createProjectPopup, setCreateProjectPopup] = useState(false)
  const projects = useSelector(state => state.project.projectsList)
  const {selectedProject, editActive} = useSelector(state => state.editProject)
  const {deleteSelectedProject, deleteActive} = useSelector(state => state.deleteProject)

  const handleEdit = (projectId, name) => {
    dispatch(projectEditClickAction({selectedProject: projectId, projectName: name}))
  }

  const handleDelete = (projectId, projectName) => {
    dispatch(projectDeleteCLickAction({selectedProject: projectId, projectName: projectName}))
  }

  return (
    <>

      <Paper style={{maxHeight: 250, overflow: 'auto'}} elevation={2}>

        <List>
          {projects.map((project) => {
            return <div>
              <ProjectItem handleEdit={handleEdit} handleDelete={handleDelete} project={project} hidden={selectedProject === project.id||deleteSelectedProject === project.id}/>
              {(editActive && selectedProject === project.id) ?
                <EditProject/> : (deleteActive && deleteSelectedProject === project.id? <DeleteProject/> : <></>)}
            </div>
          })}
        </List>
      </Paper>




      {/*//       return <div>*/}
      {/*//         <ListItem divider hidden={editActive || deleteActive}>*/}
      {/*//           <ListItemText primary={project.name} secondaryTypographyProps={{color: "primary"}}*/}
      {/*//                         secondary={moment(project.created_at).format('YYYY-MM-DD')}/>*/}
      {/*//           <ListItemSecondaryAction>*/}
      {/*//             <ListItemIcon>*/}
      {/*//               <IconButton onClick={() => handleEdit(project.id, project.name)}><EditIcon/></IconButton>*/}
      {/*//             </ListItemIcon>*/}
      {/*//             <ListItemIcon>*/}
      {/*//               <IconButton onClick={() => handleDelete(project.id, project.name)}><DeleteIcon/></IconButton>*/}
      {/*//*/}
      {/*//             </ListItemIcon>*/}
      {/*//           </ListItemSecondaryAction>*/}
      {/*//*/}
      {/*//         </ListItem>*/}
      {/*//         {selectedProject === project.id ? <EditProject/> : ""}*/}
      {/*//         {deleteSelectedProject === project.id ? <DeleteProject/> : ""}*/}
      {/*//       </div>*/}
      {/*//*/}
      {/*//     })}*/}
      {/*//*/}
      {/*//*/}
      {/*//   </List>*/}
      {/*// </Paper>*/}
      <Paper>
        {projects.length > 0 ? "" :
          <Typography color="textPrimary" gutterBottom>No Projects Available. Create one below.</Typography>
        }
        <Controls.Button
              text="Create New Project"
              onClick={() => setCreateProjectPopup(true)}
              color="secondary"
              size="medium"
            />
        {/*<Button*/}
        {/*  color="secondary"*/}
        {/*  variant="contained"*/}
        {/*  size="medium"*/}
        {/*  onClick={() => setCreateProjectPopup(true)}*/}
        {/*>*/}
        {/*  Create New Project*/}
        {/*</Button>*/}
        <Popup
          openPopup={createProjectPopup}
          setOpenPopup={setCreateProjectPopup}
          title="Create New Project"

        >
          <CreateProject/>
        </Popup>
      </Paper>

      {/*{projects.map((project) => {*/}
      {/*  return <div key={project.id}>*/}
      {/*    <Card>*/}
      {/*      <Grid container hidden={editActive || deleteActive}>*/}
      {/*        <div>*/}
      {/*          <Grid item sm={6} xs={12}>*/}
      {/*            <Link>*/}
      {/*              <CardContent className={classes.content}>*/}
      {/*                <Typography color="textPrimary">*/}
      {/*                  {project.name}*/}
      {/*                </Typography>*/}
      {/*                <Typography color="textPrimary">*/}
      {/*                  {moment(project.created_at).format('YYYY-MM-DD')}*/}
      {/*                </Typography>*/}

      {/*              </CardContent>*/}
      {/*            </Link>*/}
      {/*          </Grid>*/}
      {/*          <Grid sm={6} xs={12}>*/}


      {/*            <CardActions>*/}
      {/*              <Button*/}
      {/*                startIcon={<EditIcon/>}*/}
      {/*                color="secondary"*/}
      {/*                variant="contained"*/}
      {/*                size="small"*/}
      {/*                name="edit"*/}
      {/*                onClick={() => handleEdit(project.id, project.name)}*/}
      {/*              >*/}
      {/*                Edit*/}
      {/*              </Button>*/}
      {/*              <Button*/}
      {/*                startIcon={<DeleteIcon/>}*/}
      {/*                color="secondary"*/}
      {/*                variant="contained"*/}
      {/*                size="small"*/}
      {/*                onClick={() => handleDelete(project.id, project.name)}*/}
      {/*              >*/}
      {/*                Delete*/}
      {/*              </Button>*/}

      {/*            </CardActions>*/}
      {/*          </Grid>*/}
      {/*        </div>*/}
      {/*      </Grid>*/}
      {/*    </Card>*/}
      {/*    <div>*/}
      {/*      {selectedProject === project.id ? <EditProject/> : ""}*/}
      {/*      {deleteSelectedProject === project.id ? <DeleteProject/> : ""}*/}
      {/*    </div>*/}

      {/*  </div>*/}
      {/*})}*/}
      <Grid container>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>

      </Grid>

    </>

  )
}

export default ProjectSelect