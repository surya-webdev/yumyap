import Button from "./Button";
import Spinner from "./Spinner";
import { FaPlus } from "react-icons/fa6";

function Menu({ item }) {
  if (!item) return <Spinner />;
  const { image, id, name, price } = item;

  return (
    <div className="rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <img className="h-[18rem] w-full rounded-lg md:h-[20rem]" src={image} />
      <div className="my-4 flex flex-col gap-4 px-2">
        <p className="text-xl font-bold md:text-2xl">{name}</p>
        <div className="my-4 flex items-center justify-between">
          <p className="text-2xl">{`₹${price}`}</p>
          <div>
            <Button className="flex items-center justify-center text-xl">
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
