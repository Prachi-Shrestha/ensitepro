import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
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
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  // position: "relative",
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   // padding: theme.spacing(0, 2),
//   height: "100%",
//   // position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: '0.3s ease',
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const Header2 = () => {

  const [searchShow, setsearchShow] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const searchExpand = () => {
    setsearchShow(current => !current);
  }

  return (
    <div>
      <AppBar position="static" className="bg-white">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Avatar src="https://avatars.githubusercontent.com/u/86892846?v=4" alt="" />

            <Box pl='1.5rem' sx={{display: {
                xs: searchShow ? 'none' : 'block',
                sm: 'block'
              } 
            }}>
              <Typography
                variant="subtitle1"
                component="div"
                color="#226CE0"
                fontWeight="600"
              >
                Welcome Teacher
              </Typography>
              <Box display="flex" sx={{ justifyContent: "center" }}>
                <Typography
                  fontSize="12px"
                  component="div"
                  sx={{ pr: "0.5rem" }}
                >
                  July 26, 2022
                </Typography>
                <Typography fontSize="12px" component="div">
                  5:10 P.M
                </Typography>
              </Box>
            </Box>

            <Box>
              <Toolbar sx={{ px: "0px" }}>
                <form action="">
                  <Search>
                      <IconButton className='header-icon' onClick={searchExpand}>
                        <SearchIcon fontSize="small"/>
                      </IconButton>
                      <StyledInputBase id="search-input"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }} style={{display: searchShow ? 'block' : 'none'}}
                      />
                  </Search>
                </form>
                <IconButton className='header-icon'>
                  <NotificationsIcon fontSize="small"/>
                </IconButton>
                
                <IconButton className='header-icon'
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon fontSize="small"/>
                </IconButton>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: '300px',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: '300px',
          },
        }}
        anchor="right"
        open={open}
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
              <ListItemButton>
                <ListItemIcon>
                  <img src={video} alt="online-icon"   />
                </ListItemIcon>
                <ListItemText>Online Class</ListItemText>
              </ListItemButton>
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
  );
};
export default Header2;
