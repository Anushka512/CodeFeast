import React from "react";
import "./ProductDetailCard.scss";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
function ProductDetailCard({ price, imgUrl, productInclude,discountedPrice }) {
  return (
    <div className="ProductDetailCard">
      <div className="productdetail__image">
        <img src={imgUrl} alt="Course" />
      </div>

      <div className="prouct-info">
        <div className="productdetail__price">
          <h4>₹ {price}</h4>
          <h4>
          ₹ <del>{discountedPrice}</del>
          </h4>
        </div>

        <div className="course__btn-box">
          <Link className="course__btn" to="/contact">
            Connect With Mentor
          </Link>
        </div>

        <div className="course__include">
          <h3>This Course Includes :</h3>

          <div className="product__content">
            {productInclude?.map((item, index) => (
              <p key={index}>
                <span>
                  <BiRightArrow />
                </span>
                {item.includeName}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
