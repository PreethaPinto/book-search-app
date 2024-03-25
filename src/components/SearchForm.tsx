import { Search } from "@mui/icons-material"
import { OutlinedInput, InputAdornment, Button } from "@mui/material"
import { useGlobalContext } from "../GlobalContext"
import { Form, useNavigate} from "react-router-dom"
import { useEffect, useRef } from "react"

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect executed");
    searchText.current?.focus();
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.current) {
       const inputValue = searchText.current.value.trim();
       console.log(searchText.current)
       console.log(inputValue)
       if (/\W|\s/.test(inputValue)) {
        setSearchTerm('The lost world')
         setResultTitle('Please enter something...');

       } else {
        setSearchTerm(searchText.current.value);
      
    }
  
    navigate('/book');
  }
}

  return (
    <Form onSubmit={handleSubmit}>
    <OutlinedInput
      id="outlined-weight"
      inputRef={searchText}
      endAdornment={
        <InputAdornment position="end">
          <Button type='submit'  sx={{ backgroundColor: "rgb(241, 227, 211)",  }}>
            <Search sx={{ color: "rgb(0,0,0)" }} />
          </Button>
        </InputAdornment>
      }
      sx={{
        width: "1000px",
        background: "rgb(241, 227, 211)",
        height: "60px",
        borderRadius: '10px',
        margin: '20px'}}              
    />
  </Form>
  )
}

export default SearchForm
