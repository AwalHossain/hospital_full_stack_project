import React from "react";
import Banner from "../Banner/Banner";
import About from "../Body/About/About";
import Doctors from "../Body/Doctors/Doctors";
import MiddlePart from "../Body/MiddlePart/MiddlePart";
import MiddlePoster from "../Body/MiddlePoster/MiddlePoster";
import Package from "../Body/Package/Package";
import Services from "../Body/Services/Services";

const Home = () => {
  return (
    <div>
      {/* Home Display */}
      <Banner></Banner>
      <Doctors></Doctors>
      <Services></Services>
      <About></About>
      <MiddlePart></MiddlePart>
      <MiddlePoster></MiddlePoster>
      <Package></Package>
    </div>
  );
};

export default Home;
