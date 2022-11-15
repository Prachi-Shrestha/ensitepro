import { ArrowBack, Search, Share } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

function ComponentHeader(props) {
  const [open, setOpen] = React.useState(false);
  const history = useNavigate()
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <AppBar position="static" className="bg-white" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => history(-1)}
          >
            <ArrowBack/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {props.share &&
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Share/>
          </IconButton>}
          {props.search &&
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Search/>
          </IconButton>}
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
      </AppBar>
      <Sidebar open={open} setOpen={setOpen}/>
    </div>
  )
}

export default ComponentHeader