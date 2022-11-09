import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Grid, Avatar, Container, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComponentHeader from '../../Components/Common/ComponentHeader'

const cardStyles ={
  card: {
      bgcolor: '#fff',
      my: '0.5rem', 
      padding: '15px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
  },
};

const Information = () => {

  const [data, setData] = useState([])
  // const [program, setProgram] = useState([])

  useEffect(() => {
    console.log(process.env);
    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Information`,
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
  },[]);
  // useEffect(() => {
  //   axios.get(
  //     `${process.env.REACT_APP_base_URL}/api/Setup/ProgramMaster?id=${data.program}`,
  //     {
  //       headers: {
  //         'Authorization': 'Bearer ' + localStorage.getItem("token")
  //       }
  //     }
  //   )
  //   .then(response => {
  //     setProgram(response.data);
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     setProgram(null);
  //   })
  // },[data]);
  
  return (
    <div>
      <ComponentHeader title='Information'/>
      <Container>
        <Grid sx={cardStyles.card}>   
          <Avatar sx={{ width: '89px', height: '89px', border: '3px solid #226CE0' }} src="https://avatars.githubusercontent.com/u/86892846?v=4" alt="" />
          <Typography sx={{lineHeight: '75px', fontWeight: 600}}> {data.stuName} </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{marginBottom:'20px'}}
          >
            <div>
              <Typography variant="body2" fontWeight='600' gutterBottom>Class : {data.classId}</Typography>
            </div> 
            <div>
              <Typography variant="body2" fontWeight='600' gutterBottom>Year : 20{data.academicYear}</Typography> 
            </div>
            <div>
              <Typography variant="body2" fontWeight='600' gutterBottom>Section : {data.section}</Typography> 
            </div>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography variant="body2" fontWeight='600' gutterBottom>Reg. No</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Roll No</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Program</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Subject Group</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Email</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Gender</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Mobile No</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Alternative Mobile</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Date of Birth</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Citizenship</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Disability</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Admission Year</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Marital</Typography> 
              <Typography variant="body2" fontWeight='600' gutterBottom>Previous School</Typography> 
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body2" gutterBottom>: {data.id}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.rollNo}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.program}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.subjectGroup}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.email}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.gender === 'F' ? "Female" : "Male"}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.mobileNo}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.alternativeMobile}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.dateOfBirth}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.citizenship}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.disability}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.admissionYear}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.maritalStatus}</Typography> 
              <Typography variant="body2" gutterBottom>: {data.preSchool}</Typography> 
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1a-header"
                  sx={{ background: 'rgba(1, 229, 240, 0.3)', borderRadius: '4px'}}
                >
                  <Typography> Permanent Address </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Province</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.province}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>District</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.district}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Municipality</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.municipal}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Ward No</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.wardNo}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Village</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.tol}</Typography> 
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1a-header"
                  sx={{ background: 'rgba(1, 229, 240, 0.3)', borderRadius: '4px'}}
                >
                  <Typography> Temporary Address </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Province</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.provincet}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>District</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.districtt}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Municipality</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.municipalt}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Ward No</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.wardNot}</Typography> 
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" fontWeight='600' gutterBottom>Village</Typography> 
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body2" gutterBottom>: {data.tolt}</Typography> 
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Information