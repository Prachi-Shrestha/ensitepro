import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ComponentHeader from '../../Components/Common/ComponentHeader';
import SelectInput from '../../Components/Common/SelectInput';
import AddIcon from '@mui/icons-material/Add';


const TeacherOnlineClass = () => {
  return (
    <div>
        <ComponentHeader title='Previous Education'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Academic Year' id='select-academic-year'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Group' id='select-group-teacher'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Program' id='select-program'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Class' id='select-class-teacher'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Select Subject' id='select-subject-teacher'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  label="Enter Start Time"
                  id="outlined-starttime"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>  
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-endtime"
                  label="Enter End Time"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={7} md={10}>
                <TextField
                  fullWidth
                  id="outlined-link"
                  label="Enter Link"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={5} md={2} sx={{marginTop: '10px'}}>
                    <Button variant='contained' sx={{textTransform: 'none', backgroundColor: '#009E19'}}> <AddIcon/> Create Link </Button>
                </Grid>              
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
                <Button variant='contained' sx={{textTransform: 'none'}}> Search </Button>
            </Box> 
        </Container>
    </div>
  )
}

export default TeacherOnlineClass