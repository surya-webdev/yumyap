import { Outlet } from "react-router";

function Applayout() {
  return (
    <>
      <nav>Nav</nav>
      <Outlet />
    </>
  );
}

export default Applayout;
