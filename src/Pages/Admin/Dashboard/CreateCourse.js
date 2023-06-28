import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./createCourse.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import { RxCross1 } from "react-icons/rx";
import SideBar from "../Sidebar/Sidebar";
import Loader from "../../../Components/Loader/Loader";
import {
  createProduct,
  resetStatusError,
} from "../../../Redux/slices/productSlice";

function CreateCourse() {
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.products);
  const { isLoading } = useSelector((state) => state.app);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [courseInclude, setCourseInclude] = useState([]);
  const [includeName, setInclueName] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const dispatch = useDispatch();

  const createCourseImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Product Created Succesfully",
        icon: "success",
      });
      navigate("/admin");
      dispatch(resetStatusError());
    }
    if (error) {
      swal2.fire({
        title: "Error",
        text: error,
      });
      dispatch(resetStatusError());
    }
  }, [success,dispatch]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        description,
        longDescription,
        price,
        discountedPrice,
        img,
        courseInclude
      })
    );
  };

  const addCourseInclude = (e) => {
    const newField = {
      id: new Date(),
      includeName,
    };
    const newArr = [...courseInclude, newField];
    setCourseInclude(newArr);
    setInclueName("");
  };

  
  const removeInclude = (id) => {
    const newArr = courseInclude.filter((item) => item.id !== id);
    setCourseInclude(newArr);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <Fragment>
          {isLoading ? (
            <Loader />
          ) : (
            <section id="add_product_area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="add_product_wrapper">
                      <h4>Add Course</h4>
                      <form
                        className="add_product_form"
                        onSubmit={handleSubmitForm}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="image-input">
                              {img && (
                                <img
                                  src={img}
                                  className="image-preview"
                                  alt="img"
                                />
                              )}
                              <input
                                onChange={createCourseImage}
                                type="file"
                                accept="image/*"
                                id="imageInput"
                              />
                              <label
                                htmlFor="imageInput"
                                className="image-button"
                              >
                                <i className="fa fa-image"></i>Choose image
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Course Name
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product_name"
                                className="form-control"
                                placeholder="Category Title here"
                                required
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Course Price
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                id="product_name"
                                className="form-control"
                                placeholder="Category Price here"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Discount Price
                              </label>
                              <input
                                type="number"
                                id="product_name"
                                className="form-control"
                                placeholder="Product Discount Price"
                                required
                                onChange={(e) =>
                                  setDiscountedPrice(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Course Include
                                <span className="text-danger"> [Maximum 7 Fields]*</span>
                              </label>
                              <input
                                type="text"
                                id="product_price"
                                className="form-control"
                                value={includeName}
                                placeholder="Include Name"
                                onChange={(e) => setInclueName(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Product price  */}

                          {/* add price and weight btn  */}
                          <div className="col-lg-3 add_price-btn ">
                            <div className="form-group">
                              <button
                                className="theme-btn-one  btn_sm"
                                onClick={addCourseInclude}
                              >
                                Add Course Include
                              </button>
                            </div>
                          </div>

                          <div className="col-lg-12 add_price-screen ">
                            {courseInclude?.map((item, index) => (
                              <span key={index}>
                                {item.includeName}
                                <RxCross1
                                  onClick={() => removeInclude(item.id)}
                                />
                              </span>
                            ))}
                          </div>

                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Course Description
                                <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                required
                                placeholder="Course Description Here"
                                col={8}
                                rows={8}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="fotm-group">
                              <label htmlFor="product_name">
                                Long Description
                                <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                required
                                placeholder="Course Description Here"
                                col={8}
                                rows={8}
                                onChange={(e) =>
                                  setLongDescription(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="btn_right_table">
                              <button
                                className="theme-btn-one bg-black btn_sm"
                                type="submit"
                              >
                                Add Course
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Fragment>
      </div>
    </Fragment>
  );
}

export default CreateCourse;
