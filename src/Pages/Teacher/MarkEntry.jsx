import { Box, Button, FormControl, Grid, Input, MenuItem, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import ComponentHeader from '../../Components/Common/ComponentHeader2';
import SelectInput from '../../Components/Common/SelectInput';
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

const MarkEntry = () => {
    const [data, setData] = useState('')
    const [year, setYear] = useState('');
    const [exam, setExam] = useState('');
    const [examData, setExamData] = useState([]);
    const [yearData, setYearData] = useState([]);
    const [subjectData, setSubjectData] = useState([])
    const [group, setGroup] = useState('')
    const [program, setProgram] = useState('');
    const [classId, setClassId] = useState('');
    const [subject, setSubject] = useState('');
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
    
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

          axios.get(
            `${process.env.REACT_APP_base_URL}/api/Exam/ExamMaster`,
            {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
            }
          )
          .then(response => {
            setExamData(response.data)
          })
          .catch(error => {
            setExamData(null)
          })

    }, []);
        
    useEffect(() => {
        axios.get(
        `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework/Subject/${year}?program=${program}&classId=${classId}&subjectGroup=${group}`,
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
    }, [program, classId, group, year]);

    const addData = (e) => {
      e.preventDefault()
      axios.get(
          `${process.env.REACT_APP_base_URL}/api/Exam/ExamMark/Entry?exam=${exam}&program=${program}&classId=${classId}&subjectGroup=${group}&subject=${subject}`,
          {   headers: {
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
      const programData = JSON.parse(localStorage.getItem("programs"));
      const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
      const classData = JSON.parse(localStorage.getItem("classes"));
      return (
        <div>
            <ComponentHeader title="Mark Entry"/>
            <Container>
                <form onSubmit={addData}>
                    <Grid container spacing={2} sx={{my: '0.5rem'}}>
                        <Grid item xs={6} md={6}>
                            <SelectInput label='Exam' id='select-exam' setValue={setExam} value={exam}>
                                {
                                    examData.map((value) =>
                                        <MenuItem value={value.id}>{value.examName}</MenuItem>
                                    )
                                }
                            </SelectInput>
                        </Grid>
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
                    </Grid>
                    <Box textAlign='center' paddingTop= '40px'>
                        <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Search </Button>
                    </Box> 
                </form>
            </Container>
        </div>
      )
    }
}

export default MarkEntry