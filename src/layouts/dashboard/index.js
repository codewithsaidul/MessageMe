import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const DashboardLayout = () => {

  return (
    <>
      {/* Side Bar */}
      <SideBar />
      {/* Side Bar */}
      <Outlet />
    </>
  );
};

export default DashboardLayout;
