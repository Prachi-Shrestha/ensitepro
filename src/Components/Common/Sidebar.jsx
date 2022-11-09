import React from 'react'
import {
    Avatar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    styled,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import user from '../../img/avatar.png'
import home from '../../img/Vector (3).png'
import hw from '../../img/Note.png'
import video from '../../img/Video.png'
import notes from '../../img/Notes.png'
import books from '../../img/Document Pdf.png'
import routine from '../../img/ic_baseline-subject.png'
import attendance from '../../img/registration.png'
import calendar from '../../img/ant-design_calendar-outlined.png'
import bus from '../../img/Bus.png'
import course from '../../img/ep_video-play.png'
import education from '../../img/graduate.png'
import info from '../../img/info.png'
import paid from '../../img/payment 1.png'
import credit from '../../img/Layer 2.png'
import grade from '../../img/grade.png'
import report from '../../img/Vector (4).png'

function Sidebar(props) {

  console.log(props.open);
  
  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  }));

  return (
    <div>
        <Drawer
        sx={{
          width: '300px',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: '300px',
          },
        }}
        anchor="right"
        open={props.open}
        className='sidebar'
      >
        <DrawerHeader>
          <Link to='/profile'>
          <Avatar src={user}/>
          </Link>
          <Link to='/profile'>
          <Typography>Ram Shrestha</Typography>
          </Link>
          <IconButton onClick={handleDrawerClose}>
              <ChevronRight/>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{mx: '1rem'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={home} alt="home-icon"   />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>   
              <Link to='/homework'>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={hw} alt="homework-icon"   />
                  </ListItemIcon>
                  <ListItemText>Homework</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/onlineclass'>
              <ListItemButton>
                <ListItemIcon>
                  <img src={video} alt="online-icon"   />
                </ListItemIcon>
                <ListItemText>Online Class</ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/notes'>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={notes} alt="notes-icon"   />
                  </ListItemIcon>
                  <ListItemText>Notes</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={books} alt="books-icon"   />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/routine'>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={routine} alt="routine-icon"   />
                  </ListItemIcon>
                  <ListItemText>Routine</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/attendance'>
              <ListItemButton>
                <ListItemIcon>
                  <img src={attendance} alt="attendance-icon"   />
                </ListItemIcon>
                <ListItemText>Attendance</ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={calendar} alt="calendar-icon"   />
                </ListItemIcon>
                <ListItemText>Calendar</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/transportation'>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={bus} alt="Transportation-icon"   />
                  </ListItemIcon>
                  <ListItemText>Transportation</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/coursevideo'>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={course} alt="course-icon"   />
                  </ListItemIcon>
                  <ListItemText>Course Video</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={education} alt="education-icon"   />
                </ListItemIcon>
                <ListItemText>Previous Education</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/information'>
              <ListItemButton>
                <ListItemIcon>
                  <img src={info} alt="Information-icon"   />
                </ListItemIcon>
                <ListItemText>Information</ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={paid} alt="paid-icon"   />
                </ListItemIcon>
                <ListItemText>Fee Paid</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={credit} alt="credit-icon"   />
                </ListItemIcon>
                <ListItemText>Credit Fee</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/gradesheet'>
              <ListItemButton>
                <ListItemIcon>
                  <img src={grade} alt="grade-icon"   />
                </ListItemIcon>
                <ListItemText>Grade Sheet</ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem disablePadding sx={{ py: '1.5rem'}}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={report} alt="report-icon"   />
                </ListItemIcon>
                <ListItemText>Report a Problem</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{px: '0rem'}}>
              <img src="ensite_logo_SVG.svg" alt="ensite-logo" />
              <ListItemText className="product" sx={{pl: '1rem'}}>A product of Digital & Beyond</ListItemText>
            </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar