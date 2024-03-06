import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import { AppProvider } from './context'


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
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
    
  </React.StrictMode>,
)
