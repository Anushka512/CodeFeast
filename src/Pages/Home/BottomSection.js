import React from "react";
import "./BottomSection.scss";
import company from "../../Assets/Images/Company logo.svg";
import company1 from "../../Assets/Images/Company logo (1).svg";
import Banner from "../../Assets/Images/Banner.png";
import TestimonialCard from "../../Components/Testimonial/Testimonial";

function BottomSection() {
  return (
    <div className="BottomSection">
      <section className="company-logos-section">
        <h2 className="centered-heading">
          From startups to the world’s largest companies
        </h2>
        <div className="company-logos">
          <img src={company} alt="Company Logo 1" />
          <img src={company1} alt="Company Logo 2" />
          <img src={company} alt="Company Logo 3" />
          <img src={company} alt="Company Logo 4" />
          <img src={company} alt="Company Logo 5" />
        </div>
      </section>

      <section className="testimonials-section">
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
      </section>
    </div>
  );
}

export default BottomSection;
