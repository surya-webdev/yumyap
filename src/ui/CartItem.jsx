import { MdDelete } from "react-icons/md";
import { getRestaurantById } from "../service/dataApi";
import { useEffect, useState } from "react";
import { useDeleteCart } from "../service/useDeleteCart";
import { useCurrAuth } from "../service/useCurrAuth";
import Spinner from "./Spinner";

function CartItem({ cart }) {
  //
  const { isDeleting, isDeleteLoading } = useDeleteCart();
  const { isCurrUser, isLoading } = useCurrAuth();
  const { id, name, image, price, hotelId, quantity } = cart;
  const [data, setData] = useState(null);

  const email = isCurrUser?.email;
  //
  function handle(e) {
    e.preventDefault();
    // console.log();
    console.log(id);
    isDeleting({ email, id });
  }

  useEffect(() => {
    async function fetchRestaurant() {
      const res = await getRestaurantById(hotelId);
      setData(res);
    }

    fetchRestaurant();
  }, [hotelId]);

  if (isDeleteLoading || isLoading) return <Spinner />;

  return (
    <div className="my-2 flex flex-col items-center gap-2 rounded-lg p-4 shadow-lg transition-shadow hover:shadow-xl sm:flex-row sm:gap-10">
      <img className="h-[10rem] w-[10rem] rounded-md" src={image} alt={name} />
      <div className="flex-col justify-between gap-10">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg font-medium text-primary">{data?.name}</p>
        <p className="text-sm">{data?.description}</p>
        <div className="flex flex-col gap-2">
          <p>
            Quantity
            <span className="text-[#432109 font-semibold"> {quantity}</span>
          </p>
          <p className="hidden text-lg font-semibold text-primary sm:block">{`₹${price}`}</p>
        </div>
      </div>
      <div className="flex w-full justify-between sm:justify-end">
        <p className="text-lg font-semibold sm:hidden">{`₹${price}`}</p>
        <button
          onClick={(e) => handle(e)}
          className="mx-2 self-end text-[2rem] text-[#432109] sm:self-center"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
