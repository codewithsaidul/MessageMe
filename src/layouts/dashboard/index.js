import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";




const DashboardLayout = () => {


  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);

  if(!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

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
