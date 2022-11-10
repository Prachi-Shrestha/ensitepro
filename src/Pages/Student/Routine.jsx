import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Button, Container, Grid, MenuItem } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import { Box } from '@mui/system';

function Routine() {
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
        <ComponentHeader title='Routine' />
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Year' id='select-year'>
                        <MenuItem value={10}>Ten</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Group' id='select-group'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Program' id='select-program'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Class' id='select-class'>
                        <MenuItem value={10}>Ten</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Section' id='select-section'>
                        <MenuItem value={10}>Ten</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Subject' id='select-subject'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center'>
                <Button variant='contained'> Search </Button>
            </Box>
        </Container>
    </div>
  )
}
}

export default Routine