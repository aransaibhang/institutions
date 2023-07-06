import React from "react";
import "../Styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  BiBriefcase,
  BiBook,
  BiCardChecklist,
  BiBinoculars,
  BiGlobe,
} from "react-icons/bi";
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
      <section id="services" className="services">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="zoom-out"
          >
            <h2>Services</h2>
            <p>What we do offer</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div
                className="icon-box aos-init aos-animate card"
                data-aos="zoom-in-left"
              >
                <div className="icon">
                  <BiBook color="#ff689b" />
                </div>
                <h4 className="title">
                  <a>Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div
                className="icon-box aos-init aos-animate card"
                data-aos="zoom-in-left"
                data-aos-delay="100"
              >
                <div className="icon">
                  <BiBook color="#e9bf06" />
                </div>
                <h4 className="title">
                  <a>Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div
                className="icon-box aos-init aos-animate card"
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <div className="icon">
                  <BiBook color="#3fcdc7" />
                </div>
                <h4 className="title">
                  <a>Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5">
              <div
                class="icon-box aos-init aos-animate card"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <div className="icon">
                  <BiBook color="#41cf2e" />
                </div>
                <h4 class="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


