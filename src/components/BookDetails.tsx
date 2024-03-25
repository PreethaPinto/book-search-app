import { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import Loader from "./Loader";

const URL = 'https://openlibrary.org/works/';

interface BookDescription {
  description: string;
  title: string;
  cover_img: string;
  subject_places: string;
  subject_times: string;
  subjects: string;  
}

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<BookDescription | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`)
        const data = await response.json();

        if (data) {
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook: BookDescription = {
            description: description ? description.value : 'No description found',
            title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : 'Cover Not Found',
            subject_places: subject_places ? subject_places.join(',') : 'No subject places found',
            subject_times: subject_times ? subject_times.join(',') : 'No subject times found',
            subjects: subjects ? subjects.join(', ') : 'No subjects found'
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
        } catch(error) {
        console.log(error);
        setLoading(false);
      }
    }
      getBookDetails();

}, [id]);

if(loading) return <Loader />


  return (
    <>
    <button type="button" onClick={() => navigate('/book')}>
    Go Back
    </button>
    <div>
      <img src={book?.cover_img} alt="cover image" />
    </div>
    <div>{book?.title}</div>
    <div>{book?.description}</div>
    <div>
      <p>Subject Places: </p>
      {book?.subject_places}
      </div>
      <div>
      <p>Subject Times: </p>
      {book?.subject_times}
      </div>
      <div>
      <p>Subject: </p>
      {book?.subjects}
      </div>
    </>
  )
}

export default BookDetails;