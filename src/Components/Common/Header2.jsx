import * as React from "react";
import { useState } from "react";
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
import Sidebar2 from "./Sidebar2";

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
      <Sidebar2 open={open} setOpen={setOpen}/>
    </div>
  );
};
export default Header2;
