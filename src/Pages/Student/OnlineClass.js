import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Grid, Typography, Container, Box} from '@mui/material'
import BasicCard from '../../Components/Common/BasicCard';
import ComponentHeader from '../../Components/Common/ComponentHeader';
import axios from 'axios';

const OnlineClass = () => {      
      const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
      const [data, setData] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    } 

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/OnlineClass`,
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
  },[]); 


if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
      return (
      <div>
        <ComponentHeader title='OnlineClass'/>
        <Container>
          {data &&
          <Grid container columnSpacing={{ xs: 1, md: 1 }} sx={{my: '0.5rem'}}>
            {data.length > 0 ? 
              data.map((value) => 
                <Grid item xs={12} md={6}>
                  <BasicCard
                    header={
                      <Typography fontSize='16px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
                        {value.subject}
                      </Typography>
                    }
                    content={
                      <Box marginTop='-15px'>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Link: <a href={value.link}>{value.link}</a>
                        </Typography>
                        <Box display='flex' justifyContent= 'space-between'>                          
                          <Box>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              Teacher: {value.teacher} 
                            </Typography>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              Start Time: {value.startTime}
                            </Typography>
                          </Box>
                          <Box alignItems='end' display='flex'>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              End Time: {value.endTime}
                            </Typography>
                          </Box>
                        </Box>
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
    );
  }
}

export default OnlineClass