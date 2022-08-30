import React from 'react'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Course from './Components/Course/Course'
import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Service/Service'


const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Course/>
      <Contact/>
    </>
  )
}

export default App