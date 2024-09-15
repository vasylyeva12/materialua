import {Typography} from '@mui/material/Typography';

import React from 'react'

const CustomTypography = (children, variant) => {
  return (
    <Typography 
    variant={variant} 
    align='right' 
    gutterBottom='true'>{children}</Typography>
  )
}

export default CustomTypography