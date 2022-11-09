import React from 'react'
import { Box, Typography} from '@mui/material';

const Online = () => {
    const link = (
        "  www.google.com"
    );
    const teach = (
        "  Prachi Shrestha"
    );
    const start = (
        "  9:55 am"  
    );
    const end = (
        "  10:40 am"
    );
  return (
    <Box display='flex' marginTop='-15px'>
    <Box>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Link: {link}
      </Typography>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Teacher: {teach} 
      </Typography>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Start Time: {start}
      </Typography>
    </Box>
    <Box>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' marginTop='50px' marginLeft='40px' noWrap>
        End Time: {end}
      </Typography>
    </Box>
  </Box>
    );
}

export default Online