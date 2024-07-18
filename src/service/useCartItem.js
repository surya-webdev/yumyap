import { useMutation } from "@tanstack/react-query";

function useCartItem() {
  const { mutate: isCartItem, isLoading: isCartLoading } = useMutation({
    //
  });

  return { isCartItem, isCartLoading };
}

export default useCartItem;
