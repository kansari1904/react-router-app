import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/contacts'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element ={<Layout />}>
        <Route path="" element ={<Home />} />
        <Route path="about" element ={<About />} />
        <Route path="contact" element ={<Contact />} />
      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
