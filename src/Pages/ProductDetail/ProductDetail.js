import React, { useEffect } from "react";
import ProductDetailCard from "../../Components/ProductDetailCard/ProductDetailCard";
import { ImSphere } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { BsCameraVideo } from "react-icons/bs";
// import Course from "../../Assets/Images/course.png";

import "./ProductDetail.scss";
import Faqi from "../../Components/Faq/Faqi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetail({ id }));
  }, [dispatch,id]);

  return (
    <div className="ProductDetail">
      <div className="product__detail-hero">
        <div className="product_detail-info">
          <h1>{product.name}</h1>
          <p>{product.longDescription}</p>

          <div className="lanuages__product">
            <span>
              <ImSphere /> Hinglish
            </span>
            <span>
              <BsCameraVideo /> 100+ Lectures
            </span>
          </div>
        </div>

        <div className="product__detail-card">
          <ProductDetailCard
            imgUrl={product?.image?.url}
            price={product.price}
            discountedPrice={product.discountedPrice}
            productInclude={product.courseInclude}
          />
        </div>
      </div>

      <div className="product__details-course__content">
        <h2>What you will learn </h2>
        <div className="course__content-items__container">
          <div className="course__content-items-1">
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
          </div>

          <div className="course__content-items-2">
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
            <p>
              <TiTick /> FlowChart & PseudoCode
            </p>
          </div>
        </div>
      </div>

      <div className="Faq__container">
        <h2>FAQ</h2>
        <Faqi
          question={"ASDHjakshdkjasdhkjashdajdahskj"}
          answer={"dkaskldjasjldklasdjakld"}
          isActive={false}
        />
        <Faqi
          question={"ASDHjakshdkjasdhkjashdajdahskj"}
          answer={"dkaskldjasjldklasdjakld"}
          isActive={false}
        />
        <Faqi
          question={"ASDHjakshdkjasdhkjashdajdahskj"}
          answer={"dkaskldjasjldklasdjakld"}
          isActive={false}
        />
        <Faqi
          question={"ASDHjakshdkjasdhkjashdajdahskj"}
          answer={"dkaskldjasjldklasdjakld"}
          isActive={false}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
