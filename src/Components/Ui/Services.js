import React from "react";
import "../Styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);

  return (
    <>
      <section id="services" className="services px-3">
        <div>
          <div
            className="section-title aos-init aos-animate"
            data-aos="zoom-out"
          >
            <div className="d-flex align-items-center">
              <h2>Services</h2>
              <div
                className="bg-danger col-md-6 col-sm-12 mx-2"
                style={{ height: "1px", width: "120px" }}
              ></div>
            </div>

            <p>What we do offer</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
              >
                <div className="icon">
                  <i class="bi bi-briefcase briefcase"></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
                data-aos-delay="100"
              >
                <div className="icon">
                <i class="bi bi-book" style={{color: "#e9bf06"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <div className="icon">
                <i class="bi bi-card-checklist" style={{color: "#3fcdc7"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <div className="icon">
                <i class="bi bi-binoculars" style={{color:"#41cf2e"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
                data-aos-delay="400"
              >
                <div className="icon">
                <i class="bi bi-globe" style={{color: "#d6ff22"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5">
              <div
                className="icon-box aos-init aos-animate card-service"
                data-aos="zoom-in-left"
                data-aos-delay="500"
              >
                <div className="icon">
                <i class="bi bi-clock" style={{color: "#4680ff"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
