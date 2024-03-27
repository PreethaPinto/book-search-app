import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalContext } from "../../GlobalContext"
import Book from "../book/Book";
import Loader from "../loader/Loader";
import classes from './BookList.module.css'
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const navigate = useNavigate();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "Book Not Found"
   }
  });

  if(loading) return <Loader />

  return (
    <>
    <Button type='button' onClick={() => navigate('/')}>
        <i
          className='fa-solid fa-arrow-left'
          style={{ fontSize: '2.5rem', padding: '1rem 2rem' }}
        ></i>
      </Button>
        <Typography variant="h4" className={classes.title}>
          {resultTitle}
          </Typography>
        <Box className={classes.container}>
        <Grid container spacing={3}>
        {
          booksWithCovers.slice(0, 30).map((item) => {
            return (
              <Book {...item} />
            )
          })
        }
        </Grid>
        </Box>
        </>
  )
}

export default BookList