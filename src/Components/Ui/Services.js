import React, { useEffect } from "react";
import "../Styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    icon: "bi bi-briefcase briefcase",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: "bi bi-book",
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    iconColor: "#e9bf06",
  },
  {
    icon: "bi bi-card-checklist",
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    iconColor: "#3fcdc7",
  },
  {
    icon: "bi bi-binoculars",
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    iconColor: "#41cf2e",
  },
  {
    icon: "bi bi-globe",
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    iconColor: "#d6ff22",
  },
  {
    icon: "bi bi-clock",
    title: "Eiusmod Tempor",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    iconColor: "#4680ff",
  },
];

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
                    <i className={service.icon} style={{ color: service.iconColor }}></i>
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
