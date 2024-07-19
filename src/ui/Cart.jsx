import { useState } from "react";
import useCartData from "../service/useCartData";
import Address from "./Address";
import Button from "./Button";
import CartItem from "./CartItem";
import Spinner from "./Spinner";

function Cart() {
  const { users, isLoading } = useCartData();
  const [isOpen, setIsopen] = useState(false);

  // it will render until the component fetch the datas
  if (isLoading) return <Spinner />;

  const { fullName, id, email, orders } = users;

  if (orders.length === 0 || orders === null)
    return (
      <div>
        <p>No orders</p>
      </div>
    );

  const totalPrice = orders
    .map((el) => el.price)
    .reduce((acc, curr) => acc + curr, 0);

  const discountedPrice = Math.ceil(totalPrice * 0.9);

  return (
    <section className="container relative mx-2 my-10 sm:mx-auto">
      <div className="flex items-center justify-between"></div>
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="self-start text-3xl font-bold text-primary">Your Cart</p>
        {orders.map((cart) => (
          <CartItem cart={cart} key={cart.id} />
        ))}
        <div className="flex flex-col gap-8">
          {totalPrice !== 0 && (
            <div className="self-justify-start flex items-center gap-2">
              <p className="text-3xl font-medium">Total</p>
              <p className="font-semibold text-primary">{`₹${discountedPrice}`}</p>
              <p className="line-through">{`₹${totalPrice}`}</p>
            </div>
          )}
          <Button onClick={() => setIsopen((s) => !s)}>Check Out</Button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#0000008d] backdrop-blur-sm">
          <Address price={discountedPrice} handler={setIsopen} />
        </div>
      )}
      {/* <Address price={discountedPrice} handler={setIsopen} /> */}
    </section>
  );
}

export default Cart;
