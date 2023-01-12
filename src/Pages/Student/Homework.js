import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';
import BasicCard from '../../Components/Common/BasicCard';
import ComponentHeader from '../../Components/Common/ComponentHeader';
import axios from 'axios';

const Homework = () => {

  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [hwData, setHwData] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Homework`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setHwData(response.data);
    })
    .catch(error => {
      setHwData(null);
    })

  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
  return(
    <div>
    <ComponentHeader title='HomeWork'/>
    <Container>
    {hwData &&
    <Grid container columnSpacing={{ xs: 1, md: 1 }} sx={{my: '0.5rem'}}>
      {hwData.length > 0 ? 
        hwData.map((value) => 
        <Grid item xs={12} md={6}>
          <Link to={'/homework/' + value.id} className='linkBox'>
            <BasicCard
              header={
                <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
                  {value.title}
                </Typography>
              }
              content={
                <Box display='flex' marginTop='-15px'>
                  <Box>
                    <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                      Subject: {value.subName}
                    </Typography>
                    <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                      Teacher: {value.teacher} 
                    </Typography>
                    <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                      Teacher Remarks: {value.remark}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' marginTop='25px' noWrap>
                      Assigned Date: {value.homeworkDate}
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </Link>
        </Grid>
        )
        :
        <h1>No Data</h1>
      }
    </Grid>
    }
    </Container>
    <Outlet></Outlet>
    </div>
  );
}
}

export default Homework