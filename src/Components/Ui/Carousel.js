import React from "react";
import Bgimg from "../bgImages/college-g5a0824311_1280.jpg";
import Bgimg1 from "../bgImages/yale-university-g91857e91f_1280.jpg";
import "../Styles/Carousel.css";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide ">
      <div className="carousel-inner gradient-bg">
        <div className="carousel-item active">
          <div className="position-relative">
            <img src={Bgimg1} className="d-block img-fluid" alt="..." />
            <div className="text-overlay">
              Associate With Us
              <div style={{ fontSize: "1.2rem", textAlign: "left" }}>
                LOREM, IPSUM DOLOR SIT AMET CONSECTETUR
              </div>
            </div>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Bgimg} className="d-block img-fluid" alt="..." />
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