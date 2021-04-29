import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import React from "react";

const SetPasswordSuccess = () => {
    return(
        <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
            >
              Password reset successfully.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              gutterBottom
            >
              Your account is updated with new password.
            </Typography>
            <Box mb={3} textAlign="center">
              <Typography variant="subtitle1">Click <Link color="secondary" href="/" variant="subtitle1">here </Link>to Sign In.
              </Typography>
            </Box>
            <Divider/>
          </Box>
        </Box>
      </Container>
    </section>
    )
}

export default SetPasswordSuccess