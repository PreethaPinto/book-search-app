import { Search } from "@mui/icons-material"
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material"
import { Form} from "react-router-dom"

const SearchForm = () => {
  return (
    <Form>
    <OutlinedInput
      id="outlined-weight"
      placeholder="Search for a book..."
      endAdornment={
        <InputAdornment position="end">
          <IconButton sx={{ backgroundColor: "rgb(241, 227, 211)" }}>
            <Search sx={{ color: "rgb(0,0,0)" }} />
          </IconButton>
        </InputAdornment>
      }
      sx={{
        width: "400px",
        background: "rgb(241, 227, 211)",
        height: "40px",
        margin: '20px'}}              
    />
  </Form>
  )
}

export default SearchForm