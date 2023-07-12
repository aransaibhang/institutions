import React from "react";
import RotatingGlobe from "./Globe.js";
export default function Info() {
  return (
    <div className="mx-4">
    <div className="row">
      <div className="d-flex justify-content-between" >
        <div
          className="col-8 rounded-1 p-1 text-center"
          style={{ height: "60rem" }}
        >
          <RotatingGlobe />
          <h1 className="text-center mt-3 hover-effect"><span>Connecting partners and institutions</span><br/> from across the globe</h1>
         
        </div>
        <div
          className="col-3 border rounded-1 shadow-sm p-1 text-center"
          style={{ height: "6rem" }}
        >

              <div
                className="icon-box aos-init aos-animate "
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <div className="icon">
                <i class="bi bi-card-checklist" style={{color: "#3fcdc7"}}></i>
                </div>
                <h4 className="title">
                  <a href="www.google.com" style={{color: "black", textdecoration: 'none'}}>1000+</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
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
