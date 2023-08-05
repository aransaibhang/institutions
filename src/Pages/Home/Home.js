import React from "react";
import Carousel from "../../Components/Ui/Carousel";
import Services from "../../Components/Ui/Services";
import Testimonials from "../../Components/Ui/Testimonials";
import Team from "../../Components/Ui/Team";
import Work from "../../Components/Ui/Work";
import Footer from "../../Components/Ui/Footer";
import Info from "../../Components/Ui/Info";
import GetStarted from "../../Components/Ui/GetStarted";
import WorkFeatures from "../../Components/Ui/WorkFeatures";
export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "150px" }}>
        <Carousel />
      </div>
      <div style={{ marginBottom: "110px" }}>
          <WorkFeatures/>
        </div>
      <div className="container">
        <Info />
        <div style={{ marginBottom: "100px" }}>
          <Services />
        </div>
        <div style={{ marginBottom: "150px" }}>
         
          <Testimonials />
        </div>
        <div style={{ marginBottom: "150px" }}>
         
         <Work />
       </div>
       
        
      </div>
      <div style={{ marginBottom: "110px" }}>
          <GetStarted/>
        </div>
    </div>
  );
}
