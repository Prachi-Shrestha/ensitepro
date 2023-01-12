import { Box, Button, Grid, InputLabel, MenuItem, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ComponentHeader from '../../Components/Common/ComponentHeader2';
import SelectInput from '../../Components/Common/SelectInput';
import axios from 'axios';
import BasicCard from '../../Components/Common/BasicCard';

const HomeworkCheck = () => {
    const [data, setData] = useState('')
    const [year, setYear] = useState('');
    const [yearData, setYearData] = useState([]);
    const [subjectData, setSubjectData] = useState([])
    const [group, setGroup] = useState('')
    const [program, setProgram] = useState('');
    const [classId, setClassId] = useState('');
    const [homeworkId, setHomeworkId] = useState('');
    const [subject, setSubject] = useState('');
    const [show, setShow] = useState(false);
    const [regId, setRegId] = useState(false);
    const [date, setDate] = useState(false);
    
    const [values, setValues] = React.useState({
        checked: '',
        question: '',
        answer: '',
        remarks: '',
    });
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const showCheck = (id) => {
        setHomeworkId(id);
        setShow(true);
        data.map((value) => {
            if(value.question === id){
                setValues({
                    answer: value.answer,
                    question: value.homework,
                    remarks: value.remarks
                })
                setRegId(value.regNo)
                setDate(value.homeworkDate)
            }
        })
    }
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

    }, []);

    useEffect(() => {
        axios.get(
        `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework/Subject?academicYear=${year}&program=${program}&classId=${classId}&subjectGroup=${group}`,
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

    const getData = (e) => {
        e.preventDefault()
        axios.get(
            `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework/HomeworkCheck?academicYear=${year}&date=${values.homeworkDate}&classId=${classId}&program=${program}&subject=${subject}&subjectGroup=${group}`,
            {   headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                } 
            }
          )
          .then(response => {
            setData(response.data);
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
    }

    const checked = (e) => {
        e.preventDefault()
        axios.post(
        `${process.env.REACT_APP_base_URL}/api/TeacherPanel/TeachersHomework/HomeworkCheck`,    
        {
            "pk": {
              "stuId": regId,
              "homework": homeworkId,
            },
            "homework": homeworkId,
            "answer": values.answer,
            "checkDate": values.checked,
            "remark": values.remarks,
          },
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
        const programData = JSON.parse(localStorage.getItem("programs"));
        const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
        const classData = JSON.parse(localStorage.getItem("classes"));
        return (
            <div>
                <ComponentHeader title="Homework Check"/>
                {!show &&
                    <Container>
                        <form onSubmit={getData}>
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
                            </Grid>
                            <Box textAlign='center' paddingTop= '40px'>
                                <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Search </Button>
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
                                            {value.title}
                                        </Typography>
                                        }
                                        content={
                                        <Box marginTop='-15px'>
                                            <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                                                Question: {value.homework}
                                            </Typography>
                                            <Box display='flex' justifyContent= 'space-between'>                          
                                                <Box>
                                                    <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
                                                    Name: {value.name} 
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
                                            <Button variant='contained' onClick={() => showCheck(value.question)}> Check </Button>
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
                }
                {show && 
                    <Container sx={{mt: '30px'}}>
                        <form onSubmit={checked}>
                            <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="question">
                                Question:
                            </Typography>
                            <TextField
                                fullWidth
                                id="question"
                                sx={{backgroundColor: '#fff', mb: '30px'}}
                                value={values.question}
                                onChange={handleChange('question')}
                            />
                            <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="answer">
                                Answer:
                            </Typography>
                            <TextField
                                fullWidth
                                id="answer"
                                sx={{backgroundColor: '#fff', mb: '30px'}}
                                value={values.answer}
                                onChange={handleChange('answer')}
                                multiline
                                rows={9}
                            />
                            <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="remarks">
                                Remarks:
                            </Typography>
                            <TextField
                                fullWidth
                                id="remarks"
                                sx={{backgroundColor: '#fff', mb: '30px'}}
                                value={values.remarks}
                                onChange={handleChange('remarks')}
                            />
                            <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="checked">
                                Cheched Date:
                            </Typography>
                            <TextField
                                fullWidth
                                id="checked"
                                sx={{backgroundColor: '#fff', mb: '30px'}}
                                value={values.checked}
                                onChange={handleChange('checked')}
                            />
                            <Box textAlign='center' paddingTop= '40px'>
                                <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Check </Button>
                            </Box> 
                        </form>
                    </Container>
                }
            </div>
        )
    }
}

export default HomeworkCheck