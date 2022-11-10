import React, { useState }  from 'react'
import { FormControl, InputLabel, Select } from '@mui/material'

function SelectInput(props) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth className='input-field'>
        <InputLabel>{props.label}</InputLabel>
        <Select
            id={props.id}
            value={age}
            label={props.label}
            onChange={handleChange}
        >
            {props.children}
        </Select>
    </FormControl>
  )
}

export default SelectInput