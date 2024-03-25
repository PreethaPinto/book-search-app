import React, { useState, useEffect, createContext, ReactNode, useCallback } from "react";

import { Book } from "./components/interfaces/Book.Interface";

interface AppContextType {
  loading: boolean;
  books: Book[];
  setSearchTerm: (term: string) => void;
  resultTitle: string;
  setResultTitle: (title: string) => void;
}

const URL = "https://openlibrary.org/search.json?title=";

const AppContext = createContext<AppContextType | null>(null);


const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("The Lost World");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [resultTitle, setResultTitle] = useState<string>('');

  const fetchBooks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      console.log('Books:', data);
      
      const { docs } = data; 
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle: Book) => {
          const {key, author_name, cover_i, edition_count, first_publish_year, title, cover_img} = bookSingle;

          return {
            id: key,
            author: author_name,
            edition_count,
            cover_id: cover_i,
            first_publish_year,
            title,
            cover_img
          }
        });
        setBooks(newBooks);

        if(newBooks.length> 1) {
          setResultTitle("Your search result")
        } else {
          setResultTitle("No books found")
        }
      } else {
        setBooks([]);
        setResultTitle("No books found")
      }
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  const contextValue: AppContextType = {
    loading,
    books,
    setSearchTerm,
    resultTitle,
    setResultTitle
  };

  return (
    <AppContext.Provider value={contextValue}>
    {children}
    </AppContext.Provider>)
  }



export { AppContext, AppProvider };
