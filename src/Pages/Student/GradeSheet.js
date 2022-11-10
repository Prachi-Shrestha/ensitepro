import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Container, Grid, MenuItem } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'

const GradeSheet = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='GradeSheet'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={0}>
                    <SelectInput label='Select Exam' id='select-exam'>
                        <MenuItem value={10}>Image Processing</MenuItem>
                    </SelectInput>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
}
export default GradeSheet