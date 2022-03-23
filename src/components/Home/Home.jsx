import React from "react";
import useAuth from "../../Hooks/useAuth";
import Banner from "../Banner/Banner";
import About from "../Body/About/About";
import Doctors from "../Body/Doctors/Doctors";
import MiddlePart from "../Body/MiddlePart/MiddlePart";
import MiddlePoster from "../Body/MiddlePoster/MiddlePoster";
import Package from "../Body/Package/Package";
import Services from "../Body/Services/Services";
import Navbar from "../Header/Navbar";
import ShowReview from "../Review/ShowReview";

const Home = () => {
  const {user} = useAuth()
  if(user.email){
      fetch(`https://sleepy-peak-11374.herokuapp.com/api/getAdmin/${user.email}`)
      .then(res=> res.json())
      .then(data => console.log(data.isAdmin))

  }
  return (
    <div>
      {/* Home Display */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Doctors></Doctors>
      <Services></Services>
      <About></About>
      <MiddlePart></MiddlePart>
      <MiddlePoster></MiddlePoster>
      <Package></Package>
      <ShowReview></ShowReview>
    </div>
  );
};

export default Home;
