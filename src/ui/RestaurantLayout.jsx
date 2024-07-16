import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Button from "./Button";

function RestaurantLayout({ data }) {
  const { id, image, description, name, address, ratings } = data;
  return (
    <div className="bg-card flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <img className="rounded-lg" src={image} alt={name} />
      <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-2">
        <h1 className="text-xl font-semibold md:text-3xl">{name}</h1>
        <a
          href={`https://maps.google.com/maps?saddr=&daddr=${address}`}
          className="text-sm hover:underline"
          target="_blank"
        >
          {address}
        </a>
        <p className="flex items-center gap-2">
          <span className="text-primary">
            {ratings == 5 ? <FaStar /> : <FaRegStarHalfStroke />}
          </span>
          {ratings}
        </p>
        <div>
          <Button>Order Now</Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantLayout;
