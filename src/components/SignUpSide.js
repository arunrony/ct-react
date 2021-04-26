import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {signupAction} from "../redux/slices/signupSlice";
import {CircularProgress} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {errors, isLoading} = useSelector(state => state.signup)
  const [signupPayload, setSignupPayload] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "password1": "",
    "password2": "",
  })
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(signupAction(signupPayload))
  }
  const handleChange = e => {
    const {name, value } = e.target
    setSignupPayload({...signupPayload, [name]: value})
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={signupPayload.first_name}
                onChange={handleChange}
                error={errors.hasOwnProperty("first_name")}
                helperText={errors.hasOwnProperty("first_name") && errors.first_name[0]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={signupPayload.last_name}
                onChange={handleChange}
                error={errors.hasOwnProperty("last_name")}
                helperText={errors.hasOwnProperty("last_name") && errors.last_name[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={signupPayload.email}
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
                name="password1"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={signupPayload.password1}
                onChange={handleChange}
                error={errors.hasOwnProperty("password1")}
                helperText={errors.hasOwnProperty("password1") && errors.password1[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={signupPayload.password2}
                onChange={handleChange}
                error={errors.hasOwnProperty("password2")}
                helperText={errors.hasOwnProperty("password2") && errors.password2[0]}
              />
            </Grid>
            <Typography component="h1" variant={"caption"}>
                        {errors.hasOwnProperty("non_field_errors") && errors.non_field_errors}
                    </Typography>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading && <CircularProgress  size={20}/>}
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
