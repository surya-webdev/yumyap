import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrders } from "./dataApi";
import toast from "react-hot-toast";
import { useCurrAuth } from "./useCurrAuth";

//
export function useDeleteCart() {
  const queryClient = useQueryClient();

  //
  const { mutate: isDeleting, isLoading: isDeleteLoading } = useMutation({
    mutationFn: ({ email, id }) => deleteOrders({ email, id }),
    mutationKey: ["deleteCart"],
    onSuccess: () => {
      toast.success("Cart item has deleted");
      queryClient.invalidateQueries({ queryKey: ["Cart "] });
    },
  });

  return { isDeleting, isDeleteLoading };
}
