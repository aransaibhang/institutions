import React from 'react'
import Carousel from '../../Components/Ui/Carousel'
import Services from '../../Components/Ui/Services'
import Testimonials from '../../Components/Ui/Testimonials'
import Team from '../../Components/Ui/Team'
export default function Home() {
  return (
    <div><Carousel/>
    <Services/>
    <Testimonials/>
    <Team/></div>
  )
}
