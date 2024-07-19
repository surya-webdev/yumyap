import { useQuery } from "@tanstack/react-query";
import { useCurrAuth } from "./useCurrAuth";
import { getOrderData } from "./dataApi";

function useOrdersData() {
  const { isCurrUser } = useCurrAuth();
  const email = isCurrUser?.email;

  const { data, isLoading } = useQuery({
    queryKey: ["orderData"],
    queryFn: () => getOrderData(email),
  });
  return { data, isLoading };
}

export default useOrdersData;
