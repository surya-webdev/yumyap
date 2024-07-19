import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

import ErrorLabel from "./ErrorLabel";
import useCartData from "../service/useCartData";
import useOrder from "../service/useOrder";
import Button from "./Button";
import { Area } from "../service/Area";
import { redirect } from "react-router-dom";

// Lable & input styles
const labelStyle = "text-lg font-medium";

const inputStyle =
  "h-10 rounded-sm w-full border bg-slate-100 px-2 outline-1 transition-all duration-200";

function Address({ handler, price }) {
  const { users, isLoading } = useCartData();
  const { isOrder, isOrderLoading } = useOrder();
  const { register, handleSubmit, formState, getValues, reset } = useForm();

  if (isLoading || isOrderLoading) return;

  const { fullName, id, email, orders } = users;

  const { errors } = formState;

  function submitHandle({ name, email, address, area, city, phone }) {
    // console.log(name, email, address, area, city, phone);

    const confirmOrders = {
      address: { name, email, address, area, city, phone, id },
      orders,
    };

    isOrder(confirmOrders, {
      onSettled: reset(),
    });
  }

  return (
    <div className="container mx-2 flex w-full flex-col rounded-lg bg-white px-6 py-4 md:w-2/4">
      <div className="my-5 flex justify-between gap-5 text-2xl font-semibold">
        <h1>Adress Details</h1>
        <button className="text-3xl" onClick={() => handler((s) => !s)}>
          <MdClose />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(submitHandle)}
        className="flex w-full flex-col gap-2"
      >
        <label htmlFor="name" className={labelStyle}>
          <span className="text-lg text-red-500">*</span>Full Name
        </label>
        <input
          id="name"
          className={inputStyle}
          defaultValue={fullName}
          value={fullName}
          // disabled
          {...register("name")}
        />
        {errors?.name && <ErrorLabel error={errors?.name?.message} />}
        <label htmlFor="email" className={labelStyle}>
          {" "}
          <span className="text-lg text-red-500">*</span>Email
        </label>
        <input
          id="email"
          className={inputStyle}
          value={email}
          // disabled
          {...register("email")}
        />
        {errors?.email && <ErrorLabel error={errors?.email?.message} />}
        <label htmlFor="phone" className={labelStyle}>
          {" "}
          <span className="text-lg text-red-500">*</span>Phone Number
        </label>
        <div className="flex w-full">
          <span>
            <select className={inputStyle}>
              <option>+91</option>
            </select>
          </span>
          <input
            id="phone"
            placeholder="1234567890"
            className={inputStyle}
            type="number"
            required
            {...register("phone", { required: "this field required" })}
          />
          {errors?.phone && <ErrorLabel error={errors?.phone?.message} />}
        </div>
        <label htmlFor="address" className={labelStyle}>
          {" "}
          <span className="text-lg text-red-500">*</span>Address
        </label>
        <textarea
          id="address"
          placeholder="eg: 123 street, Area, city "
          className={`${inputStyle} h-20 p-1`}
          type="text"
          required
          {...register("address", { required: "this field required" })}
        />
        {errors?.address && <ErrorLabel error={errors?.address?.message} />}
        <label htmlFor="area" className={labelStyle}>
          <span className="text-lg text-red-500">*</span>Area
        </label>
        <select
          id="area"
          className={inputStyle}
          defaultValue="indranagar"
          {...register("area", { required: "this field required" })}
        >
          {Area.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>
        {errors?.area && <ErrorLabel error={errors?.area?.message} />}
        <label className={labelStyle}>
          <span htmlFor="city" className="text-lg text-red-500">
            *
          </span>
          City
        </label>
        <select
          id="city"
          className={inputStyle}
          defaultValue="Bengaluru"
          {...register("city", { required: "this field required" })}
        >
          <option>Bengaluru</option>
        </select>
        {errors?.city && <ErrorLabel error={errors?.city?.message} />}
        <Button className="my-4" type="submit" disabled={isOrderLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Address;
