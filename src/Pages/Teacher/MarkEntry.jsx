import { Box, Button, FormControl, Grid, Input, MenuItem, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ComponentHeader from '../../Components/Common/ComponentHeader2';
import SelectInput from '../../Components/Common/SelectInput';
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

const MarkEntry = () => {
    const [data, setData] = useState('')
    const [year, setYear] = useState('');
    const [yearData, setYearData] = useState([]);
    const [subjectData, setSubjectData] = useState([])
    const [group, setGroup] = useState('')
    const [program, setProgram] = useState('');
    const [classId, setClassId] = useState('');
    const [subject, setSubject] = useState('');
    const [values, setValues] = React.useState({
        homeWork: '',
        homeworkDate: '',
        homeworkTitle: '',
        photo: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    useEffect(() => {
        // const loggedInUser = localStorage.getItem("authenticated");
        // if (loggedInUser) {
        //   setauthenticated(loggedInUser);
        // }
    
        axios.get(
            `${process.env.REACT_APP_base_URL}/api/Setup/AcademicYear`,
            {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
            }
          )
          .then(response => {
            setYearData(response.data)
          })
          .catch(error => {
            setYearData(null)
          })

    }, []);
        
    useEffect(() => {
        axios.get(
        `${process.env.REACT_APP_base_URL}/api/Setup/SubjectGroup/ClassGroupWise?program=${program}&classId=${classId}&subjectGroup=${group}`,
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
    }, [program, classId, group]);

    useEffect(() => {

        axios.get(
        `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework?academicYear=${year}&classId=${classId}&program=${program}&subjectGroup=${group}`,
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

    }, [program, classId, group, year]);

    const addData = (e) => {
        e.preventDefault()
        axios.post(
            `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework`,
            {
                'academicYear': year, 
                'subjectGroup': group,
                'program': program, 
                'classId': classId, 
                'homeWork': values.homeWork, 
                'homeworkDate': values.homeworkDate,
                'homeworkTitle': values.homeworkTitle,   
                'photo': values.photo,   
            },
            {   headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                } 
            }
          )
          .then(response => {
            // setData(response.data);
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
    }

    const programData = JSON.parse(localStorage.getItem("programs"));
    const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
    const classData = JSON.parse(localStorage.getItem("classes"));
  return (
    <div>
        <ComponentHeader title="Teacher's Homework"/>
        <Container>
            <form onSubmit={addData}>
                <Grid container spacing={2} sx={{my: '0.5rem'}}>
                    <Grid item xs={6} md={6}>
                        <SelectInput label='Academic Year' id='select-academic-year' setValue={setYear} value={year}>
                            {
                                yearData.map((value) =>
                                    <MenuItem value={value.id}>{value.year}</MenuItem>
                                )
                            }
                        </SelectInput>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <SelectInput label='Select Group' id='select-group-teacher' setValue={setGroup} value={group}>
                            {
                                groupData.map((value) =>
                                    <MenuItem value={value.id}>{value.groupName}</MenuItem>
                                )
                            }
                        </SelectInput>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <SelectInput label='Select Program' id='select-program' setValue={setProgram} value={program}>
                            {
                            programData.map((value) =>
                                    <MenuItem value={value.id}>{value.name}</MenuItem>
                                )
                            }
                        </SelectInput>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <SelectInput label='Select Class' id='select-class-teacher' setValue={setClassId} value={classId}>
                            {
                            classData.map((value) =>
                                    <MenuItem value={value.id}>{value.name}</MenuItem>
                                )
                            }
                        </SelectInput>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <SelectInput label='Select Subject' id='select-subject-teacher' setValue={setSubject} value={subject}>
                            {
                                subjectData.map((value) =>
                                    <MenuItem value={value.id}>{value.name}</MenuItem>
                                )
                            }
                        </SelectInput>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            fullWidth
                            label="Enter Date"
                            id="outlined-homeworkDate"
                            sx={{backgroundColor: '#fff'}}
                            value={values.homeworkDate}
                            onChange={handleChange('homeworkDate')}
                        />
                    </Grid>  
                    <Grid item xs={12} md={12}>
                        <TextField
                            fullWidth
                            id="outlined-homeworkTitle"
                            label="Enter Title"
                            sx={{backgroundColor: '#fff'}}
                            value={values.homeworkTitle}
                            onChange={handleChange('homeworkTitle')}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            fullWidth
                            id="outlined-Questions"
                            value={values.homeWork}
                            label="Questions"
                            multiline
                            rows={9}
                            sx={{backgroundColor: '#fff'}}
                            onChange={handleChange('homeWork')}
                        />
                        <FormControl className='inputFile' sx={{marginTop: '10px'}}>
                            Upload PDF/Image
                            <Input type='file' sx={{marginTop: '10px'}} 
                                value={values.photo}
                                onChange={handleChange('photo')} 
                            />
                        </FormControl>
                    </Grid>          
                </Grid>
                <Box textAlign='center' paddingTop= '40px'>
                    <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Save </Button>
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
                        {value.homeworkTitle}
                      </Typography>
                    }
                    content={
                      <Box marginTop='-15px'>
                        <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                          homeWork: {value.homeWork}
                        </Typography>
                        <Box display='flex' justifyContent= 'space-between'>                          
                          <Box>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              Teacher: {value.teacher} 
                            </Typography>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              Date: {value.homeworkDate}
                            </Typography>
                          </Box>
                          <Box alignItems='end' display='flex'>
                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                              Subject: {value.subject}
                            </Typography>
                          </Box>
                        </Box>
                        <a href={value.fileUrl}>{value.fileUrl}</a>
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

export default MarkEntry