import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import Portofolio from './pages/Home'
import ThanksContact from './pages/ThanksContact'
import About from './pages/About';
import UserEdit from './pages/UserEdit';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Portofolio/>,
      errorElement: <ThanksContact/>
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/edit',
      element: <UserEdit />
    }
  ])



  return (
    <>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
    </>
  )
}

export default App
