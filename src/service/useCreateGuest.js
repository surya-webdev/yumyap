import { useMutation } from "@tanstack/react-query";
import { storeUserInfo } from "./dataApi";

function useCreateGuest() {
  const { mutate: isCreateUser, isLoading } = useMutation({
    mutationFn: (isCurrUser) => storeUserInfo(isCurrUser),
    mutationKey: ["users"],
  });

  return { isCreateUser, isLoading };
}

export default useCreateGuest;
