import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {GoogleLogin} from "react-google-login";
import {googleLoginAction, login, setLoginErrorResponse} from "../../redux/slices/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress, Divider} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    googleButton: {
      width: "100%",
      "justify-content": "center",
    },
    tertiaryAction: {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right'
      }
    },
    actions: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3)
      },
    },
  }
));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch()

  // General Login
  const {errors, isLoading} = useSelector(state => state.login)
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: ""
  })
  const handleChange = e => {
    const {name, value} = e.target
    setLoginPayload({...loginPayload, [name]: value})
    console.log(loginPayload)
  }

  const handleSubmit = e => {
    console.log({...e})
    e.preventDefault()
    dispatch(login(loginPayload))
  }

  // Google Login Success
  const handleGoogleLoginSuccess = response => {
    const {accessToken, tokenId} = response
    dispatch(googleLoginAction({access_token: accessToken, id_token: tokenId}))
  }

  //Google Login Failed
  const handleGoogleLoginFailed = error => {
    dispatch(setLoginErrorResponse(error))
  }
  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3}>
            <GoogleLogin
              tag={"button"}
              className={classes.googleButton}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailed}
              style={{"font-size": "16px"}}
            />
          </Box>
          <Box mb={3}><Divider variant="fullWidth"/></Box>
          <Box mb={3} textAlign="center">
            <Typography
              component="h1"
              variant="subtitle1"
              color="error"
            >
              {errors.hasOwnProperty("non_field_errors") && errors.non_field_errors}
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
                    label="Email address"
                    autoComplete="email"
                    value={loginPayload.email}
                    onChange={handleChange}
                    error={errors.hasOwnProperty("email")}
                    helperText={errors.hasOwnProperty("email") && errors.email[0]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={loginPayload.password}
                    onChange={handleChange}
                    error={errors.hasOwnProperty("password")}
                    helperText={errors.hasOwnProperty("password") && errors.password[0]}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading && <CircularProgress size={20} color="secondary"/>}
                  Sign in
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="/signup" variant="body2">Don't have an account? Signup</Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="/password-reset" variant="body2">Forgot password?</Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}