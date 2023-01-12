import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar, Button, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import ComponentHeader from '../../Components/Common/ComponentHeader'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box } from '@mui/system';
import axios from 'axios';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
));

const cardStyles ={
    card: {
        bgcolor: '#fff',
        my: '0.5rem', 
        padding: '15px', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
    },
};

const Profile = () => {
  const navigate = useNavigate();

  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [data, setData] = useState([])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

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

  const logout = (e) => {
    e.preventDefault();
    console.log('Logout');
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");  
  }

if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='Profile'/>
        <Container>
            <Box sx= {cardStyles.card}>   
              <Avatar sx={{ width: '89px', height: '89px', border: '3px solid #226CE0' }} src={data.photo ? data.photo : 'noimage.png'} alt="" />
              <Typography sx={{lineHeight: '75px', fontWeight: 600}}> {data.stuName} </Typography>
              <Button variant="outlined" component={RouterLink} to="/information" sx={{color: 'black'}}> View Profile </Button>
            </Box>
        </Container>
        <Container>
        <Grid sx={{ width: '100%', bgcolor: 'background.paper'}}>
            <List>
            <ListItem disablePadding>   
                <ListItemButton>
                  <ListItemIcon>
                    <ExitToAppIcon/>
                  </ListItemIcon>
                  <ListItemText onClick={logout}> Logout </ListItemText> 
                </ListItemButton>
            </ListItem>
            </List>
        </Grid>
        </Container>
    </div>
  )
}
}

export default Profile