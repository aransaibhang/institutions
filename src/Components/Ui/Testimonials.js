import React from "react";
import '../Styles/Testimonials.css';
import Testimonial1 from "../Icons/testimonials-1.jpg"
import Testimonial2 from "../Icons/testimonials-2.jpg"
import Testimonial3 from "../Icons/testimonials-3.jpg"
import Testimonial4 from "../Icons/testimonials-4.jpg"
import Testimonial5 from "../Icons/testimonials-5.jpg"

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title aos-init aos-animate" data-aos="zoom-out">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </div>

            <div
            className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
                    >
                     <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 5" style={{ width: '418.667px', marginRight: '20px' }}>
                                <div className="testimonial-item">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                    tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={Testimonial1} className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="4 / 5" style={{ width: '418.667px', marginRight: '20px' }}>
                        <div className="testimonial-item">
                            <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                            minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={Testimonial2} className="testimonial-img" alt="" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="5 / 5" style={{ width: '418.667px', marginRight: '20px' }}>
                        <div className="testimonial-item">
                            <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                            labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={Testimonial3} className="testimonial-img" alt="" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                    </div>
                   
                    
</div>

    </div>

      </div>
    </section>
  );
}
