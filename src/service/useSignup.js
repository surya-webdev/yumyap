import { useMutation } from "@tanstack/react-query";
import { newUser } from "./dataApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: isSignupMutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      newUser({ name, email, password }),
    onSuccess: () => {
      toast.success(
        "your account created sucesfully please login now! Explore our foods",
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isSignupMutate,
    isLoading,
  };
}
