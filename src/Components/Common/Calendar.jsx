import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CommonCalendar(props) {
  const [data, setData] = useState('')

  useEffect(() => {

    axios.get(
      `${process.env.REACT_APP_base_URL}/${props.url}/Dashboard`,
      {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }}
    )
    .then(response => {
      setData(response.data.calender);
      console.log(response.data.calender);
    })
    .catch(error => {
      setData(null);
    })

  }, []);
  
    return (
        <div>
            <Container>
                <TableContainer sx={{ maxHeight: '80vh', mt: '30px' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Day</TableCell>
                                <TableCell align="center">Event</TableCell>
                                <TableCell align="center">Holiday</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row) => (
                                <TableRow key={row.id} sx={ (row.holiday === 'Y') ? {backgroundColor: 'red'} : ''}>
                                    <TableCell align="center" sx={ (row.holiday === 'Y') ? {color: 'white'} : ''}>{row.date}</TableCell>
                                    <TableCell align="center" sx={ (row.holiday === 'Y') ? {color: 'white'} : ''}>{row.day}</TableCell>
                                    <TableCell align="center" sx={ (row.holiday === 'Y') ? {color: 'white'} : ''}>{row.event}</TableCell>
                                    <TableCell align="center" sx={ (row.holiday === 'Y') ? {color: 'white'} : ''}>{row.holiday}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default CommonCalendar