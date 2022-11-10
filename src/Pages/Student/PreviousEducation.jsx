import { Box, Button, Container, Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'

const PreviousEducation = () => {
  return (
    <div>
        <ComponentHeader title='Previous Education'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  id="outlined-username"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                    <SelectInput label='Education' id='select-education'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-exam-name"
                  label="Exam Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-board-name"
                  label="Board Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-board-reg"
                  label="Board Reg No"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-symbol"
                  label="Symbol No"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-passed-year"
                  label="Passed Year"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-grade"
                  label="Div/Grade"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-precentage"
                  label="Precentage/GPA"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-institiue"
                  label="Institute Name"
                  sx={{backgroundColor: '#fff'}}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  id="outlined-subject"
                  label="Major Subject"
                  sx={{backgroundColor: '#fff'}}
                  
                />
                </Grid>
            </Grid>
            <Box textAlign='center' paddingTop= '40px'>
                <Button variant='contained'> Search </Button>
            </Box>
        </Container>
    </div>
  )
}

export default PreviousEducation