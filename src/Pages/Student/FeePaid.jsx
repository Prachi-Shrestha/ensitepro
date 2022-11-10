import { Box, Button, Container, Grid, MenuItem } from '@mui/material'
import React from 'react'
import ComponentHeader from '../../Components/Common/ComponentHeader'
import SelectInput from '../../Components/Common/SelectInput'

const FeePaid = () => {
  return (
    <div>
        <ComponentHeader title='Fee Paid'/>
        <Container>
            <Grid container spacing={2} sx={{my: '0.5rem'}}>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Year' id='select-year'>
                        <MenuItem value={10}>Ten</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput label='Select Class' id='select-class'>
                        <MenuItem value={10}>Twen</MenuItem>
                    </SelectInput>
                </Grid>
            </Grid>
            <Box textAlign='center'>
              <Button variant="contained">Search</Button>
            </Box>
        </Container>
    </div>
  )
}

export default FeePaid