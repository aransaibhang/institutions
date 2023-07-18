import React from "react";
import "../Styles/Team.css";
import Team1 from "../team/team-1.jpg";
import Team2 from "../team/team-2.jpg";
import Team3 from "../team/team-3.jpg";
import Team4 from "../team/team-4.jpg";

const teamData = [
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    image: Team1,
  },
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    image: Team2,
  },
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    image: Team3,
  },
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    image: Team4,
  },
];

export default function Team() {
  return (
    <div className="container">
      <div className="section-title aos-init aos-animate" data-aos="zoom-out">
        <div className="d-flex align-items-center">
          <h2>Team</h2>
          <div
            className="bg-danger col-md-6 col-sm-12 mx-2"
            style={{ height: "1px", width: "120px" }}
          ></div>
        </div>
        <p>Our Hardworking Team</p>
      </div>

      <div className="row text-center">
        {teamData.map((teamMember, index) => (
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
            <div className="member aos-init aos-animate team rounded-3" data-aos="fade-up">
              <div className="member-img">
                <img src={teamMember.image} className="img-fluid" alt="" />
                <div className="social">
                  <a href="/">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>{teamMember.name}</h4>
                <span>{teamMember.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
