import { Outlet } from "react-router";
import { useCurrAuth } from "../service/useCurrAuth";

function Applayout() {
  const { isCurrUser, isLoading, isCheckAuth } = useCurrAuth();
  console.log(isCurrUser);
  return (
    <>
      <p>{isCurrUser?.user_metadata.fullName}</p>
      <nav>Nav</nav>
      <Outlet />
    </>
  );
}

export default Applayout;
