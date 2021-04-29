import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {signupAction} from "../../redux/slices/signupSlice";
import Typography from "@material-ui/core/Typography";
import {CircularProgress} from "@material-ui/core";

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
    }
  }
));

const Signup = () => {
  const classes = useStyles()
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
    const {name, value} = e.target
    setSignupPayload({...signupPayload, [name]: value})
  }
  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="first_name"
                    label="First Name"
                    value={signupPayload.first_name}
                    onChange={handleChange}
                    error={errors.hasOwnProperty("first_name")}
                    helperText={errors.hasOwnProperty("first_name") && errors.first_name[0]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="last_name"
                    label="Last Name"
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
                    name="email"
                    type="email"
                    id="email"
                    label="Email address"
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
                    required fullWidth
                    name="password1"
                    label="Password"
                    type="password"
                    value={signupPayload.password1}
                    onChange={handleChange}
                    error={errors.hasOwnProperty("password1")}
                    helperText={errors.hasOwnProperty("password1") && errors.password1[0]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required fullWidth
                    name="password2"
                    label="Confirm Password"
                    type="password"
                    value={signupPayload.password2}
                    onChange={handleChange}
                    error={errors.hasOwnProperty("password2")}
                    helperText={errors.hasOwnProperty("password2") ? errors.password2[0] : "Password Must Be 8 Character Long"}
                  />
                </Grid>
                <Box mb={3}>
                  <Typography
                    component="h1"
                    variant="subtitle1"
                    color="error"
                  >
                    {errors.hasOwnProperty("non_field_errors") && errors.non_field_errors}
                  </Typography>
                </Box>
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
                  {isLoading && <CircularProgress size={20}/>}
                  Sign Up
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="/" variant="body2">Already have account? Sign In</Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default Signup