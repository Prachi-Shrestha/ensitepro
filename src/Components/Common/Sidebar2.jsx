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
import attendance from '../../img/registration.png'
import calendar from '../../img/ant-design_calendar-outlined.png'
import course from '../../img/ep_video-play.png'
import notice from '../../img/Board Presentation.png'
import mark from '../../img/emojione-v1_heavy-check-mark.png'
import report from '../../img/Vector (4).png'

function Sidebar2(props) {
    
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
          <Avatar src={user}/>
          <Typography>Ram Shrestha</Typography>
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
              <ListItemButton>
                <ListItemIcon>
                  <img src={hw} alt="homework-icon"   />
                </ListItemIcon>
                <ListItemText>Homework</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={hw} alt="homework-icon"   />
                </ListItemIcon>
                <ListItemText>Homework Check</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <Link to='/teacheronlineclass'>
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
              <ListItemButton>
                <ListItemIcon>
                  <img src={attendance} alt="attendance-icon"   />
                </ListItemIcon>
                <ListItemText>Student Attendance</ListItemText>
              </ListItemButton>
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
              <ListItemButton>
                <ListItemIcon>
                  <img src={course} alt="upload-icon"   />
                </ListItemIcon>
                <ListItemText>Upload Video</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={notice} alt="notice-icon"   />
                </ListItemIcon>
                <ListItemText>Notice Board</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={mark} alt="mark-icon"   />
                </ListItemIcon>
                <ListItemText>Mark Entry</ListItemText>
              </ListItemButton>
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

export default Sidebar2