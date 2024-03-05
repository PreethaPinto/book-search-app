import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root/Root'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BookList from './components/BookList/BookList'
import BookDetails from './components/BookDetails/BookDetails'


const router = createBrowserRouter([
  {path: '/', element: <Root />, errorElement:<Error />,
    children:[
      {path:'/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/book', element: <BookList />},
      {path: '/book/:id', element: <BookDetails />},

]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
