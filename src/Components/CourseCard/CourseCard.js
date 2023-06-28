import React from "react";

import "./CourseCard.scss";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

function CourseCard({ imageUrl, title, price, description, id }) {
  console.log(imageUrl);
  return (
    <div className="course-card">
      <img src={imageUrl} alt={imageUrl} className="course-card__image" />
      <div className="course-card__content">
        <div className="course-card__title">{title}</div>
        <div className="course-card__description">{description}</div>
        <div className="course-card__price">{price}</div>
        <Link to={`/course/${id}`} className="course-card__button">
          Learn More &nbsp; <FaBookReader />
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
