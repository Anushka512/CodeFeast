import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "../Sidebar/Sidebar";
import { deleteProduct, getAdminProducts, resetStatusError } from "../../../Redux/slices/productSlice";
import Swal from "sweetalert2";

const AllCourse = () => {
  const dispatch = useDispatch();
  const { products, isDeleted } = useSelector((state) => state.products);
  const deleteProductHandler = (id) => {
    console.log(id);
    dispatch(deleteProduct(id));
  };
  useEffect(() => {
    dispatch(getAdminProducts());

    if (isDeleted) {
      Swal.fire({
        title: "Product Deleted Succesfully",
      });
      dispatch(resetStatusError())
    }
  }, [dispatch, isDeleted]);

  const columns = [
    { field: "id", headerName: "Course Id", minWidth: 200, flex: 0.5 },

    {
      field: "course",
      headerName: "Course Name",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "price",
      headerName: "Course Price",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.id}`}>
              <EditIcon />
            </Link>
            <Button onClick={() => deleteProductHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item, index) => {
      rows.push({
        id: item._id,
        course: item.name,
        price: item.price,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL COURSES</h1>
          <div className="admin__btn create">
            <Link
              to="/admin/course/create"
              className="theme-btn-one bg-black btn_md"
            >
              Create Course
            </Link>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AllCourse;
