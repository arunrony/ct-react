import React from 'react'
import { TextField } from '@material-ui/core';

export default function ImagePicker(props) {

  const convertToImgValue = (name, value) => ({
        target: {
            name, value
        }
    })

    const { name, label, value,error=null, onChange, multiple=false, ...other} = props;

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            onChange={e => onChange(convertToImgValue(name, e.target.files))}
            {...(error && {error:true,helperText:error})}
            {...other}
            type="file"
            inputProps={{multiple:multiple, accept:"image/*"}}
            InputLabelProps={{shrink:true}}
        />
    )
}
