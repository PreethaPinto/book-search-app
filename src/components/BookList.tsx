import { useGlobalContext } from "../GlobalContext"
import Book from "./Book";

//https://covers.openlibrary.org/b/id/240727-S.jpg


const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "Book Not Found"
   }
  });

  console.log(booksWithCovers)

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