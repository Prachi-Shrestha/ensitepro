import { Container, Typography } from '@mui/material'
import React from 'react'
import ComponentHeader from '../../Components/Common/ComponentHeader'

function NotesView() {
  return (
    <div>
      <ComponentHeader title='View'/>
      <Container>
        <Typography variant="body2" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.

          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
      </Container>
    </div>
  )
}

export default NotesView