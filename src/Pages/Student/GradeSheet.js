import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Grid, MenuItem } from '@mui/material'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';

const GradeSheet = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [exam, setExam] = useState('')
    const [examData, setExamData] = useState([])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Exam`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setExamData(response.data);
    })
    .catch(error => {
      setExamData(null);
    })

  }, []);

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='GradeSheet'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={0}>
                    <SelectInput label='Select Exam' id='select-exam' setValue={setExam} value={exam}>
                        {
                            examData.map((value) =>
                                <MenuItem value={value.id}>{value.name}</MenuItem>
                            )
                        }
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop='40px'>
              <Button variant="contained">Search</Button>
            </Box>
        </Container>
    </div>
  )
}
}
export default GradeSheet