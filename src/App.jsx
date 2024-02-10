import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import Portofolio from './pages/Home'
import Paralaks from './pages/paralaks'
import ThanksContact from './pages/ThanksContact'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Portofolio/>,
      errorElement: <ThanksContact/>
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
