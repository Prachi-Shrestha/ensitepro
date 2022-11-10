import React from 'react'
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControl, Grid, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FlareSharp } from '@mui/icons-material';

function TeacherLogin() {
    const navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );

    const[values, setValues] = React.useState({
        Username: '',
        password: '',
        showPassword: false,
    });
    const loginApi = (e) => {
        e.preventDefault();
          axios.post(`${process.env.REACT_APP_base_URL}TeacherLogin`
          , {
              "userName": values.Username,
              "userPassword": values.password
            }
        )
          .then(response => {
            console.log(response);
            localStorage.setItem("authenticated", true);
            localStorage.setItem("token", response.data.token);
            navigate("/teacher");
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
      }
        const handleChange = (prop) => (event) => {
          setValues({ ...values, [prop]: event.target.value });
        };
      
        const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };

  return (
    <div align='center'>
    <Typography marginTop= '50px'>
    <Typography sx={{fontWeight: '400', fontSize: '16px'}}> Hey there, </Typography>
    <Typography sx={{fontWeight: '700', fontSize: '20px'}}> Welcome To </Typography>
    <Typography sx={{fontWeight: '400', fontSize: '24px'}}> SMS </Typography>
    </Typography>
    <Typography variant='subtitle2' paddingTop='80px'> Teacher Login </Typography>
    <form onSubmit={loginApi}>
    <Grid container flexDirection='column' alignItems='center'>
        <TextField
          label="Username"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50ch' }}
          value={values.Username}
          onChange={handleChange('Username')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon/></InputAdornment>,
          }}
        />
        <FormControl variant="outlined" sx={{ m: 1, width: '50ch' }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                startAdornment={
                <InputAdornment position="start">
                    <IconButton aria-label="menu">
                        <LockOutlinedIcon />
                    </IconButton>
                </InputAdornment>}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
        </Grid>
        <Typography variant='subtitle2' color='#ADA4A5'> Forgot your password? </Typography>
        <Button variant="contained" onClick={loginApi} 
        sx={{
            position: 'relative',
            width: '50ch',
            height: '60px',
            borderRadius: '99px',
            textTransform: 'none',
            background: 'linear-gradient(to left, #226CE0, #FFFAFF 124.45%)',
            boxShadow: 0,
            bottom: '-22ch',
            }}> 
            <LoginIcon sx={{pr: '10px'}}/> Login
        </Button>
    </form>
    </div>
  )
}


export default TeacherLogin