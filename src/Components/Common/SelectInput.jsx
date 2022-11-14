import React  from 'react'
import { FormControl, InputLabel, Select } from '@mui/material'

function SelectInput(props) {

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <FormControl fullWidth className='input-field' 
    // disabled={props.disabled ? true : false}
    >
        <InputLabel>{props.label}</InputLabel>
        <Select
            id={props.id}
            value={props.value}
            label={props.label}
            onChange={handleChange}
        >
            {props.children}
        </Select>
    </FormControl>
  )
}

export default SelectInput