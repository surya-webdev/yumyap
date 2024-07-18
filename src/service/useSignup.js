import { useMutation } from "@tanstack/react-query";
import { newUser } from "./dataApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: isSignupMutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      newUser({ name, email, password }),
    onSuccess: () => {
      toast.success("your account has created sucesfully , please login now!");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Please Check your details & Try again :)");
    },
  });
  return {
    isSignupMutate,
    isLoading,
  };
}
