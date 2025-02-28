import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core";

function Applayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default Applayout;
