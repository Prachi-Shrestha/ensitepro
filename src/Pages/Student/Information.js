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
  
  return (
    <div>
      <ComponentHeader title='Information'/>
      <Container>
        <Grid sx={cardStyles.card}>   
          <Avatar sx={{ width: '89px', height: '89px', border: '3px solid #226CE0' }} src="https://avatars.githubusercontent.com/u/86892846?v=4" alt="" />
          <Typography sx={{lineHeight: '75px', fontWeight: 600}}> SHIKHAR POKHAREL </Typography>
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
              <Typography variant="body2" gutterBottom>: 790196</Typography> 
              <Typography variant="body2" gutterBottom>: 224</Typography> 
              <Typography variant="body2" gutterBottom>: General</Typography> 
              <Typography variant="body2" gutterBottom>: General Group</Typography> 
              <Typography variant="body2" gutterBottom>: pokharelshikharu@gmail.com</Typography> 
              <Typography variant="body2" gutterBottom>: Male</Typography> 
              <Typography variant="body2" gutterBottom>: 1234567890</Typography> 
              <Typography variant="body2" gutterBottom>: 0987654321</Typography> 
              <Typography variant="body2" gutterBottom>: 2055-10-26</Typography> 
              <Typography variant="body2" gutterBottom>: Nepalese</Typography> 
              <Typography variant="body2" gutterBottom>: Normal</Typography> 
              <Typography variant="body2" gutterBottom>: YYYY</Typography> 
              <Typography variant="body2" gutterBottom>: Unmarried</Typography> 
              <Typography variant="body2" gutterBottom>: XYZ</Typography> 
            </Grid>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header"
                sx={{ background: 'rgba(1, 229, 240, 0.3)', borderRadius: '4px'}}
              >
                <Typography> Permanent Address </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={5}>
                  <Typography variant="body2" fontWeight='600' gutterBottom>Province</Typography> 
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="body2" gutterBottom>: Bagmati</Typography> 
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
                <Typography> Province: </Typography>
                <Typography> District: </Typography>
                <Typography> Province: </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Information