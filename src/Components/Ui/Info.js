import React, { useEffect } from "react";
import RotatingGlobe from "./Globe.js";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "../Styles/Info.css";

const infoData = [
  {
    title: "Agents",
    count: 1000,
    delay: 100,
  },
  {
    title: "Students",
    count: 1000,
    delay: 200,
  },
  {
    title: "Applications",
    count: 1000,
    delay: 300,
  },
  {
    title: "Colleges",
    count: 1000,
    delay: 400,
  },
  {
    title: "Countries",
    count: 1000,
    delay: 500,
  },
];

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
        Global connections
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
          <div className="col-3 p-1 text-center" style={{ height: "6rem" }}>
            {infoData.map((item, index) => (
              <div
                className="icon-box aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-delay={item.delay}
                key={index}
              >
                <h4 className="data mb-3">
                  <a
                    href="www.google.com"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "40px",
                    }}
                  >
                    <CountUp end={item.count} duration={5} />
                    +
                  </a>
                </h4>
                <p
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    marginTop:"-15px",
                    marginBottom:'40px'
                    
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
