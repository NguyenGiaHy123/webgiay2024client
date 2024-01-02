import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {title:String}

const BoxHeader = ({title}: Props) => {
  return (
    
   <Box width="100%">
    <Typography variant='h4' mb="0.1rem">
        {title}
    </Typography>

   </Box>
  )
}

export default BoxHeader