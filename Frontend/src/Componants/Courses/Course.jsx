import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Courses from '../Courses'

const Course = () => {
  return (
    <div>
             <Navbar />
             <div className='min-h-screen'>

             <Courses />
             </div>
             <Footer />
    </div>
  )
}

export default Course
