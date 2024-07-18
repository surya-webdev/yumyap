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
    <div className="my-2 flex w-full justify-between gap-10">
      <div className="flex gap-6">
        <img
          className="h-[10rem] w-[10rem] rounded-md"
          src={image}
          alt={name}
        />
        <div className="flex-col justify-between">
          <p className="text-xl font-bold">{name}</p>
          <p>{data?.name}</p>
          <p>{data?.description}</p>
          <div className="flex gap-2">
            <p>Quantity</p>
            <p>{quantity}</p>
          </div>
          <p className="text-lg font-normal">{`₹${price}`}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-xl"></div>
      <div>
        <button onClick={(e) => handle(e)} className="text-lg">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
