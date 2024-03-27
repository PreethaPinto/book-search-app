import { Box, Typography } from '@mui/material'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <Box className={classes['footer-container']}>
    <Typography variant='h6' fontSize='14px' className={classes.footer} >BookHunt &copy; 2024 </Typography>
    </Box>
    )
}

export default Footer