import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";
import CardsSection from "./CardsSection";
import { useDispatch } from "react-redux";
import { setNavFooter } from "../../../Redux/slices/appConfigSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavFooter(false));
  }, [dispatch]);
  return (
    <div className="dashboard">
      <Sidebar />
      <CardsSection />

      {/* <GraphsSection />
      <RecentActivitySection /> */}
    </div>
  );
};

export default Dashboard;
