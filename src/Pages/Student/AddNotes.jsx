import { Box, Button, Container, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ComponentHeader from '../../Components/Common/ComponentHeader'

function AddNotes() {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [values, setValues] = React.useState({
        title: '',
        notes: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const add = (e) => {
        e.preventDefault()
        axios.post(
        `${process.env.REACT_APP_base_URL}/api/Utility/Notes`,    
        {
            "title": values.title,
            "body": values.notes,
        },
        {   
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
            } 
        }
        )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
      if (loggedInUser) {
        setauthenticated(loggedInUser);
      }
    }, []);

    if(!authenticated){
        return <Navigate replace to ='/'></Navigate>
    }
    else{
        return (
            <div>
                <ComponentHeader title='Add Notes' share={false}/>
                <Container sx={{mt: '30px'}}>
                    <form onSubmit={add}>
                        <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="title">
                            Title:
                        </Typography>
                        <TextField
                            fullWidth
                            id="title"
                            sx={{backgroundColor: '#fff', mb: '30px'}}
                            value={values.title}
                            onChange={handleChange('title')}
                        />
                        <Typography fontSize='14px' fontWeight='600' fontFamily='Open Sans' color='#226CE0' component={InputLabel} for="notes">
                            Notes:
                        </Typography>
                        <TextField
                            fullWidth
                            id="notes"
                            sx={{backgroundColor: '#fff', mb: '30px'}}
                            value={values.notes}
                            onChange={handleChange('notes')}
                            multiline
                            rows={9}
                        />
                        <Box textAlign='center' paddingTop= '40px'>
                            <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Add </Button>
                        </Box> 
                    </form>
                </Container>
            </div>
        )
    }
}

export default AddNotes