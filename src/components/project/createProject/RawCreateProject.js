import {Grid} from "@material-ui/core";
import Controls from "../../core/Controls";
import {Form, useForm} from "../../core/form/useForm";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {notificationOpen} from "../../../redux/slices/notificationSlice";
import {createRawProjectAction, uploadRawProjectImageAction} from "../../../redux/slices/project/createProjectSlice";

const initialFValues = {
  projectName: '',
  flightName: '',
  flightDate: new Date(),
  epsgCoordSystem: '',
  rawImages: '',
  gcpFile: null,
  checkpointFile: '',
  metaDataFile: '',
  totalImageSize: 0
}

const RawCreateProject = () => {
  const {projectId, showSnackbar, errorMessage, projectFilePath} = useSelector(state => state.createProject)
  const dispatch = useDispatch()

  useEffect(() => {
    if (projectId !== null) {
      let no_of_images = 0
      let hasGcp = false
      if (values.metaDataFile.length > 0) {
        Array.from(values.metaDataFile).forEach(file => uploadProjectRawImages(file, "metaData"))
      }
      if (values.gcpFile) {
        uploadProjectRawImages(values.gcpFile[0], "gcp")
      }
      if (values.checkpointFile) {
        hasGcp = true
        uploadProjectRawImages(values.checkpointFile[0], "gcp")
      }
      Array.from(values.rawImages).forEach(file => {
        console.log(values.rawImages.length - 1)
        console.log("images lenght")
        console.log(no_of_images)
        if((values.rawImages.length - 1) === no_of_images) {
          uploadProjectRawImages(file, "images", "last_image", hasGcp)
        } else {
          uploadProjectRawImages(file, "images")
          no_of_images += 1
        }
      })
      //Image upload Handle
    }

  }, [projectId])

  const showErrorIfAny = () => {
    if (showSnackbar) {
      if(errorMessage) {
        dispatch(notificationOpen({type: "error", message: errorMessage}))
      }
    }
  }

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if ('projectName' in fieldValues)
      temp.projectName = fieldValues.projectName ? "" : "This field is required."
    if ('flightName' in fieldValues)
      temp.flightName = fieldValues.flightName ? "" : "This field is required."
    // if ('rawImages' in fieldValues)
    //   temp.rawImages = fieldValues.rawImages.length < 40 ? "Images count must be more than 40." : ""
    if (values.rawImages.length > 0) {
      const total_image_size = (values.rawImages[0].size / 1000000) * (values.rawImages.length)
      setValues({
        ...values,
        totalImageSize: total_image_size
      })
    }

    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);


  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      createRawProject()
      showErrorIfAny()
      console.log("handle submit")
    }
  }

  const uploadProjectRawImages = (file, uploadType, imagesstatus="", hasGcp=false) => {
    const formData = new FormData()
    formData.append("project_id", projectId)
    formData.append("project_path", projectFilePath)
    formData.append("file", file)
    formData.append("file_type", uploadType)
    formData.append("imagesstatus", imagesstatus)
    if (imagesstatus === "last_image") {
       formData.append("has_gcp", hasGcp)
       formData.append("total_image_size", values.totalImageSize)
    }
    dispatch(uploadRawProjectImageAction({formData:formData}))
  }

  const createRawProject = () => {
    const formData = new FormData()
    formData.append("project_name", values.flightName)
    formData.append("flight_date", values.flightDate.getFullYear() + "-" + (values.flightDate.getMonth() + 1) + "-" + values.flightDate.getDate())
    formData.append("flight_name", values.flightName)
    formData.append("crs", values.epsgCoordSystem)
    dispatch(createRawProjectAction({formData: formData}))
  }
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
          <Controls.Input
            label="EPSG Coordinate System"
            name="epsgCoordSystem"
            value={values.epsgCoordSystem}
            onChange={handleInputChange}
            error={errors.epsgCoordSystem}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controls.ImagePicker
            name="rawImages"
            label="Raw Images"
            value={values.rawImages}
            onChange={handleInputChange}
            multiple={true}
            error={errors.rawImages}
          />
          <Controls.ImagePicker
            name="gcpFile"
            label="Upload GCP File"
            value={values.gcpFile}
            onChange={handleInputChange}
            error={errors.gcpFile}
          />
          <Controls.ImagePicker
            name="checkpointFile"
            label="Upload Check Points File"
            value={values.checkpointFile}
            onChange={handleInputChange}
            error={errors.checkpointFile}
          />
          <Controls.ImagePicker
            name="metaDataFile"
            label="Upload Meta Data Files"
            value={values.metaDataFile}
            onChange={handleInputChange}
            error={errors.metaDataFile}
            multiple={true}
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

export default RawCreateProject