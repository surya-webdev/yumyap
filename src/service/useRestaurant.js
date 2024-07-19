import { useQuery } from "@tanstack/react-query";
import { getRestaurantById } from "./dataApi";

function useRestaurant() {
  const { data, isLoading } = useQuery({
    queryKey: ["restaurant-id"],
    queryFn: (id) => getRestaurantById(id),
  });

  return { data, isLoading };
}

export default useRestaurant;
