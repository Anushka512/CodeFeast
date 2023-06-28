import React from 'react';
import './Middle.scss';
// import Banner from "../../Assets/Images/Banner.png";
// import TestimonialCard from "../../Components/Testimonial/Testimonial";
import Card from "../../Components/Cards/Cards";
import icon from "../../Assets/Images/icon.png";
import icon1 from "../../Assets/Images/icon1.png";
import icon2 from "../../Assets/Images/icon2.png";


const HomePage = () => {

  return (
    <div className="home1-page">
    {/* <section className="testimonials-section">
      <h2>Hear What My Clients Say About Me</h2>
      <div className="testimonials">
        <TestimonialCard
          image={Banner}
          name="John Doe"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisi quis velit volutpat condimentum. Sed convallis ligula ut malesuada maximus."
          rating="4.5"
        />
        <TestimonialCard
          image={Banner}
          name="Jane Smith"
          content="Ut ac turpis id mi consequat egestas a vitae nisl. Nunc dapibus neque ac tincidunt placerat. Integer convallis neque sit amet ante fringilla vestibulum."
          rating="5.0"
        />
        <TestimonialCard
          image={Banner}
          name="John Doe"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisi quis velit volutpat condimentum. Sed convallis ligula ut malesuada maximus."
          rating="4.5"
        />
        <TestimonialCard
          image={Banner}
          name="John Doe"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisi quis velit volutpat condimentum. Sed convallis ligula ut malesuada maximus."
          rating="4.5"
        />
      </div>
    </section> */}
    <section className="custom-section">
      <div className="centered-paragraphs">
        <p style={{fontSize:"17px",color:"grey"}}>How does it work?</p>
      </div>
      <h2 className="section-heading">Are you ready to transform your life?</h2>
      <div className="centered-paragraphs">
        <p style={{marginBottom:"50px"}}>"Unlock the Best: Our Courses Crafted and Taught by Tech Titans, Alumni of Success!"</p>
      </div>
      <div className="card-container">
        <Card
          logo={icon}
          heading="DSA Mastery"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          logo={icon1}
          heading="Mock Interviews"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          logo={icon2}
          heading="Front End with React"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          logo={icon1}
          heading="MERN stack development"
          content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </section>
  </div>
  );
};

export default HomePage;
