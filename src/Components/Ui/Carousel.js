import React from "react";
import Bgimg from "../bgImages/Wheaton-College-2022-Orientation-Committee.jpg";
import Bgimg1 from "../bgImages/Wheaton-Students-Walking-on-Campus-In-Fall.jpg";
import "../Styles/Carousel.css";
const carouselData = [
  {
    title: "Associate with us",
    desc: "We want to establish a local presence for you and help students join your institute.",
    bgImg: Bgimg,
    link: "/"
  },
  {
    title: "Associate with us",
    desc: "We want to establish a local presence for you and help students join your institute.",
    bgImg: Bgimg1,
    link: "/"

  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner gradient-bg">
        {carouselData.map((slide, index) => (
          <div className={`carousel-item ${index === activeIndex ? "active" : ""}`} key={index}>
            <div className="position-relative">
              <img src={slide.bgImg} className="d-block img-fluid" alt="..." />
              <div className="text-overlay">{slide.title}</div>
              <div className="desc">{slide.desc}</div>
            </div>
            {slide.link && (
              <a href={slide.link} className="button__link" tabIndex="0">
                Get Started
              </a>
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={handlePrevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={handleNextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;