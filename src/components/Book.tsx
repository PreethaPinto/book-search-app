import {Link} from 'react-router-dom';

interface BookProps {
  cover_img: string;
  id: string;
  title: string;
  author: string[];
  edition_count: number;
  first_publish_year: number;
}


const Book = ({cover_img, id, title, author, edition_count, first_publish_year}: BookProps) => {
  return (
    <>
    <img src={cover_img} alt="cover" />
    <div>
    <Link to={`/book/${id}`} {...Book} >
      <h3>{title}</h3>
      </Link>
      </div>
      <div>
        <h4>Author: </h4>
        <span>{author}</span>
      </div>
      <div>
        <h4>Total Editions:</h4>
        <p> {edition_count}</p>
      </div>
      <div>
        <h4>First Publish Year: </h4>
        <p>{first_publish_year}</p>
      </div>
    </>
    )
}

export default Book