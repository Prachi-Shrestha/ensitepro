import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Button, Container, Grid, MenuItem } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import { Box } from '@mui/system';
import axios from 'axios';

function Routine() {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [year, setYear] = useState('');
    const [yearData, setYearData] = useState([]);
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

  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{
    const programData = JSON.parse(localStorage.getItem("programs"));
    const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
    const classData = JSON.parse(localStorage.getItem("classes"));
  return (
    <div>
        <ComponentHeader title='Routine' />
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Year' id='select-year' setValue={setYear} value={year}>
                        {
                            yearData.map((value) =>
                                <MenuItem value={value.id}>{value.year}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Group' id='select-group' setValue={setGroup} value={group}>
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
                    <SelectInput label='Select Class' id='select-class' setValue={setClassId} value={classId}>
                        {
                           classData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Section' id='select-section'>
                        <MenuItem value='A'>A</MenuItem>
                        <MenuItem value='B'>B</MenuItem>
                        <MenuItem value='C'>C</MenuItem>
                        <MenuItem value='D'>D</MenuItem>
                        <MenuItem value='E'>E</MenuItem>
                        <MenuItem value='F'>F</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Subject' id='select-subject' setValue={setSubject} value={subject}>
                        {
                            subjectData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                        {console.log(subject)}
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
                <Button variant='contained'> Search </Button>
            </Box>
        </Container>
    </div>
  )
}
}

export default Routine