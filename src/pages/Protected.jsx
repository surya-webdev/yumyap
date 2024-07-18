import { useNavigate } from "react-router";
import { useCurrAuth } from "../service/useCurrAuth";
import Spinner from "../ui/Spinner";
import useCreateGuest from "../service/useCreateGuest";

function Protected({ children }) {
  const navigate = useNavigate();

  const { isCurrUser, isLoading, isCheckAuth } = useCurrAuth();
  const { isCreateUser } = useCreateGuest();

  if (isLoading) return <Spinner />;

  if (isCheckAuth) {
    return <>{children}</>;
  } else {
    navigate("/login");
  }
}

export default Protected;
