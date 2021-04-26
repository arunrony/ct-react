import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {googleLoginAction, login} from "../redux/slices/loginSlice";
import {GoogleLogin} from 'react-google-login';
import {CircularProgress} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const SignInSide = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { errors, isLoading} = useSelector(state => state.login)
    const [loginPayload, setLoginPayload] = useState({
      email: "",
      password: ""
    })
    const handleChange = e => {
        const {name, value} = e.target
        setLoginPayload({...loginPayload, [name]: value})
      console.log(loginPayload)
    }
    const handleGoogleLoginSuccess = response => {
        const {accessToken, tokenId} = response
        dispatch(googleLoginAction({access_token: accessToken, id_token: tokenId}))
    }
    const handleSubmit = e => {
      e.preventDefault()
      dispatch(login(loginPayload))
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={(error) => console.log(error)}
                    />
                    <Typography component="h1" variant={"caption"}>
                        {errors.hasOwnProperty("non_field_errors") && errors.non_field_errors}
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            type="text"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={loginPayload.email}
                            onChange={handleChange}
                            error={errors.hasOwnProperty("email")}
                            helperText={errors.hasOwnProperty("email") && errors.email[0]}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={loginPayload.password}
                            onChange={handleChange}
                            error={errors.hasOwnProperty("password")}
                            helperText={errors.hasOwnProperty("password") && errors.password[0]}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default SignInSide;
