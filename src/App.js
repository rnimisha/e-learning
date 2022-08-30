import React, { useRef } from 'react'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Course from './Components/Course/Course'
import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Service/Service'

const App = () => {

  //ref hooks for nav scroll
  const home = useRef(null)
  const service = useRef(null)
  const course = useRef(null)
  const contact = useRef(null)

  //on click on navigation link
  const scrollToSection= (scrollPage)=>{
    if(scrollPage.current)
    {
      scrollPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
      
  }

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
      <Navbar scrollToSection={scrollToSection} home={home} service={service} course={course} contact={contact}/>
      <Banner opacityVariant={opacityVariant} innerref={home} scrollToSection={scrollToSection} course={course}/>
      <Service  innerref={service}/>
      <Course innerref= {course}/>
      <Contact opacityVariant={opacityVariant} innerref={contact}/>
    </>
  )
}

export default App