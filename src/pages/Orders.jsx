import useOrdersData from "../service/useOrdersData";
import EmptyOrders from "../ui/EmptyOrders";
import OrdersLayout from "../ui/OrdersLayout";
import Spinner from "../ui/Spinner";

function Orders() {
  const { data = [], isLoading } = useOrdersData();

  if (isLoading) return <Spinner />;

  const totalOrders = data.at(0)?.confirmOrders;

  if (!data || data === null) return <p>order is Empty</p>;
  if (!totalOrders) return <EmptyOrders />;

  // console.log(totalOrders);

  return (
    <section className="container relative mx-2 my-10 sm:mx-auto">
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="self-start text-3xl font-bold text-primary">
          Your Orders
          {totalOrders.map((el) => (
            <OrdersLayout
              orders={el?.data.orders}
              address={el?.data.address}
              key={el?.data}
            />
          ))}
        </p>
      </div>
    </section>
  );
}

export default Orders;
