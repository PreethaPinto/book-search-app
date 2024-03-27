import {
  Box,
  Typography,
} from "@mui/material";
import SearchForm from "../../components/searchForm/SearchForm";
import classes from './Home.module.css'

const Home = () => {
  return (
    <>
      <Box className={classes.container}>
          <Typography variant="h4" color="orange" className={classes.text} >
            Discover Your Next Favorite Read
          </Typography>
         <SearchForm />      
      </Box>
    </>
  );
};

export default Home;
