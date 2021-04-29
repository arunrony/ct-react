import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    actions: {
        marginTop: theme.spacing(2),
        justifyContent:"center"
    }
}));

const PasswordResetSuccess = ({email}) => {
    const classes = useStyles()
    return (
        <section>
            <Container maxWidth="xs">
                <Box pt={8} pb={10}>
                    <Box mb={3} textAlign="center">
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                        >
                            Help is on the way
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h2"
                            gutterBottom
                        >
                            We're combing through our records to find the Civil Tracker
                            account for <Box fontWeight="bold" display='inline'>{email}</Box>
                        <Typography>If we find a match , you'll get an email with further instructions. If
                        you don't here from us in next 15 minutes, please double check that you entered
                        the correct email address.</Typography>
                        </Typography>
                        <Divider/>

                        <Grid container spacing={3} className={classes.actions}>
                                <Grid item xs={12} sm={6}>
                                    <Link href="/" variant="body2">Go back to SignIn Page</Link>
                                </Grid>

                            </Grid>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default PasswordResetSuccess