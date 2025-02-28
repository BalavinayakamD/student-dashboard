import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home/Home";
import Applayout from "../../applayout/Applayout";
import StudentDashboard from "../student/StudentDashboard";
import { BarChart } from "@mui/icons-material";
import Details from "../student/Details";

const NAVIGATION = [
  {
    segment: "dashboard/",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard/details",
    title: "Details",
    icon: <BarChart />,
  },
];

const MainpageTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Dashboard() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <StudentDashboard />,
        },
        {
          path: "details",
          element: <Details />,
        },
      ],
    },
  ]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="Logo" />,
        title: "Student Dashboard",
        homeUrl: "/toolpad/core/introduction",
      }}
      theme={MainpageTheme}
    >
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default Dashboard;
