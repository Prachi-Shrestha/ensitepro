import { Box, Button, Grid, MenuItem, TextField, Table, 
    TableBody, 
    TableCell, tableCellClasses, TableContainer, TableHead, TableRow, styled, Paper, Checkbox  } from '@mui/material';
import PropTypes from 'prop-types';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ComponentHeader from '../../Components/Common/ComponentHeader2';
import SelectInput from '../../Components/Common/SelectInput';
import axios from 'axios';

const headCells = [
    {
      id: 'stuId',
      disablePadding: true,
      label: 'Reg. No.',
    },
    {
      id: 'stuName',
      disablePadding: false,
      label: "Student's Name",
    },
    {
      id: 'rollNo',
      disablePadding: false,
      label: 'Roll No.',
    },
    {
      id: 'inTime',
      disablePadding: false,
      label: 'In Time',
    },
    {
      id: 'outTime',
      disablePadding: false,
      label: 'Out Time',
    },
    {
      id: 'enterBy',
      disablePadding: false,
      label: 'Enter By',
    },
    {
      id: 'enterDate',
      disablePadding: false,
      label: 'Enter Date',
    },
  ];
  
  function EnhancedTableHead(props) {
      const { onSelectAllClick, numSelected, rowCount } =
        props; 
    
      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id} 
              > 
                  {headCell.label} 
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
    }
    
    EnhancedTableHead.propTypes = {
      numSelected: PropTypes.number.isRequired, 
      onSelectAllClick: PropTypes.func.isRequired, 
      rowCount: PropTypes.number.isRequired
    };

const StudentAttendance = () => {
    const [data, setData] = useState([])
    const [year, setYear] = useState('');
    const [yearData, setYearData] = useState([]);
    const [group, setGroup] = useState('')
    const [program, setProgram] = useState('');
    const [classId, setClassId] = useState('');
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const [values, setValues] = React.useState({
        date: '',
        inTime: '',
        outTime: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
    
        axios.get(
            `${process.env.REACT_APP_base_URL}/api/Setup/AcademicYear`,
            {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
            }
          )
          .then(response => {
            setYearData(response.data)
          })
          .catch(error => {
            setYearData(null)
          })

    }, []); 

    const getData = (e) => {
        e.preventDefault()
        axios.get(
            `${process.env.REACT_APP_base_URL}/api/Student/StudentAttendance/Teacher?acadeicYear=${year}&date=${values.date}&classId=${classId}&program=${program}&subjectGroup=${group}`,
            {   headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                } 
            }
          )
          .then(response => {
            setData(response.data);
            // console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
    }

    const saveData = (event, id) => {
      event.preventDefault()
      // axios.put(
      //     `${process.env.REACT_APP_base_URL}/api/Student/StudentAttendance`,
          
      //     {   headers: {
      //             'Authorization': 'Bearer ' + localStorage.getItem("token")
      //         } 
      //     }
      //   )
      //   .then(response => {
      //     // setData(response.data);
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
  }

    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelected = data.map((n) => n.name);
        setSelected(newSelected);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
          } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
          } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
          } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
              selected.slice(0, selectedIndex),
              selected.slice(selectedIndex + 1),
          );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    if(!authenticated){
        return <Navigate replace to ='/'></Navigate>
    }
    else{
        const programData = JSON.parse(localStorage.getItem("programs"));
        const groupData = JSON.parse(localStorage.getItem("subjectGroup"));
        const classData = JSON.parse(localStorage.getItem("classes"));
        return (
            <div>
                <ComponentHeader title="Student Attendance"/>
                <Container>
                    <form onSubmit={getData}>
                        <Grid container spacing={2} sx={{my: '0.5rem'}}>
                            <Grid item xs={6} md={6}>
                                <SelectInput label='Academic Year' id='select-academic-year' setValue={setYear} value={year}>
                                    {
                                        yearData.map((value) =>
                                            <MenuItem value={value.id}>{value.year}</MenuItem>
                                        )
                                    }
                                </SelectInput>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <SelectInput label='Select Group' id='select-group-teacher' setValue={setGroup} value={group}>
                                    {
                                        groupData.map((value) =>
                                            <MenuItem value={value.id}>{value.groupName}</MenuItem>
                                        )
                                    }
                                </SelectInput>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <SelectInput label='Select Program' id='select-program' setValue={setProgram} value={program}>
                                    {
                                    programData.map((value) =>
                                            <MenuItem value={value.id}>{value.name}</MenuItem>
                                        )
                                    }
                                </SelectInput>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <SelectInput label='Select Class' id='select-class-teacher' setValue={setClassId} value={classId}>
                                    {
                                        classData.map((value) =>
                                            <MenuItem value={value.id}>{value.name}</MenuItem>
                                        )
                                    }
                                </SelectInput>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField
                                    fullWidth
                                    label="Enter Date"
                                    id="outlined-date"
                                    sx={{backgroundColor: '#fff'}}
                                    value={values.date}
                                    onChange={handleChange('date')}
                                />
                            </Grid>          
                        </Grid>
                        <Box textAlign='center' paddingTop= '40px'>
                            <Button variant='contained' sx={{textTransform: 'none'}} type='submit'> Search </Button>
                        </Box> 
                    </form>
                    {data.length > 0 &&
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                >
                                    <EnhancedTableHead
                                      numSelected={selected.length} 
                                      onSelectAllClick={handleSelectAllClick} 
                                      rowCount={data.length}
                                    />
                                    <TableBody>
                                    {data.map((row, index) => {
                                        const isItemSelected = isSelected(row.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                        
                                        return (
                                          <>
                                            <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            >
                                              <TableCell padding="checkbox">
                                                  <Checkbox
                                                  color="primary"
                                                  checked={isItemSelected}
                                                  inputProps={{
                                                      'aria-labelledby': labelId,
                                                  }}
                                                  />
                                              </TableCell>
                                              <TableCell
                                                  component="th"
                                                  id={labelId}
                                                  scope="row" 
                                              >
                                                  {row.stuId}
                                              </TableCell>
                                              <TableCell>{row.stuName}</TableCell>
                                              <TableCell>{row.rollNo}</TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell> </TableCell>
                                              <TableCell>
                                                <TextField
                                                  fullWidth
                                                  label="In Time"                                              
                                                  sx={{backgroundColor: '#fff'}}
                                                  value={values.inTime}
                                                  onChange={handleChange('inTime')}
                                                />
                                              </TableCell>
                                              <TableCell>
                                                <TextField
                                                  fullWidth
                                                  label="Out Time"                                              
                                                  sx={{backgroundColor: '#fff'}}
                                                  value={values.outTime}
                                                  onChange={handleChange('outTime')}
                                                />
                                              </TableCell>
                                              <TableCell> 
                                                <Button variant='contained' sx={{textTransform: 'none'}} onClick={event => saveData(event, row.stuId)}>Save</Button>
                                              </TableCell>
                                            </TableRow>
                                          </>
                                        );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    }
                </Container>
            </div>
        )
    }
}

export default StudentAttendance