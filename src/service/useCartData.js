import { useQuery } from "@tanstack/react-query";
import { useCurrAuth } from "./useCurrAuth";
import { getUser } from "./dataApi";

function useCartData() {
  const { isCurrUser } = useCurrAuth();

  const { data: users, isLoading } = useQuery({
    queryKey: ["Cart "],
    queryFn: () => getUser(isCurrUser.email),
  });

  return { users, isLoading };
}

export default useCartData;
