import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import CommentPage from './components/Feeds.jsx'
import CommentPage2 from './components/Comment.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"",
        element: <App />
      },
      {
        path:"comment",
        element:<CommentPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)