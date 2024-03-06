import React, { useState, useEffect, useContext, createContext, ReactNode, useCallback } from "react";

interface Book {
  // Define the structure of a book
}

interface AppContextType {
  loading: boolean;
  books: Book[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  resultTitle: string;
  setResultTitle: (title: string) => void;
}

const URL = "https://openlibrary.org/search.json?title=";

const AppContext = createContext<AppContextType | undefined>(undefined);


const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("the lost world");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [resultTitle, setResultTitle] = useState<string>('');

  const fetchBooks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      console.log(data);

      // Extract relevant data from 'data' and update state
      // const { docs } = data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  const contextValue: AppContextType = {
    loading,
    books,
    searchTerm,
    setSearchTerm,
    resultTitle,
    setResultTitle
  };

  return (
    <AppContext.Provider value={contextValue}>
    {children}
    </AppContext.Provider>)
  }


export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
