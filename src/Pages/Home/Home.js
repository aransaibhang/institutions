import React from 'react'
import Carousel from '../../Components/Ui/Carousel'
import Services from '../../Components/Ui/Services'
import Testimonials from '../../Components/Ui/Testimonials'
import Team from '../../Components/Ui/Team'
import Footer from '../../Components/Ui/Footer'
export default function Home() {
  return (
    <div><Carousel/>
<div className='container' style={{paddingLeft:"7rem",paddingRight:"7rem"}}><Services/>
    <Testimonials/>
    <Team/>
    <Footer/></div>
    </div>
  )
}
