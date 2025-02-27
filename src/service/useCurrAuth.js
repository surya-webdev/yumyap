import { useQuery } from "@tanstack/react-query";
import { currUserAuth } from "./dataApi";

export function useCurrAuth() {
  const { data: isCurrUser, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: currUserAuth,
  });

  return {
    isCurrUser,
    isLoading,
    isCheckAuth: isCurrUser?.role === "authenticated",
  };
}
