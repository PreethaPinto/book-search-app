import {
  Typography,
} from "@mui/material";
import SearchForm from "../components/SearchForm";

const style = {
  minHeight: "45vh",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  background:
    'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url("../../../src/images/lib-img.jpg") center/cover no-repeat',

};

const Home = () => {
  return (
    <>
      <div style={style}>
        <div>
          <Typography variant="h4" color="orange" sx={{margin: '20px'}}>
            Discover Your Next Favorite Read
          </Typography>
        </div>
        <div>
         <SearchForm />
        </div>
      </div>
    </>
  );
};

export default Home;
