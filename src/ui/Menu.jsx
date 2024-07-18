import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useCurrAuth } from "../service/useCurrAuth";
import useOrderUpdate from "../service/useOrderUpdate";
import Button from "./Button";
import Spinner from "./Spinner";

function Menu({ item, hotelId }) {
  //
  const { isUpdateOrder, isUpdating } = useOrderUpdate();

  const { isCurrUser } = useCurrAuth();
  const [quantity, setQuantity] = useState(1);

  const email = isCurrUser.email;

  if (!item) return <Spinner />;

  const { image, id, name, price } = item;

  const handle = (e) => {
    e.preventDefault();
    const updateItem = {
      ...item,
      price: price * quantity,
      quantity: quantity,
      hotelId,
    };

    isUpdateOrder({ order: updateItem, email });
  };

  return (
    <div className="rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <img className="h-[18rem] w-full rounded-lg md:h-[20rem]" src={image} />
      <div className="my-4 flex flex-col gap-4 px-2">
        <p className="text-xl font-bold md:text-2xl">{name}</p>
        <div className="my-4 flex items-center justify-between">
          <p className="text-2xl">{`₹${price}`}</p>
          <div>
            <div className="flex gap-4 text-xl">
              <button onClick={() => setQuantity((s) => (s <= 0 ? 1 : s - 1))}>
                -
              </button>
              <p>{quantity === 0 ? setQuantity((s) => 1) : quantity}</p>
              <button onClick={() => setQuantity((s) => (s > 30 ? 1 : s + 1))}>
                +
              </button>
            </div>
            <Button
              disabled={isUpdating}
              onClick={(e) => handle(e)}
              className="flex items-center justify-center text-xl"
            >
              <span>
                <FaPlus />
              </span>
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
