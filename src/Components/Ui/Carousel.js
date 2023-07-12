import React from "react";
import Bgimg from "../bgImages/Wheaton-College-2022-Orientation-Committee.jpg";
import Bgimg1 from "../bgImages/Wheaton-Students-Walking-on-Campus-In-Fall.jpg";
import "../Styles/Carousel.css";

export default function Carousel() {
  return (
    
    <div id="carouselExample" className="carousel slide ">
      <div className="carousel-inner gradient-bg">
        <div className="carousel-item active">
          <div className="position-relative">
            <img src={Bgimg} className="d-block img-fluid" alt="..." />
            <div className="text-overlay">
            Asscociate with us              
            </div>
            <div  className="desc" >
            We want to establish a local presence for you and help students join your institute.</div>
          </div>
          <a href="https://go.wheaton.edu/account/login?r=https%3a%2f%2fgo.wheaton.edu%2fportal%2fstatus" class="button__link" tabindex="0">Get Started </a>

        </div>
        <div className="carousel-item">
          <img src={Bgimg1} className="d-block img-fluid" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}