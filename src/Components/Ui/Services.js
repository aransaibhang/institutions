import React, { useEffect } from "react";
import "../Styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from '../Icons/icon1.svg'
import icon2 from '../Icons/icon2.svg'
import icon3 from '../Icons/icon3.svg'
import icon4 from '../Icons/icon4.svg'
import icon5 from '../Icons/icon5.svg'
import icon6 from '../Icons/icon6.svg'


export default function Services() {
  const servicesData = [
    {
      Image: icon1,
      title: "Provide global visibility",
    
    },
    {
      Image: icon2,
      title: "Access to student base from all over the globe",
     
      iconColor: "#e9bf06",
    },
    {
      Image: icon3,
      title: "Access to highly advanced tools and technology",
      
      iconColor: "#3fcdc7",
    },
    {
      Image: icon4,
      title: "Maintain transparency",
     
      iconColor: "#41cf2e",
    },
    {
      Image: icon5,
      title: "Support to address your concerns",
     
      iconColor: "#d6ff22",
    },
    {
      Image: icon6,
      title: "Provide insights",
      
      iconColor: "#4680ff",
    },
  ];
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
            {servicesData.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                style={{marginBottom:"3rem"}}
              >
                <div
                  className="icon-box aos-init aos-animate card-service"
                  data-aos="zoom-in-left"
                  data-aos-delay={index * 100}
                >
                  <div className="icon">
                    
                    <img src={service.Image}></img>
                  </div>
                  <h4 className="title">
                    <a
                      href="www.google.com"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {service.title}
                    </a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
