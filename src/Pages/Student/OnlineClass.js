import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Grid, Typography, Container} from '@mui/material'
import Online from '../../Components/Content/Online';
import BasicCard from '../../Components/Common/BasicCard';
import ComponentHeader from '../../Components/Common/ComponentHeader';

const OnlineClass = () => {
    const getHeader = () => (
        <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
          Social Studies
        </Typography>
      );
      const getContent = () => (
        <Online/>
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
      return (
      <div>
        <ComponentHeader title='OnlineClass'/>
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

export default OnlineClass