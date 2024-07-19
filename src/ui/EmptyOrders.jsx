import { Link } from "react-router-dom";

function EmptyOrders() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-4">
      <img
        className="h-[40vh] w-[100%] md:h-[60vh] md:w-[40%]"
        src="./empty.jpg"
        alt="illustration"
      />
      <p className="text-center text-xl font-bold">
        Your Order is Empty , start Ordering....
      </p>
      <Link
        className="rounded-md bg-primary px-2 py-2 text-sm text-black sm:px-6 sm:py-2 md:text-lg"
        to={"/"}
      >
        Start Ordering....
      </Link>
    </div>
  );
}

export default EmptyOrders;
