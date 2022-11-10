import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import books from '../../img/Vector (1).png'
import hw from '../../img/Vector (2).png'
import grade from '../../img/Result.png'
import bus from '../../img/School Bus.png'
import { Link } from 'react-router-dom'

function Resources() {
  return (
    <div className='bg-white'>
        <Container sx={{ py: '0.9rem', mb:'1rem'}}>
            <Typography variant="subtitle2" component="div" color='#226CE0' fontWeight='600' textAlign='center'sx={{ pb: '0.9rem'}}>
                Resources
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box textAlign='center'>
                        <Link to='/books' style={{ textDecoration:'none', color: 'black'}}>
                        <Button className='resource-button'>
                            <img src={books} alt=""   />
                        </Button>
                        <Typography fontSize='10px' gutterBottom>
                            Books
                        </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box textAlign='center'>
                        <Link to='/homework' style={{ textDecoration:'none', color: 'black'}}>
                        <Button className='resource-button'>
                            <img src={hw} alt=""   />                        
                        </Button>
                        <Typography fontSize='10px' gutterBottom>
                        Homework
                        </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>                   
                    <Box textAlign='center'>
                        <Link to='/gradesheet' style={{ textDecoration:'none', color: 'black'}}>
                        <Button className='resource-button'>
                            <img src={grade} alt=""   />                    
                        </Button>
                        <Typography fontSize='10px' gutterBottom>
                        Grade Sheet
                        </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box textAlign='center'>
                        <Link to='/transportation' style={{ textDecoration:'none', color: 'black'}}>
                        <Button className='resource-button'>
                            <img src={bus} alt=""   />                                                
                        </Button>
                        <Typography fontSize='10px' gutterBottom>
                        Transportation
                        </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Resources