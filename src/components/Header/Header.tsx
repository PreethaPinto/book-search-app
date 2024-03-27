import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'


const Header = () => {

  return (
    <>
      <AppBar
        color='primary'
        position='static'
        sx={{ paddingRight: '50px', paddingLeft: '50px' }}
      >
        <Toolbar>
          <Link to='/' className={classes.home}>
            <Typography variant='h6'>BOOKHUNT</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
