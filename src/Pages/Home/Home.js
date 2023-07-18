import React from "react";
import Carousel from "../../Components/Ui/Carousel";
import Services from "../../Components/Ui/Services";
import Testimonials from "../../Components/Ui/Testimonials";
import Team from "../../Components/Ui/Team";
import Footer from "../../Components/Ui/Footer";
import Info from "../../Components/Ui/Info";
export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "150px" }}>
        <Carousel />
      </div>

      <div className="container">
        <Info />
        <div style={{ marginBottom: "100px" }}>
          <Services />
        </div>
        <div style={{ marginBottom: "150px" }}>
         
          <Testimonials />
        </div>
        <div style={{ marginBottom: "110px" }}>
          <Team />
        </div>
        <Footer />
      </div>
    </div>
  );
}
