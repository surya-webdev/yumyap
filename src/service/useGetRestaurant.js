import { useQuery } from "@tanstack/react-query";
import { getRestaurant } from "./dataApi";

function useGetRestaurant() {
  const { data, isLoading } = useQuery({
    queryFn: getRestaurant,
    queryKey: ["restaurant"],
  });

  // return
  return { data, isLoading };
}

export default useGetRestaurant;
