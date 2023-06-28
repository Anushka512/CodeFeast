import React, { useEffect } from "react";
import "./Home.scss";
import "./Middlesection.scss";
import HeroSection from "./Herosection";
import Middlesection from "./Middlesection";
import CourseSection from "./Coursesection";
// import CustomerReviewSection from './CustomerReviewSection';
import SkillsSection from "./Skillsection";
import BottomSection from "./BottomSection";
import { setNavFooter } from "../../Redux/slices/appConfigSlice";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/slices/productSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavFooter(true));
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <HeroSection />
      <Middlesection />
      <SkillsSection />
      <CourseSection />
      <BottomSection />
      {/* <CustomerReviewSection/> */}
    </div>
  );
}

export default Home;
