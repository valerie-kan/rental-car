import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Header from "./Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
