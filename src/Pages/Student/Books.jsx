import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem, Typography } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

const Books = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [subjectData, setSubjectData] = useState([])
    const [data, setData] = useState()
    const [classId, setClassId] = useState(JSON.parse(localStorage.getItem("class")).id);
    const [subject, setSubject] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  useEffect(() => {
    axios.get(
      `${process.env.REACT_APP_base_URL}/api/Setup/SubjectGroup/ClassGroupWise?program=${JSON.parse(localStorage.getItem("program")).id}&classId=${JSON.parse(localStorage.getItem("class")).id}&subjectGroup=${JSON.parse(localStorage.getItem("groupName")).id}`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setSubjectData(response.data);
    })
    .catch(error => {
      setSubjectData(null);
    })
  },[]); 
  
  const getData = (e) => {
    e.preventDefault()
    axios.get(
      `${process.env.REACT_APP_base_URL}/api/Library/BookStock?bookId=&program=1&classId=${classId}&subject=${subject}&dateFrom=&dateTo=&bookName=`,
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
  }

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
  const classData = JSON.parse(localStorage.getItem("classes"));
  return (
    <div>
        <ComponentHeader title='Books'/>
        <Container>
          <form onSubmit={getData}>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Class' id='select-class-books' setValue={setClassId} value={classId}>
                        {
                           classData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Subject' id='select-subject-books' setValue={setSubject} value={subject}>
                        {
                            subjectData.map((value) =>
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
                        {value.bookName}
                      </Typography>
                    }
                    content={
                      <Box display='flex' marginTop='-15px' sx={{justifyContent: 'space-between'}}>
                        <Box>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Author: {value.author}
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Book Type: {value.bookType} 
                          </Typography>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Language: {value.language}
                          </Typography>
                        </Box>
                        <Box alignItems='end' display='flex'>
                          <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                            Purchase Date: {value.purchaseDate}
                          </Typography>
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
  )
}
}

export default Books