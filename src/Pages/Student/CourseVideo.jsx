import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem, Typography } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

function CourseVideo() {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [subjectData, setSubjectData] = useState([])
    const [data, setData] = useState()
    const [group, setGroup] = useState(JSON.parse(localStorage.getItem("groupName")).id)
    const [program, setProgram] = useState(JSON.parse(localStorage.getItem("program")).id);
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
      `${process.env.REACT_APP_base_URL}/api/TeacherPanel/UploadVideo/Stu?subjectGroup=${group}&program=${program}&classId=${classId}&subject=${subject}`,
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
  const programData = JSON.parse(localStorage.getItem("programs"));
  const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
  const classData = JSON.parse(localStorage.getItem("classes"));
  return (
    <div>
        <ComponentHeader title='Course Video' />
        <Container>
          <form onSubmit={getData}>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Group' id='select-group' setValue={setGroup} value={group}>
                        {
                            groupData.map((value) =>
                                <MenuItem value={value.id}>{value.groupName}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Program' id='select-program' setValue={setProgram} value={program}>
                        {
                           programData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Class' id='select-class' setValue={setClassId} value={classId}>
                        {
                           classData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Subject' id='select-subject' setValue={setSubject} value={subject}>
                        {
                            subjectData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center'>
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
                      Online Class
                    </Typography>
                  }
                  content={
                    <Box marginTop='-15px'>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Video Title: {value.videoTitle}
                        </Typography>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Teacher: {value.teacher.firstName + ' ' + value.teacher.lastName} 
                        </Typography>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          Chapter: {value.courseChapter}
                        </Typography>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' wrap>
                          Link: <a href={value.youtubeLink}>{value.youtubeLink}</a>
                        </Typography>
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
export default CourseVideo