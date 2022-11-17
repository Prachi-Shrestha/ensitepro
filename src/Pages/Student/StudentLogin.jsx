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

function StudentLogin() {
  const navigate = useNavigate();

    const [values, setValues] = React.useState({
        Username: '',
        password: '',
        showPassword: false,
    });
    
    const loginApi = (e) => {
      e.preventDefault();
        axios.post(`${process.env.REACT_APP_base_URL}StudentLogin`
        , {
            "userName": values.Username,
            "userPassword": values.password
          }
      )
        .then(response => {
          if(response.data.error){
            alert(response.data.error)
          }
          else{
            localStorage.setItem("authenticated", true);
            localStorage.setItem("class", response.data.classId);
            localStorage.setItem("section", response.data.session);
            localStorage.setItem("academicYear", response.data.academicYear);
            localStorage.setItem("token", response.data.token);
            navigate("/student");
            console.log(response);
            getSubject(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
    function getSubject(data){
      axios.get(
        `${process.env.REACT_APP_base_URL}/api/Setup/SubjectGroup`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        const groupData = response.data
        localStorage.setItem("subjectGroup", JSON.stringify(groupData));
        groupData.map((value) => {
          // setProgram(response.data.name)
          if(value.id === data.subjectGroup){
            let obj = {};
            obj['id'] = data.subjectGroup;
            obj['name'] = value.groupName;
            localStorage.setItem("groupName",JSON.stringify(obj));
          }
        })
      })
      .catch(error => {
        localStorage.setItem("groupName",null);
      })
  
      axios.get(
        `${process.env.REACT_APP_base_URL}/api/Setup/ProgramMaster`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        const programData = response.data
        console.log(programData);
        localStorage.setItem("programs", JSON.stringify(programData));
        programData.map((value) => {
          // setProgram(response.data.name)
          if(value.id === data.program){
            let obj = {};
            obj['id'] = data.program;
            obj['name'] = value.name;
            localStorage.setItem("program", JSON.stringify(obj));
          }
        })
      })
      .catch(error => {
        localStorage.setItem("program", null);
      })

      axios.get(
        `${process.env.REACT_APP_base_URL}/api/Setup/ClassMaster`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        const classData = response.data
        localStorage.setItem("classes", JSON.stringify(classData));
        classData.map((value) => {
          if(value.id === data.classId){
            let obj = {};
            obj['id'] = data.classId;
            obj['name'] = value.name;
            localStorage.setItem("class",JSON.stringify(obj));
          }
        })
      })
      .catch(error => {
        localStorage.setItem("class",null);
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
    <Typography variant='subtitle2' paddingTop='80px'> Student Login </Typography>
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
          required
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
                required
            />
        </FormControl>
        </Grid>
        <Typography variant='subtitle2' color='#ADA4A5'> Forgot your password? </Typography>
        <Button variant="contained" type='submit'
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

export default StudentLogin