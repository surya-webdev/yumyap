import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginUser } from "./dataApi";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  // loginUser
  const { mutate: isLoginMutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: () => {
      toast.success(
        "You have logged into your account sucesfully ",
        navigate("/"),
      );
    },
    onError: () => {
      toast.error("please check your email and password");
    },
  });

  return {
    isLoginMutate,
    isLoading,
  };
}
