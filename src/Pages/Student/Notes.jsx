import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, Typography} from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import axios from 'axios';

function Notes() {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const [data, setData] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/api/Utility/Notes`,
      {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
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
    return (
      <div>
          <ComponentHeader title='Notes' share={false}/>
          <Container>
            {data &&
              <Grid container spacing={2} sx={{my: '0.5rem'}}>
                {data.length > 0 ? 
                  data.map((value) => 
                    <Grid item xs={6} md={4}>
                      <Card className='notesCard'>
                        <CardActionArea component={Link} to="/5">
                          <CardContent>
                            <Typography fontSize='16px' component="div" fontFamily='Open Sans' fontWeight='600'>
                              value.title
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} fontSize='10px' component="div" fontFamily='Open Sans' fontWeight='400'>
                              value.date
                            </Typography>
                            <Typography fontSize='12px' component="div" fontFamily='Open Sans' fontWeight='400'>
                              value.body
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                  :
                  <h1>No Data</h1>
                }
              </Grid>
            }
            <Box textAlign='center' paddingTop= '40px'>
              <Button variant="contained" component={Link} to='/notes/add'>Create</Button>
            </Box>
          </Container>
      </div>
    )
  }
}

export default Notes