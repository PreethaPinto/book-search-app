import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'
import Home from './pages/home/Home'
import BookList from './components/bookList/BookList'
import BookDetails from './components/bookDetails/BookDetails'
import Favorites from './components/Favorites'
import { AppProvider } from './context'


const router = createBrowserRouter([
  {path: '/', element: <Root />, errorElement:<Error />,
    children:[
      {path:'/', element: <Home />},
      {path: '/book', element: <BookList />},
      {path: '/book/:id', element: <BookDetails />},
      {path: '/favorites', element: <Favorites />}

]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
    
  </React.StrictMode>,
)
