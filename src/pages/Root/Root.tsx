import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#B74F6F',
      light: '#e1e1e1'
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});


const Root = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Outlet />
    <Header />
    </ThemeProvider>
    
    </>
  )
}

export default Root