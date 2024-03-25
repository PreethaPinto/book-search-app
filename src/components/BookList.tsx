import { useGlobalContext } from "../GlobalContext"
import Book from "./Book";
import Loader from "./Loader";

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "Book Not Found"
   }
  });

  if(loading) return <Loader />

  return (
   <section>
    <div>
      <div>
        <h2>
          {resultTitle}
        </h2>
      </div>
      <div>
        {
          booksWithCovers.slice(0, 30).map((item) => {
            return (
              <Book {...item} />
            )
          })
        }
      </div>
    </div>
   </section>
  )
}

export default BookList