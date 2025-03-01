import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import { Toaster } from "react-hot-toast";

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
