import React from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setPasswordAction} from "../../redux/slices/setPasswordSlice";
import {useParams} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const SetPasswordForm = () => {
  const {errors} = useSelector(state => state.setPassword)
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    setPayload({
      ...payload,
      ...params
    })
  }, [params])

  const [payload, setPayload] = useState({
    new_password1: "",
    new_password2: "",
    uid: "",
    token: ""
  })
  const handleChange = e => {
    const {name, value} = e.target
    setPayload({
      ...payload,
      [name]: value
    })
  }
  const handleClick = e => {
    e.preventDefault()
    console.log(payload)
    dispatch(setPasswordAction(payload))
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
              Create New Password
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
                    name="new_password1"
                    type="text"
                    label="New Password"
                    error={errors.hasOwnProperty("new_password1")}
                    helperText={errors.hasOwnProperty("new_password1") && errors.new_password1[0]}
                    value={payload.new_password1}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="new_password2"
                    type="text"
                    label="Confirm New Password"
                    error={errors.hasOwnProperty("new_password2")}
                    helperText={errors.hasOwnProperty("new_password2") ? errors.new_password2[0] : "Password Must Be 8 Character Long"}
                    onChange={handleChange}
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

export default SetPasswordForm