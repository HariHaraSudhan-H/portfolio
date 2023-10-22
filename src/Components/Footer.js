import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{padding:"1rem 0 2rem  0",position:'sticky',top:"95%",height:"10%",}}>
        <Typography sx={{fontSize:"0.75rem",textAlign:'center',color:'#999',fontWeight:"bold",fontFamily:"inherit"}}>
            2023 | HariHaraSudhan
        </Typography>
    </Box>
  )
}

export default Footer