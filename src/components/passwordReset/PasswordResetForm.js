import React, {useState} from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import {passwordResetAction} from "../../redux/slices/passwordResetSlice";
import {CircularProgress} from "@material-ui/core";

export default function PasswordResetForm() {
  const dispatch = useDispatch()
  const {errors, isLoading} = useSelector(state => state.passwordReset)
  const [resetEmail, setResetEmail] = useState({
    email: ""
  })
  const handleChange = e => {
    const {name, value} = e.target
    setResetEmail({
      ...resetEmail,
      [name]: value
    })
  }
  const handleClick = e => {
    e.preventDefault()
    dispatch(passwordResetAction(resetEmail))

  }
  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
            >
              Reset Your Password
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              gutterBottom
            >
              Please enter the email address you'd like your
              password reset information sent to.
            </Typography>
          </Box>
          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    type="email"
                    label="Email address"
                    autoComplete="email"
                    onChange={handleChange}
                    error={errors.hasOwnProperty("email")}
                    helperText={errors.hasOwnProperty("email") && errors.email[0]}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleClick}
                >
                  {isLoading && <CircularProgress size={20}/>}
                  Reset Your Password
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}