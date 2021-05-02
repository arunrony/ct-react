import React from 'react'
import {Snackbar, makeStyles} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux";
import {notificationClose} from "../../../redux/slices/notificationSlice";

const useStyles = makeStyles(theme => ({
  root: {
    top: theme.spacing(9)
  }
}))

export default function Notification() {
  const {type, message, open} = useSelector(state => state.notification)
  const dispatch = useDispatch()


  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(notificationClose())
  }

  return (
    <Snackbar
      className={classes.root}
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      onClose={handleClose}>
      <Alert
        severity={type}
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}