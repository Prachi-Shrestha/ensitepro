import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem, TextField } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';

const PreviousEducation = () => {
  const [regId, setRegId] = useState('')
  const [data, setData] = useState('')
  const [edu, setEdu] = useState('')
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Information`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setRegId(response.data.id);
    })
    .catch(error => {
      setRegId(null);
    })

    
      axios.get(
        `${process.env.REACT_APP_base_URL}/rest/Student/PreviousEducation`,
        {headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }}
      )
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setData(null);
      })

  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='Previous Education'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  id="outlined-username"
                  sx={{backgroundColor: '#fff'}}
                  value={regId}
                  disabled
                />
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Education' id='select-education' value={edu} setValue={setEdu}>
                        <MenuItem value='1'>SLC/SEE</MenuItem>
                        <MenuItem value='2'>Plus Two</MenuItem>
                        <MenuItem value='21'>PCL</MenuItem>
                        <MenuItem value='3'>Bachelor</MenuItem>
                        <MenuItem value='4'>Master</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-exam-name"
                  label="Exam Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-board-name"
                  label="Board Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-board-reg"
                  label="Board Reg No"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-symbol"
                  label="Symbol No"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-passed-year"
                  label="Passed Year"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-grade"
                  label="Div/Grade"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-precentage"
                  label="Precentage/GPA"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-institiue"
                  label="Institute Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-subject"
                  label="Major Subject"
                  sx={{backgroundColor: '#fff'}}
                  
                />
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
                <Button variant='contained'> Search </Button>
            </Box>
        </Container>
    </div>
  )
}
}

export default PreviousEducation