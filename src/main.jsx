import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout';

import Country from './Countries/Country.jsx'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Countries from './Countries/Countries.jsx';
import Details from './Details/Details';





const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/countries/',
        element:<Countries></Countries>,
        loader :()=>fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: "/countries/:cca2",
        loader:({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.cca2}`),
        element:<Details></Details>
      },

      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/header',
        element:<Header></Header>
      },
      {
        path:'/country',
        element: <Country></Country>,
      },

      {
        path:'/footer',
        element: <Footer></Footer>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
