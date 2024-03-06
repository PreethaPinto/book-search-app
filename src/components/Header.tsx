import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { NavLink } from "react-router-dom";

const navStyles = {
  variant: "h6",
  fontSize: "18px",
  textDecoration: "none",
  color: "#fff",
  "&:hover": { color: "grey" },
  "&.active": { color: "orange" },
};

const homeNavStyles = {
  ...navStyles,
  marginRight: "20px",
};

const Header = () => {
  const theme = useTheme();
  const matched = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        color="primary"
        position="static"
        sx={{ paddingRight: "50px", paddingLeft: "50px" }}
      >
        <Toolbar>
          {matched ? (
            <>
              <Typography variant="h6">BOOKHUNT</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography variant="h5">BOOKHUNT</Typography>
              <Container
                maxWidth={false}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <List sx={{ display: "flex" }}>
                  <ListItem component={NavLink} to="/" sx={homeNavStyles}>
                    HOME
                  </ListItem>
                  <ListItem component={NavLink} to="/about" sx={navStyles}>
                    ABOUT
                  </ListItem>
                </List>
              </Container>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
