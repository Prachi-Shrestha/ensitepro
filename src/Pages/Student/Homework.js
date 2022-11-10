import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Assignment from '../../Components/Content/Assignment';
import BasicCard from '../../Components/Common/BasicCard';
import ComponentHeader from '../../Components/Common/ComponentHeader';

const Homework = () => {
  const getHeader = () => (
    <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
      Homework Title
    </Typography>
  );
  const getContent = () => (
    <Assignment/>
  );

  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
  return(
    <div>
    <ComponentHeader title='HomeWork'/>
    <Container>
    <Grid container columnSpacing={{ xs: 1, md: 1 }} sx={{my: '0.5rem'}}>
      <Grid item xs={12} md={6}>
        <BasicCard
          header={getHeader()}
          content={getContent()}
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <BasicCard
          header={getHeader()}
          content={getContent()}
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <BasicCard
          header={getHeader()}
          content={getContent()}
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <BasicCard
          header={getHeader()}
          content={getContent()}
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <BasicCard
          header={getHeader()}
          content={getContent()}
        />
        </Grid>
        <Grid item xs={12} md={6}>
          <BasicCard
          header={getHeader()}
          content={getContent()}
          />
        </Grid>
    </Grid>
    </Container>
    </div>
  );
}
}

export default Homework