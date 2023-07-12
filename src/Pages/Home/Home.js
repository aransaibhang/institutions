import React from 'react'
import Carousel from '../../Components/Ui/Carousel'
import Services from '../../Components/Ui/Services'
import Testimonials from '../../Components/Ui/Testimonials'
import Team from '../../Components/Ui/Team'
import Footer from '../../Components/Ui/Footer'
import Info from '../../Components/Ui/Info'
export default function Home() {
  return (
    <div><Carousel/>
    <Info/>
<div className='container' >

  <div style={{marginBottom:"200px"}}>
    
    
    <Services/></div>
  <div style={{marginBottom:"200px"}}> <Testimonials/></div>
  <div style={{marginBottom:"200px"}}><Team/></div>
    <Footer/></div>
    </div>
  )
}
