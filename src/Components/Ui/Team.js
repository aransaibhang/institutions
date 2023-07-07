import React from 'react'
import '../Styles/Team.css'
import Team1 from "../team/team-1.jpg"
import Team2 from "../team/team-2.jpg"
import Team3 from "../team/team-3.jpg"
import Team4 from "../team/team-4.jpg"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  return (
    <div className='container'>
    <div className="row">
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="member aos-init aos-animate" data-aos="fade-up">
        <div className="member-img">
          <img src={Team1} className="img-fluid" alt="" />
          <div className="social">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
        </div>
      </div>
    </div>
    </div></div>
  )
}


