import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ErrorLabel from "./ErrorLabel";
import Button from "./Button";
// import { useLogin } from "../service/useLogin";
// import NavLogo from "./NavLogo";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm();
  const labels = "text-2xl font-semibold text-black ";
  const inputStyle =
    "h-10 rounded-md placeholder:px-2 placeholder:text-black border-2  ";

  // const { isLoginMutate, isLoading } = useLogin();
  const { errors } = formState;

  function submit({ email, password }) {
    // isLoginMutate({ email, password });
  }

  return (
    <div className="h-screen w-full">
      <header className="flex">{/* <NavLogo /> */}</header>
      <div className="my-2 flex w-screen flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="my-10 text-3xl font-semibold text-black">
            Login to your Account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex w-full flex-col gap-4 px-5 sm:w-[25rem]"
        >
          <label htmlFor="email" className={labels}>
            Email
          </label>
          <input
            // disabled={isLoading}
            id="email"
            type="email"
            className={inputStyle}
            placeholder="eg:you@gmail.com"
            {...register("email", {
              required: "this field required",
              pattern: /\S+@\S+\.\S+/,
              message: "please enter the correct email ",
            })}
          />
          {errors?.email && <ErrorLabel error={errors?.email?.message} />}
          <label htmlFor="password" className={labels}>
            Password
          </label>
          <input
            // disabled={isLoading}
            id="password"
            className={inputStyle}
            placeholder="password"
            type="password"
            {...register("password", { required: "Enter the password" })}
          />
          {errors?.password && <ErrorLabel error={errors?.password?.message} />}

          <Button>Login</Button>
        </form>
        <div className="mx-4 flex">
          <p className={labels + "my-10 text-sm"}>
            Don&apos;t have account
            <a
              className="block cursor-pointer text-primary underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
