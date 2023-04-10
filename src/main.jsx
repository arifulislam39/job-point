import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Statistics from './components/Statistics'
import AppliedJob from './components/AppliedJob'

const router =createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:()=> fetch('jobCategory.json')
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path:'/statistics',
        element: <Statistics />
      },
      {
        path: '/appliedJob',
        element:<AppliedJob />
      }
    ]
  }

  // {
  //   path: '/',
  //   element: <App />,
  //   children: [
  //     {

  //       path: '/',
  //       element: <Home />

  //     },
  //     {
  //       path: '/blog',
  //       element: <Blog />
  //     },
  //     {
  //       path:'/statistics',
  //       element:<Statistics />
  //     },
  //     {
  //       path:'/appliedJob',
  //       element:<AppliedJobs />
  //     }
      
  //   ]
  // }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
