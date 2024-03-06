import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material";
import Header from "../components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C6E71',
      
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
    </ThemeProvider>
    
    </>
  )
}

export default Root