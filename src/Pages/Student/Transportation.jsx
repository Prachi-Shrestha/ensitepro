import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'

function Transportation() {
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
        <ComponentHeader title='Transportation' />
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Vehicle' id='select-vehicle'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Location' id='select-location'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
              <Button variant="contained">Search</Button>
            </Box>
        </Container>   
    </div>
  )
}
}
export default Transportation