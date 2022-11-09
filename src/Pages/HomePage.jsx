import React from 'react'
import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/system';

// const LinkBehavior = React.forwardRef((props, ref) => (
//     <RouterLink ref={ref} to="/" {...props} role={undefined} />
//   ));

const buttonStyles ={
    button: {
        width: '50ch',
        height: '52px',
        borderRadius: '99px',
        textTransform: 'none',
        background: 'linear-gradient(to left, #226CE0, #FFFAFF 124.45%)',
        boxShadow: 0,
        marginTop: '20px',
    },
};

const HomePage = () => {
  return (
    <div>
        <Container>
          <Grid container flexDirection='column' alignItems='center'>
            <Avatar sx={{width: '116px', height:'116px', my: '50px',}}variant='square' src="/" alt="School Logo" />
            <Typography sx={{fontWeight: 600, paddingTop: '83px'}}> Welcome Back! </Typography>
            <Typography sx={{fontWeight: 400, paddingBottom: '42px'}}> Select your Role to continue </Typography>
            <Button variant='contained' sx={buttonStyles.button} component={RouterLink} to="/studentlogin"> Student </Button>
            <Button variant='contained' sx={buttonStyles.button} component={RouterLink} to="/teacherlogin"> Teacher </Button>
          </Grid>
        </Container>
    </div>
  )
}

export default HomePage