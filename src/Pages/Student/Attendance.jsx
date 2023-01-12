import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Container, Grid, MenuItem, Paper, Stack,
  Table, 
  TableBody, 
  TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles';
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: 600,
  color: '#fff',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D8FDFF',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#D8FDFF',
  },
}));

export const Attendance = () => {
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [data, setData] = useState('')
  var present = 0;
  var absent = 0;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    axios.get(
      `${process.env.REACT_APP_base_URL}/rest/Student/Dashboard`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setData(response.data.attendance);
      console.log(response.data.attendance);
    })
    .catch(error => {
      setData(null);
    })

  }, []);
  
  {data && data.map((day) => 
    day.status === 'Y' ?
      present= present + 1 : day.status === 'N' ? absent= absent + 1 : ''           
    )
  } 
if(!authenticated){
  return <Navigate replace to ='/'></Navigate>
}
else{

  return (
    <div>
        <ComponentHeader title='Attendance'/>
        <Container>
          <Box backgroundColor='white' padding= '5px'>
            <Stack direction="row" justifyContent="center" spacing={5}>
              <Item sx={{backgroundColor: '#226CE0'}}> {data.length} <br/> Total Days </Item>
              <Item sx={{backgroundColor: '#00BE57'}}>{present} <br/> Present </Item>
              <Item sx={{backgroundColor: '#F97770'}}> {absent}  <br/> Absent </Item>  
            </Stack>
          </Box>
        </Container>
      <Box>
        <br/>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">In Time</StyledTableCell>
                <StyledTableCell align="center">Out Time</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((row) => (
                <StyledTableRow>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">{row.inTime}</StyledTableCell>
                  <StyledTableCell align="center">{row.outTime}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
  }
}
