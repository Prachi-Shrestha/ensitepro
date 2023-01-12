import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';
import BasicCard from '../../Components/Common/BasicCard';
import ComponentHeader from '../../Components/Common/ComponentHeader2';
import axios from 'axios';

const Notice = () => {

  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [data, setData] = useState('')

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
      setData(response.data);
    })
    .catch(error => {
      setData(null);
    })

  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
  return(
    <div>
    <ComponentHeader title='Notice Board'/>
    <Container>
    {/* {hwData && */}
    <Grid container columnSpacing={{ xs: 1, md: 1 }} sx={{my: '0.5rem'}}>
      {/* {hwData.length > 0 ? 
        hwData.map((value) =>  */}
            <Grid item xs={12} md={6}>
                <BasicCard
                header={
                    <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
                    Date
                    </Typography>
                }
                content={
                    <Box>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='400' noWrap>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis sit sequi nostrum nam non atque odio numquam provident animi nobis consequatur deserunt suscipit, voluptas ipsam exercitationem totam ducimus excepturi?
                        </Typography>
                    </Box>
                }
                />
            </Grid>
    {/* //     )
    //     :
    //     <h1>No Data</h1>
    //   }
    // } */}
    </Grid>
    </Container>
    </div>
  );
}
}

export default Notice