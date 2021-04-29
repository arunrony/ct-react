import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ContactForm = () => {
  return (
    <section>
      <Container maxWidth="sm">
        <Box pt={8} pb={10}>
          <Box mb={6} textAlign="center">
            <Typography variant="h4" component="h2" gutterBottom={true}>Contact Civil Tracker team</Typography>
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>We're here to answer your questions
              and discuss the decentralized future of the drone flight's. Let's talk!</Typography>
          </Box>
          <Box>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth autoComplete="fname" name="firstName" id="firstName"
                             label="First name"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth name="lastName" id="lastName" label="Last name"
                             autoComplete="lname"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required fullWidth name="email" id="email" label="Email address"
                             autoComplete="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required multiline rows={5} fullWidth autoComplete="message"
                             name="message" id="message" label="Message"/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox name="terms" value="1" color="secondary"/>}
                                    label="I agree to the terms of use and privacy policy."/>
                </Grid>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth variant="contained" color="secondary">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default ContactForm