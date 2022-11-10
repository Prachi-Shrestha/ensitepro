import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Box } from '@mui/system';

const BasicCard = ({header, content}) => {

  return (
    <Box sx={{paddingBottom: '10px', paddingTop: '5px'}} >
    <Card>
      <CardHeader
        title={header}
        />
        <CardContent>
            {content}
        </CardContent>
    </Card>
    </Box>
  )
};

export default BasicCard

// BasicCard.defaultProps={
//   content2: <Content/>, content1: <Assignment/>,
// };