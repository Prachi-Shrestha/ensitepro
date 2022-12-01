import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem, Typography } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

function Transportation() {
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [data, setData] = useState('')
  const [timing, setTiming] = useState('')
  const [vehicleData, setVehicleData] = useState([])
  const [locationData, setLocationData] = useState([])
  const [vehicle, setVehicle] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Vehicle`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setVehicleData(response.data.vehicle);
      setLocationData(response.data.location);
    })
    .catch(error => {
      setVehicleData(null);
      setLocationData(null);
    })

  }, []);

  const getData = (e) => {
    e.preventDefault()
    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Vehicle/Data?vehicle=${vehicle}&location=${location}`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setData(response.data.driver);
      setTiming(response.data.timing);
    })
    .catch(error => {
      setData(null);
    })
  }

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='Transportation' />
        <Container>
          <form onSubmit={getData}>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Vehicle' id='select-vehicle' value={vehicle} setValue={setVehicle}>
                      {
                        vehicleData.map((value) =>
                            <MenuItem value={value.id}>{value.name}</MenuItem>
                        )
                      }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Location' id='select-location' value={location} setValue={setLocation}>
                      {
                        locationData.map((value) =>
                            <MenuItem value={value.id}>{value.name}</MenuItem>
                        )
                      }
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
              <Button variant="contained" type='submit'>Search</Button>
            </Box>
          </form>
          {data &&
          <Grid container columnSpacing={{ xs: 1, md: 1 }} sx={{my: '0.5rem'}}>
            {data.length > 0 ?             
              data.map((value) => 
                <Grid item xs={12} md={6}>
                <BasicCard
                  header={
                    <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
                      {value.vehicleName}
                    </Typography> 
                  }
                  content={
                    <Box marginTop='-15px'>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Driver: {value.drivereName} 
                        </Typography>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Mobile Number: {value.mobileNo}
                        </Typography>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Vehicle Number: {value.vehicleNo}
                        </Typography>
                        {timing.map((timing) =>
                          <Box display='flex' justifyContent='space-between'>
                            <Box>
                              <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                                Location: {timing.location}
                              </Typography>
                              <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                                Departure Time: {timing.departureTime}
                              </Typography>
                            </Box>
                            <Box display='flex' alignItems='end'>
                              <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                                Arrival Time: {timing.arrivalTime}
                              </Typography>
                            </Box>
                          </Box>
                        )} 
                    </Box>
                  }
                />
                </Grid>
              )
              :
              <h1>No Data</h1>
            }
          </Grid>
        }
        </Container>   
    </div>
  )
}
}
export default Transportation