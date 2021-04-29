import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import React from "react";

const SetPasswordFailed = () => {
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
              Something went wrong.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              gutterBottom
            >
              Seem's like password reset link is expired or already used.
            </Typography>
            <Box mb={3} textAlign="center">
              <Typography variant="subtitle1">Click <Link color="secondary" href="/password-reset"
                                                          variant="subtitle1">here </Link>to generate a new password
                reset link.
              </Typography>
            </Box>
            <Divider/>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default SetPasswordFailed