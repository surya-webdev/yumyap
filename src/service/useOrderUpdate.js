import { useMutation } from "@tanstack/react-query";
import { updateOrders } from "./dataApi";
import toast from "react-hot-toast";

function useOrderUpdate() {
  // updateOrders

  const { mutate: isUpdateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: ({ order, email }) => updateOrders({ order, email }),
    mutationKey: ["updateCart"],
    onSuccess: () => {
      toast.success("Added to the cart");
    },
    onError: () => {
      toast.error("Couldn't add the item");
    },
  });

  return { isUpdateOrder, isUpdating };
}

export default useOrderUpdate;
