import { Outlet } from "react-router";
import { useCurrAuth } from "../service/useCurrAuth";
import Spinner from "./Spinner";
import { useEffect } from "react";

function Applayout() {
  const { isCurrUser = {}, isLoading, isCheckAuth } = useCurrAuth();
  // console.log(isCurrUser);
  const { fullName, email } = isCurrUser.user_metadata;

  return (
    <>
      <div className="container my-10 flex justify-end gap-4">
        <p>{isCurrUser?.user_metadata.fullName}</p>

        <img className="h-10 w-10" src="./default-user.jpg" />
      </div>
      <Outlet />
    </>
  );
}

export default Applayout;
