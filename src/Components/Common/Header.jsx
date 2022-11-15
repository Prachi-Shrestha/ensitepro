import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Search = styled("div")(({ theme }) => ({
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const [searchShow, setsearchShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const searchExpand = () => {
    setsearchShow(current => !current);
  }

  return (
    <div>
      <AppBar position="static" className="bg-white" elevation={0}>
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
                Welcome Student
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
                      <IconButton onClick={searchExpand} className='header-icon'>
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
                
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                   className='header-icon'
                >
                  <MenuIcon fontSize="small"/>
                </IconButton>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar open={open} setOpen={setOpen}/>
    </div>
  );
};
export default Header;
