import React from "react";
import "./Coursesection.scss";
import defImage from "../../Assets/Images/course.png";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useSelector } from "react-redux";

const Coursesection = () => {

  const {products} = useSelector((state) => state.products);
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "This is the description for Course 1.",
      price: "Rs.19.99",
      image: { defImage },
    },
    {
      id: 2,
      title: "Course 2",
      description: "This is the description for Course 2.",
      price: "Rs.24.99",
      image: "course2.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "This is the description for Course 3.",
      price: "Rs.29.99",
      image: "course3.jpg",
    },
    {
      id: 4,
      title: "Course 4",
      description: "This is the description for Course 4.",
      price: "Rs.34.99",
      image: "course4.jpg",
    },
    {
      id: 5,
      title: "Course 5",
      description: "This is the description for Course 5.",
      price: "Rs.39.99",
      image: "course5.jpg",
    },
    {
      id: 6,
      title: "Course 6",
      description: "This is the description for Course 6.",
      price: "Rs.44.99",
      image: "course6.jpg",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-page__left">
        <div className="home-page__title">
          Our Courses Crafted and Taught <span>Tech Titans</span> and Alumni of{" "}
          <span>Success</span>
        </div>
        <div className="home-page__course-cards">
          <div className="home-page__course-row">
            {products.map((course) => (
              <CourseCard
                description={course.description}
                imageUrl={course.image.url}
                title={course.name}
                price={course.price}
                key={course.name}
                id = {course._id}
              />
            ))}
          </div>
          {/* <div className="home-page__course-row">
            {courses.slice(3, 6).map((course) => (
              <CourseCard
                description={course.description}
                imageUrl={defImage}
                title={course.title}
                price={course.price}
                key={course.title}
              />
            ))}
          </div> */}
        </div>
      </div>
      {/* <div className="home-page__right">
        <div id="containers" style={{ "--n": 5, "--d": "5s" }}>
          <div className="items">1</div>
          <div className="items">2</div>
          <div className="items">3</div>
          <div className="items">4</div>
          <div className="items">5</div>
        </div>
      </div> */}
    </div>
  );
};

export default Coursesection;
