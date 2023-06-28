import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./SessionLink.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SideBar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import { createFormLink, setStatusResponse } from "../../../Redux/slices/utilsSlice";

function SessionLink() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.util);

  const [link, setLink] = useState("");

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Successfull",
        text: "Link Update/Create Succesfully",
      });
      dispatch(setStatusResponse(false));
    }
    if (error) {
      Swal.fire({
        title: "error",
        text: error,
      });
      dispatch(setStatusResponse(false));
    }
  }, [success, error]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createFormLink({
        link,
      })
    );
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        {/* {isLoading ? (
          <Loader />
        ) : ( */}
        <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>MENTORSHIP SESSION LINK</h4>
                  <form
                    className="add_product_form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_name">
                            FORM LINK
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_name"
                            className="form-control"
                            placeholder="Session Link here"
                            required
                            onChange={(e) => setLink(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Set Link
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
        {/* )} */}
      </div>
    </Fragment>
  );
}

export default SessionLink;
