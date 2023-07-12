import React from "react";
import RotatingGlobe from "./Globe.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../Styles/Info.css";
export default function Info() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);
  return (
    <div className="mx-4">
      <div className="section-title aos-init aos-animate" data-aos="zoom-out">
        <div className="d-flex align-items-center mt-5">
          <h2>Globe</h2>
          <div
            className="bg-danger col-md-6 col-sm-12 mx-2"
            style={{ height: "1px", width: "120px" }}
          ></div>
        </div>

        <p className="mt-2">
          Connecting partners and institutions from across the globe
        </p>
      </div>
      <div className="row">
        <div className="d-flex justify-content-between">
          <div
            className="col-8 rounded-1 p-1 text-center"
            style={{ height: "60rem", marginTop: "-150px" }}
          >
            <RotatingGlobe />
          </div>
          <div className="col-3   p-1 text-center" style={{ height: "6rem" }}>
            <div
              className="icon-box aos-init aos-animate "
              data-aos="zoom-in-left"
              data-aos-delay="100"
            >
              <h4 className="data mb-3">
                <a
                  href="www.google.com"
                  style={{
                    color: "black",
                    textdecoration: "none",
                    fontSize: "40px",
                  }}
                >
                  1000+
                </a>
              </h4>
              <p
                style={{
                  color: "black",
                  textdecoration: "none",
                  fontSize: "25px",
                }}
              >
                Students
              </p>
            </div>
            <div
              className="icon-box aos-init aos-animate "
              data-aos="zoom-in-left"
              data-aos-delay="300"
            >
              <h4 className="data mb-3">
                <a
                  href="www.google.com"
                  style={{
                    color: "black",
                    textdecoration: "none",
                    fontSize: "40px",
                  }}
                >
                  1000+
                </a>
              </h4>
              <p
                className=""
                style={{
                  color: "black",
                  textdecoration: "none",
                  fontSize: "25px",
                }}
              >
                Students
              </p>
            </div>

            <div
              className="icon-box aos-init aos-animate "
              data-aos="zoom-in-left"
              data-aos-delay="500"
            >
              <h4 className="data mb-3">
                <a
                  href="www.google.com"
                  style={{
                    color: "black",
                    textdecoration: "none",
                    fontSize: "40px",
                  }}
                >
                  1000+
                </a>
              </h4>
              <p
                className=""
                style={{
                  color: "black",
                  textdecoration: "none",
                  fontSize: "25px",
                }}
              >
                Students
              </p>
            </div>
            <div
              className="icon-box aos-init aos-animate "
              data-aos="zoom-in-left"
              data-aos-delay="600"
            >
              <h4 className="data mb-3">
                <a
                  href="www.google.com"
                  style={{
                    color: "black",
                    textdecoration: "none",
                    fontSize: "40px",
                  }}
                >
                  1000+
                </a>
              </h4>
              <p
                className=""
                style={{
                  color: "black",
                  textdecoration: "none",
                  fontSize: "25px",
                }}
              >
                Students
              </p>
            </div>
            <div
              className="icon-box aos-init aos-animate "
              data-aos="zoom-in-left"
              data-aos-delay="800"
            >
              <h4 className="data mb-3">
                <a
                  href="www.google.com"
                  style={{
                    color: "black",
                    textdecoration: "none",
                    fontSize: "40px",
                  }}
                >
                  1000+
                </a>
              </h4>
              <p
                className=""
                style={{
                  color: "black",
                  textdecoration: "none",
                  fontSize: "25px",
                }}
              >
                Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="d-flex justify-content-between ">


      <div className="d-flex flex-column align-items-center" style={{ color: "red" }}>
                <div style={{fontSize:"3.4rem",position:'absolute',left:'2px',color:"red"}}>
                  <i class="bi bi-briefcase"></i>
                </div>
                
                <h4 className="title">
                  <a href="www.google.com" style={{color: "red", textdecoration: 'none'}}>Agents</a>
                </h4>
                <p className="data">
                 200
                </p>
      </div>




      <div className="d-flex flex-column align-items-center" style={{ color: "red" }}>
      <div style={{fontSize:"3.4rem",position:'absolute',left:'339  px',color:"red"}}>
                  <i class="bi bi-briefcase"></i>
                </div>
                
                <h4 className="title">
                  <a href="www.google.com" style={{color: "red", textdecoration: 'none'}}>Agents</a>
                </h4>
                <p className="data">
                 200
                </p>
      </div>
      <div className="d-flex flex-column align-items-center" style={{ color: "red" }}>
      <div style={{fontSize:"3.4rem",position:'absolute',left:'680px',color:"red"}}>
                  <i class="bi bi-briefcase"></i>
                </div>
                
                <h4 className="title">
                  <a href="www.google.com" style={{color: "red", textdecoration: 'none'}}>Agents</a>
                </h4>
                <p className="data">
                 200
                </p>
      </div>
      <div className="d-flex flex-column align-items-center" style={{ color: "red" }}>
        <i className="bi bi-briefcase text-danger fs-2"><span className="fs-5 mx-2 fw-bold">200</span> </i>
        <span className="fw-bold fs-4">Colleges</span>
      </div>
      <div className="d-flex flex-column align-items-center" style={{ color: "red" }}>
        <i className="bi bi-briefcase text-danger fs-2"><span className="fs-5 mx-2 fw-bold">200</span> </i>
        <span className="fw-bold fs-4">Countries</span>
      </div>
    </div> */
}
