import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, FormControl, Input, TextField, Typography } from '@mui/material';
import ComponentHeader from '../../Components/Common/ComponentHeader';
import axios from 'axios';

const HomeworkSubmission = () => {

  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [hwData, setHwData] = useState('')
  const [regId, setRegId] = useState('')
  const [values, setValues] = React.useState({
    homeWork: '',
    photo: '',
  });

const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
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

  }, []);

const submit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  var bodyFormData = new FormData();
  bodyFormData.append('homework', parseInt(window.location.href.split('/').pop()));
  bodyFormData.append('answerFile', values.photo);
  bodyFormData.append('answer', values.homeWork);
  bodyFormData.append('stuId', regId);
  bodyFormData.append('answerFile1', '');
  bodyFormData.append('answerFile2', '');
  bodyFormData.append('answerFile3', '');
  bodyFormData.append('answerFile4', '');
  bodyFormData.append('answerFile5', '');
  axios.post(
      `${process.env.REACT_APP_base_URL}/rest/Student/Homework`,
      bodyFormData,
      {   
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        } 
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}

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
          {if(value.id === parseInt(window.location.href.split('/').pop())) 
            {
              return (
                <Container>
                  <form onSubmit={submit}>
                    <Typography fontSize='18px' fontWeight='600' fontFamily='Open Sans' color='#226CE0'>
                      {value.title}
                    </Typography>
                    <Box display='flex' mt='1rem' justifyContent='space-between'>
                      <Box>
                        <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='600' color='#226CE0' noWrap>
                          Teacher: 
                          <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='400' color='#272727' noWrap ml='0.5rem' component='span'>
                            {value.teacher} 
                          </Typography>
                        </Typography>
                        <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='600' color='#226CE0' noWrap>
                          Question: 
                          <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='400' color='#272727' noWrap ml='0.5rem' component='span'>
                            {value.homework} 
                          </Typography>
                        </Typography>                      
                      </Box>
                      <Box>
                        <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='600' color='#226CE0' noWrap>
                          Date: 
                          <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='400' color='#272727' noWrap ml='0.5rem' component='span'>
                            {value.homeworkDate}
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='600' color='#226CE0' noWrap>
                      Answer:
                    </Typography>
                    <TextField
                        fullWidth
                        id="outlined-Questions"
                        value={values.homeWork}
                        multiline
                        rows={9}
                        sx={{backgroundColor: '#fff'}}
                        onChange={handleChange('homeWork')}
                    />
                    <FormControl className='inputFile' sx={{marginTop: '20px'}}>
                      <Typography variant='subtitle1' fontSize='14px' gutterBottom fontWeight='600' color='#226CE0' noWrap>
                        Upload PDF/Image:
                      </Typography>
                      <Input type='file' sx={{marginTop: '10px'}} 
                        value={values.photo}
                        onChange={handleChange('photo')} 
                      />
                    </FormControl>
                    <Box textAlign='center' paddingTop= '40px'>
                      <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Save </Button>
                    </Box> 
                  </form>
                </Container>
              )
            }
          }
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

export default HomeworkSubmission