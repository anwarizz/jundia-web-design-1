import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getImage, docSnap } from '../firebase'

export default function About() {

  const [ciu, setCiu] = useState()

  const init = async () => {
    getImage('user/jundia.jpeg').then(e => {
      console.log(e)
      setCiu(e)
    })
  }

  const all = async () => {
    const response = await docSnap('userData')
    console.log(response.data())
  }

  useEffect(() => {
    init()
    all()
  }, [])

  return (
    <>
    <img src={ciu} alt="" />
        <section className='w-full m-auto flex items-center flex-col pt-[100px]'>
            <h1 className='text-white font-bold text-[40px] text-center mb-3'>Sorry, we're doing some work on this page</h1>
            <p className='text-white opacity-35'>Website is coming Soon🙏</p>
            <Link to={-1} className='text-blue-400 mt-20 animate-bounce'>👈 return to previous page</Link>
        </section>
    </>
  )
}
