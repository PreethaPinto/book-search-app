import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      
    },
    secondary: {
      main: '#A9A587',
    },
  },
});


const Root = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header />
    <Outlet />
    <Footer />
    </ThemeProvider>
    
    </>
  )
}

export default Root