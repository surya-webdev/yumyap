import Button from "./Button";
import OrdersList from "./OrdersList";

function OrdersLayout({ orders, address }) {
  const { id, city, name, phone, price } = address;
  //
  return (
    <div className="flex flex-col font-normal text-black">
      <div className="my-6 flex items-center gap-8 text-lg font-semibold md:text-xl">
        <p className="capitalize">
          {name}
          <span className="block font-medium">{city}</span>
        </p>

        <p>
          <span className="">Total Price</span>
          <span className="text-primary">: {price}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {orders.map((el) => (
          <OrdersList orders={el} key={el} />
        ))}
      </div>

      <div className="my-4">
        <Button className="bg-green-500">Order Placed ✅</Button>
      </div>
    </div>
  );
}

export default OrdersLayout;
