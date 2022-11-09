import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Container, Grid, MenuItem, Paper, Stack,
  Table, 
  TableBody, 
  TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles';
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: 600,
  color: '#fff',
}));

const totaldays = (
  0
);
const present = (
  0
);
const absent = (
  0
);

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

function createData( date, status, InTime, OutTime) {
  return {date, status, InTime, OutTime };
}

const rows = [
  createData('2022-9-22', 'Status', '9:05', '10:45'),
  createData('2022-9-22', 'Status', '9:05', '10:45'),
  createData('2022-9-22', 'Status', '9:05', '10:45'),
  createData('2022-9-22', 'Status', '9:05', '10:45'),
];

export const Attendance = () => {
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
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
        <ComponentHeader title='Attendance'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
            <Grid item xs={12} md={6}>
                    <SelectInput label='Year' id='select-year'>
                        <MenuItem value={10}>Ten</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Month' id='select-month'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
            </Grid>
        </Container>
        <Container>
          <Box backgroundColor='white' padding= '5px'>
            <Stack direction="row" justifyContent="center" spacing={5}>
              <Item sx={{backgroundColor: '#226CE0'}}> {totaldays} <br/> Total Days </Item>
              <Item sx={{backgroundColor: '#00BE57'}}> {present} <br/> Present </Item>
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
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.InTime}</StyledTableCell>
              <StyledTableCell align="center">{row.OutTime}</StyledTableCell>
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
