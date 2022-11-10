import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import ComponentHeader from '../../Components/Common/ComponentHeader';

function NewsDetail() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ComponentHeader title='News' share={true}/>
      <Container>
        <Typography variant="h6" gutterBottom fontWeight='700' my='1rem'>
          Leo vestibulum vel, aliquam nunc, sit magna.
        </Typography>
      </Container>
    </Box>
  )
}

export default NewsDetail