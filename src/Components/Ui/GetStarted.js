import React from "react";
import "../Styles/Team.css";
import "../Styles/GetStarted.css";

export default function GetStarted() {
  return (
    <>
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
      </div>
      <div
        className="row text-center"
        style={{ backgroundColor: "#003a85", height: "34rem" }}
      >
        <div
          className="container"
          style={{  width: "81rem" }}
        >
          <div className="row">
            <div className="col-4">
              <h1 style={{color:'#fff',marginTop:'3rem',fontSize:'96px',marginLeft:'-90px'}}>01</h1>
            </div>
            <div className="col-4">
              <h1 style={{color:'#fff',marginTop:'3rem',fontSize:'96px',marginLeft:'-90px'}}>02</h1>
            </div>
            <div className="col-4">
              <h1 style={{color:'#fff',marginTop:'3rem',fontSize:'96px',marginLeft:'-90px'}}>03</h1>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{  width: "81rem" }}
        >
          <div className="row">
            <div className="col-4">
              <h2 style={{color:'#fff',marginTop:'-5rem',fontSize:'25px',marginLeft:'-40px'}}>Fill up a form</h2>
            </div>
            <div className="col-4">
              <h2 style={{color:'#fff',marginTop:'-5rem',fontSize:'25px',marginLeft:'5rem'}}>We will connect with you</h2>
            </div>
            <div className="col-4">
              <h2 style={{color:'#fff',marginTop:'-5rem',fontSize:'25px',marginLeft:'1rem'}}>Welcome aboard!</h2>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{  width: "81rem" }}
        >
          <div className="row">
            <div className="col-4">
              <h3 style={{color:'#fff',marginTop:'-8rem',fontSize:'15px',marginLeft:'-1.6rem'}}>Submit required details.</h3>
            </div>
            <div className="col-4">
              <h3 style={{color:'#fff',marginTop:'-8rem',fontSize:'15px',marginLeft:'5.8rem'}}>We will get in touch with you to discuss further.</h3>
            </div>
            <div className="col-4">
              <h3 style={{color:'#fff',marginTop:'-8rem',fontSize:'15px',marginLeft:'1.8rem'}}>Yay! You are an associate now.</h3>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col-6">
              <h3  style={{color:'#fff',marginTop:'-7.5rem',fontSize:'15px',marginLeft:'1rem'}}>What happens after associating with us?</h3>
            </div>
            <div className="col-6">
            <a href='/' className="custom-button" ><span>Get started</span></a>

            </div>
        </div>
      </div>{" "}
    </>
  );
}
