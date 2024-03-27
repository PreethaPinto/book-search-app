import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { Box, Button, Container, Typography } from '@mui/material';
import { BookDescription } from '../../interfaces/BookDescription';
import classes from './BookDetails.module.css';

const URL = 'https://openlibrary.org/works/';

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<BookDescription | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers } = data;
          let descriptionText = 'No description found';

          if (description) {
            if (description.type && description.value) {
              descriptionText = description.value;
            } else {
              descriptionText = description;
            }
          }

          const newBook: BookDescription = {
            description: descriptionText,
            title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : 'Cover Not Found',
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBookDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <>
      <Button type='button' onClick={() => navigate('/book')}>
        <i
          className='fa-solid fa-arrow-left'
          style={{ fontSize: '2.5rem', padding: '1rem 2rem' }}
        ></i>
      </Button>
      <Box className={classes.container}>
        <img src={book?.cover_img} alt='cover image' className={classes['book-detail-img']}/>
        <Box className={classes.content}>
          <Typography variant='h5' className={classes['book-title']}>{book?.title} </Typography>
          <Typography variant='h6' className={classes.description}>{book?.description}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BookDetails;
