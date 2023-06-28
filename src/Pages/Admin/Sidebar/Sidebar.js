import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBox,
  faList,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedoutUser } from "../../../Redux/slices/user";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(getLoggedoutUser());
  };

  const {isAuthenticated} = useSelector((state) => state.user);

  // useEffect(() => {
  //   if(!isAuthenticated){
  //     Swal.fire({
  //       title : "Logged Out Succesfully"
  //     })
  //     navigate("/");
  //   }
  // },[isAuthenticated])

  return (
    <div className="sidebar">
      <ul>
        <Link to="/admin" style={{ color: "white" }}>
          <li className="option active">
            <span>
              <FontAwesomeIcon icon={faChartBar} />{" "}
            </span>
            Dashboard
          </li>
        </Link>

        <Link to="/admin/courses" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            All Courses
          </li>
        </Link>

        <Link to="/admin/sessionlink" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Session Link
          </li>
        </Link>

        <Link to="/admin/course/create" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faBox} />
            </span>
            Create Course
          </li>
        </Link>

        <Link to="/admin/mentorlink" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Form Link
          </li>
        </Link>

        <div onClick={handleLogout} style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            Logout
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
