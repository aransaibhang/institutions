import React, { useState, useEffect } from "react";
import "../Styles/Testimonials.css";
import Testimonial1 from "../Icons/testimonials-1.jpg";
import Testimonial2 from "../Icons/testimonials-2.jpg";
import Testimonial3 from "../Icons/testimonials-3.jpg";
import Testimonial4 from "../Icons/testimonials-4.jpg";
import Testimonial5 from "../Icons/testimonials-5.jpg";

export default function Testimonials() {
  const testimonialData = [
    {
      name: "Saul Goodman",
      image: Testimonial1,
      designation: "Ceo & Founder",
      description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Sara Wilsion",
      image: Testimonial2,
      designation: "Operator",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Jena Karlis",
      image: Testimonial3,
      designation: "Designer",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Sara Wilsion",
      image: Testimonial4,
      designation: "Ceo & Founder",
      description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      image: Testimonial5,
      designation: "Operator",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 2;

  useEffect(() => {
    if (testimonialData.length > 4) {
      const interval = setInterval(() => {
        if (endIndex < testimonialData.length) {
          setStartIndex(startIndex + 1);
        } else {
          setStartIndex(0);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [startIndex]);

  useEffect(() => {
    if (startIndex > testimonialData.length - 3) {
      setStartIndex(0);
    }
  }, [startIndex, testimonialData.length]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title aos-init aos-animate" data-aos="zoom-out">
          <div className="d-flex align-items-center">
            <h2>Testimonials</h2>
            <div
              className="bg-danger col-md-6 col-sm-12 mx-2"
              style={{ height: "1px", width: "120px" }}
            ></div>
          </div>
          <p>What they are saying about us</p>
        </div>

        <div className="row">
          {testimonialData.slice(startIndex, endIndex + 1).map((td, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="border rounded-1 shadow-sm p-4 text-center" style={{width:"25rem",height:"23rem"}}>
                  <div>
                    <p >
                      <i className="bx bxs-quote-alt-left quote-icon-left"  ></i>
                      {td.description}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                  <div>
                    <img
                      src={td.image}
                      alt={td.image}
                      className="rounded-circle"
                      style={{ width: "90px", marginTop :"1.2rem",marginBottom:"0.3rem"}}
                    />
                  </div>
                  <div className="h3">{td.name}</div>
                  <div className="h4">{td.designation}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-center align-items-center my-3">
          {testimonialData.map((_, index) => (
            <div
              key={index}
              className={`border border-dark ${
                index === startIndex  ? "bg-dark" : ""
              } p-1 rounded-circle me-1`}
              style={{ width: "4px" }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
