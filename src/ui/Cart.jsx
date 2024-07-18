import useCartData from "../service/useCartData";
import CartItem from "./CartItem";
import Spinner from "./Spinner";

function Cart() {
  const { users, isLoading } = useCartData();

  // it will render until the component fetch the datas
  if (isLoading) return <Spinner />;

  const { fullName, id, email, orders } = users;

  if (orders.length === 0 || orders === null) return <p>No orders</p>;

  const totalPrice = orders
    .map((el) => el.price)
    .reduce((acc, curr) => acc + curr, 0);
  const discountedPrice = Math.ceil(totalPrice * 0.9);

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-primary">Your Cart</p>
        <p className="text-xl">{fullName}</p>
      </div>

      {orders.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
      {totalPrice !== 0 && (
        <div className="flex items-center gap-2">
          <p className="text-3xl font-medium">Total</p>
          <p>{`₹${discountedPrice}`}</p>
          <p className="line-through">{`₹${totalPrice}`}</p>
        </div>
      )}
      <p></p>
    </section>
  );
}

export default Cart;

// async function getData(email) {
//   const res = await getUser(email);
//   data == res;
//   // setData(() => res);
// }
// getData(isCurrUser.email);
