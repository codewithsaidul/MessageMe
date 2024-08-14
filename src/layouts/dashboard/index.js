import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { Stack } from "@mui/material";

const DashboardLayout = () => {

  return (
    <>
      <Stack direction={"row"}>
        {/* Side Bar */}
        <SideBar />
        {/* Side Bar */}
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
