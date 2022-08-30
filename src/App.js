import React from 'react'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Course from './Components/Course/Course'
import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Service/Service'

const App = () => {

  const opacityVariant = {
    initial : {
        opacity : 0
    },
    animate :{
        opacity : 1,
        transition: {
            delay : 0.5,
            duration : 0.5,
        }
    }
  }

  return (
    <>
      <Navbar/>
      <Banner opacityVariant={opacityVariant}/>
      <Service/>
      <Course/>
      <Contact opacityVariant={opacityVariant}/>
    </>
  )
}

export default App