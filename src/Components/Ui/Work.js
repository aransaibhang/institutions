import React from "react";
import "../Styles/Team.css";

import work1 from "../Icons/work1.jpg";
import work2 from "../Icons/work2.jpg";
import work3 from "../Icons/work3.jpg";
import work4 from "../Icons/work4.jpg";
const teamData = [
  {
    name: "Diverse Students",
    description:
      "Diversify recruitment by targeting students of diverse potential. ",
    image: work1,
  },
  {
    name: "Association",
    description: "Association of partners with similar interests.",
    image: work2,
  },
  {
    name: "Transparency",
    description:
      "Transparency verification of student documents and information.",
    image: work3,
  },
  {
    name: "Help Students",
    description: "Diverse campuses.Recognise all eligible students.",
    image: work4,
  },
];

export default function Work() {
  return (
    <div className="container">
      <div className="section-title aos-init aos-animate" data-aos="zoom-out">
        <div className="d-flex align-items-center">
          <h2>Working</h2>
          <div
            className="bg-danger col-md-6 col-sm-12 mx-2"
            style={{ height: "1px", width: "120px" }}
          ></div>
        </div>
        <p>How It Works</p>
      </div>

      <div className="row text-center">
        {teamData.map((teamMember, index) => (
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            key={index}
          >
            <div
              className="member aos-init aos-animate team rounded-3"
              data-aos="fade-up"
            >
              <div className="member-img">
                <img src={teamMember.image} className="img-fluid" alt="" />
              </div>
              <div className="member-info" style={{ marginTop: "25px" }}>
                <h4>{teamMember.name}</h4>
                <span>{teamMember.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
