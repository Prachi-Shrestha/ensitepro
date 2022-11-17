import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem, Typography } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

const FeePaid = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [data, setData] = useState('')
    const [yearData, setYearData] = useState([])
    const [classData, setClassData] = useState([])
    const [year, setYear] = useState('')
    const [classId, setClassId] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Information/ClassYear`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setYearData(response.data.academicYear);
      setClassData(response.data.class);
    })
    .catch(error => {
      setYearData(null);
      setClassData(null);
    })

  }, []);
  
  const getData = (e) => {
    e.preventDefault()
    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Paid?classId=${classId}&academicYear=${year}`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setData(response.data);
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
        <ComponentHeader title='Fee Paid'/>
        <Container>
          <form onSubmit={getData}>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Year' id='select-year-credit' value={year} setValue={setYear}>
                      {
                        yearData.map((value) =>
                            <MenuItem value={value.id}>{value.name}</MenuItem>
                        )
                      }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Class' id='select-class-credit' value={classId} setValue={setClassId}>
                      {
                        classData.map((value) =>
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
                        Fee Detail
                      </Typography>
                    }
                    content={
                      <Box marginTop='-15px' display='flex' justifyContent= 'space-between'>                          
                        {/* <Box>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Academic Year: 20{value.academicYear} 
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Class: {value.className}
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Fee Name: {value.feeName}
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Paid: {value.paid}
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Total Amount: {value.due}
                          </Typography>
                        </Box>
                        <Box alignItems='end' display='flex'>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Due: {value.due - value.paid}
                          </Typography>
                        </Box> */}
                      </Box>
                    }
                  />
                </Grid>
              )
              :
              <h1>No Data</h1>
            }
          </Grid>}
        </Container>
    </div>
  )
}
}
export default FeePaid