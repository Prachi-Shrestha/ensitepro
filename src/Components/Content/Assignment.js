import React from 'react'
import { Box, Typography} from '@mui/material';

const Assignment = () => {

    const sub = (
        "Science"
    );
    const teach = (
        "  Prachi Shrestha"
    );
    const remarks = (
        "  Excellent Work"  
    );
    const assigned = (
        "  19/09/2022"
    );
  return (
    <Box display='flex' marginTop='-15px'>
    <Box>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Subject: {sub}
      </Typography>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Teacher: {teach} 
      </Typography>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' noWrap>
        Teacher Remarks: {remarks}
      </Typography>
    </Box>
    <Box>
      <Typography variant='subtitle1' fontSize='12px' gutterBottom fontWeight='600' marginTop='25px' noWrap>
        Assigned Date: {assigned}
      </Typography>
    </Box>
  </Box>
      );
}

export default Assignment