import Controls from "../../core/Controls";
import React from "react";
import {Form, useForm} from "../../core/form/useForm";
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {createGeoTIFFProjectAction} from "../../../redux/slices/project/createProjectSlice";

const initialFValues = {
  projectName: "",
  flightName: "",
  flightDate: new Date(),
  ortho: [],
  elevationData: []

}

const GeoTIFFCreateProject = () => {
  const dispatch = useDispatch()

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if ('projectName' in fieldValues)
      temp.projectName = fieldValues.projectName ? "" : "This field is required."
    if ('flightName' in fieldValues)
      temp.flightName = fieldValues.flightName ? "" : "This field is required."
    if ("ortho" in fieldValues) {
      if (fieldValues.ortho.length > 0) {
        let sizeInMbs = fieldValues.ortho[0].size / 1000000;
        if (sizeInMbs / 1000000 > 1000) {
          temp.ortho = 'The orthomosaic is too large.';
        }
      } else {
        temp.ortho = "This field is required"
      }
    }
    if ("elevationData" in fieldValues) {
      if (fieldValues.elevationData.length > 0) {
        let sizeInMbs = fieldValues.elevationData[0].size / 1000000;
        if (sizeInMbs / 1000000 > 1000) {
          temp.elevationData = 'The elevation DEM is too large.';
        }
      } else {
        temp.elevationData = "this field is required"
      }
    }

    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      const formData = new FormData();
      formData.append("flight_date", values.flightDate.getFullYear() + "-" + (values.flightDate.getMonth() + 1) + "-" + values.flightDate.getDate());
      formData.append("project_name", values.projectName);
      formData.append("flight_name", values.flightName);
      formData.append("ortho", values.ortho[0]);
      formData.append("elevation", values.elevationData[0]);
      dispatch(createGeoTIFFProjectAction({formData: formData}))
    }
  }
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);
  return (
    <Form>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Controls.Input
            name="projectName"
            label="Project Name"
            value={values.projectName}
            onChange={handleInputChange}
            error={errors.projectName}
            required
          />
          <Controls.Input
            label="Flight Name"
            name="flightName"
            value={values.flightName}
            onChange={handleInputChange}
            error={errors.flightName}
            required
          />
          <Controls.DatePicker
            name="flightDate"
            label="Flight Date"
            value={values.flightDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controls.ImagePicker
            name="ortho"
            label="Upload Orthomosaic"
            value={values.ortho}
            onChange={handleInputChange}
            error={errors.ortho}
          />
          <Controls.ImagePicker
            name="elevationData"
            label="Upload Elevation Data"
            value={values.elevationData}
            onChange={handleInputChange}
            error={errors.elevationData}
          />
          <div>
            <Controls.Button
              text="Submit"
              color={"secondary"}
              onClick={handleSubmit}
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}/>
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default GeoTIFFCreateProject