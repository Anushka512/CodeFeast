import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireUser() {
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
}

export default RequireUser;
