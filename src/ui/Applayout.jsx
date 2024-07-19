import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Applayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Applayout;
