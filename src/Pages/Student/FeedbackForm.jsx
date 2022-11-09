import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'

function FeedbackForm() {

  return (
    <div className='bg-white'>
        <Container>
          <Box sx={{ py: '1.4rem'}}>
            <TextField fullWidth id="outlined-basic" label="Send us a feedback" variant="outlined" />
            <Box container spacing={2} sx={{ mt: '0.5rem'}} textAlign="center">
              <Button variant="contained" sx={{ py: '0.6rem', px:'4rem'}}>Submit</Button> 
            </Box>
          </Box>            
        </Container>
    </div>
  )
}

export default FeedbackForm