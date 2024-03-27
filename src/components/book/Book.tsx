import { Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Book.module.css';

interface BookProps {
  cover_img: string;
  id: string;
  title: string;
  author: string[];
  edition_count: number;
  first_publish_year: number;
}

const Book = ({
  cover_img,
  id,
  title,
  author,
  edition_count,
  first_publish_year,
}: BookProps) => {
  return (
    <>
    <Box sx={{margin:'auto'}}>
        <Paper elevation={3} className={classes.paper}>
          <Box className={classes.container}>
            <Box className={classes['image-container']}>
              <Link
                to={`/book/${id}`}
                {...Book}
                className={classes['image-link']}
              >
                {cover_img ? (
                  <img src={cover_img} alt='cover image' className={classes['book-image']}/>
                ) : (
                  <img src='../../../src/images/cover_not_found.jpg' className={classes['book-image']}/>
                )}
              </Link>
            </Box>
            <Box className={classes['content-box']}>
              <Typography variant='h6'>
                <Link to={`/book/${id}`} {...Book} className={classes.link}>
                  {title}
                </Link>
              </Typography>
              <Typography variant='h6'  sx={{fontSize: '1rem'}}>Author: {author}</Typography>
              <Typography variant='h6'  sx={{fontSize: '1rem'}}>
                Total Editions: {edition_count}
              </Typography>
              <Typography variant='h6' sx={{fontSize: '1rem'}}>
                First Publish Year:{first_publish_year}
              </Typography>
            </Box>
          </Box>
        </Paper>
        </Box>
      </>
  );
};

export default Book;
