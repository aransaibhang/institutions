import React from "react";
import "../Styles/Testimonials.css";
import Testimonial1 from "../Icons/testimonials-1.jpg";
import Testimonial2 from "../Icons/testimonials-2.jpg";
import Testimonial3 from "../Icons/testimonials-3.jpg";
import Testimonial4 from "../Icons/testimonials-4.jpg";
import Testimonial5 from "../Icons/testimonials-5.jpg";

export default function Testimonials() {
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
        <div
          className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-672e81010d549842fe"
            aria-live="off"
            style={{
              transform: "translate3d(-3070.67px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  "Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim."
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial1} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index="3"
              role="group"
              aria-label="4 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam."
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial2} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index="4"
              role="group"
              aria-label="5 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial3} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-duplicate-next"
              data-swiper-slide-index="0"
              role="group"
              aria-label="1 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                 " Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper."
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial4} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div
              className="swiper-slide"
              data-swiper-slide-index="1"
              role="group"
              aria-label="2 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial5} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div
              className="swiper-slide"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial3} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index="3"
              role="group"
              aria-label="4 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial4} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index="4"
              role="group"
              aria-label="5 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial5} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index="0"
              role="group"
              aria-label="1 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="1"
              role="group"
              aria-label="2 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial2} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 5"
              style={{ width: "378.667px", marginRight: "20px" }}
            >
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Testimonial3} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              ></span>
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
                aria-current="true"
              ></span>
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
              ></span>
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 4"
              ></span>
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 5"
              ></span>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>

          </div>
        </div>
      </div>
    </section>
  );
}
