import { useMutation } from "@tanstack/react-query";
import { confirmOrders } from "./dataApi";
import { redirect, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useOrder() {
  const navigate = useNavigate();
  const { mutate: isOrder, isLoading: isOrderLoading } = useMutation({
    mutationFn: (data) => confirmOrders(data),
    mutationKey: ["orders"],
    onSuccess: () => {
      toast.success("Your order has been placed🎇");
      navigate("/orders");
    },
  });

  return { isOrder, isOrderLoading };
}

export default useOrder;
