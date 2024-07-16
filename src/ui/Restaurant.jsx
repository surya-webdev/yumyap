import useGetRestaurant from "../service/useGetRestaurant";
import RestaurantLayout from "./RestaurantLayout";
import Spinner from "./Spinner";

function Restaurant() {
  const { data, isLoading } = useGetRestaurant();

  if (isLoading) return <Spinner />;

  return (
    <section className="mx-2 my-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <RestaurantLayout data={item} key={item.id} />
      ))}
    </section>
  );
}

export default Restaurant;
