import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "./dataApi";

function useRestaurantId() {
  // getRestaurantById
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => getRestaurantById(id),
  });

  return { data, isLoading };
}

export default useRestaurantId;
