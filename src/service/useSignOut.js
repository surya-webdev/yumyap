import { useMutation } from "@tanstack/react-query";
import { signOut } from "./dataApi";

function useSignOut() {
  const { mutate, isLoading } = useMutation({
    mutationFn: () => signOut(),
    mutationKey: ["signout"],
  });
  return { mutate, isLoading };
}

export default useSignOut;
