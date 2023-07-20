import React from 'react';
import '../Styles/WorkFeatures.css';
import Featureimg from '../bgImages/features1.png';
import { RiGpsLine,RiBodyScanLine,RiSunLine,RiStore2Line } from 'react-icons/ri'; // Import the specific icon from react-icons library
import 'remixicon/fonts/remixicon.css';

export default function WorkFeatures() {
  const workFeaturesData = [
    {
      title: "Diverse Students",
      icon: <RiGpsLine />, // Icon for the first section
      description: [
        "Diversify recruitment by targeting students of diverse potential.",
        "Attract right students from all backgrounds.",
        "Get access to thousands of student applications.",
      ],
      image: Featureimg,
    },
    {
      title: "Association",
      icon: <RiBodyScanLine />, // Icon for the second section
      description: [
        "Association of partners with similar interests.",
        "Collaborate and team work.",
        "Increase the partner and institute network.",
      ],
      image: Featureimg,
    },
    {
      title: "Transparency",
      icon: <RiSunLine />, // Icon for the third section
      description: [
        "Transparency verification of student documents and information",
        "Communication with absolute transparency and in all formats.",
      ],
      image: Featureimg,
    },
    {
      title: "Help Students",
      icon: <RiStore2Line />, // Icon for the fourth section
      description: ["Diverse campuses.", "Recognise all eligible students."],
      image: Featureimg,
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <ul className="nav nav-tabs row d-flex" role="tablist">
          {workFeaturesData.map((item, index) => (
            <li
              key={index}
              className="nav-item col-3 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              role="presentation"
            >
              <a
                className={`nav-link ${index === 0 ? "active show" : ""}`}
                data-bs-toggle="tab"
                href={`#tab-${index + 1}`}
                aria-selected={index === 0 ? "true" : "false"}
                role="tab"
              >
                <div className='titleicon'>{item.icon}</div> {/* Icon is now taken from the data array */}
                <h4 className="d-none d-lg-block">{item.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content aos-init aos-animate" data-aos="fade-up">
          {workFeaturesData.map((item, index) => (
            <div
              key={index}
              className={`tab-pane ${index === 0 ? "active show" : ""}`}
              id={`tab-${index + 1}`}
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3 className="mb-5">{item.title}</h3>
                  <div className="check-double-icon-list">
                    {item.description.map((line, idx) => (
                      <div key={idx} className="check-double-icon-item mb-4">
                        <i className="ri-check-double-line"></i>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
