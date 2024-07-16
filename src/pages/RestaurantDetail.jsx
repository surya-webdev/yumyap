import useRestaurantId from "../service/useRestaurantId";
import Button from "../ui/Button";
import Menu from "../ui/Menu";
import Spinner from "../ui/Spinner";

function RestaurantDetail() {
  const { data = {}, isLoading } = useRestaurantId();
  console.log(data);
  if (isLoading) return <Spinner />;

  const { image, id, menus, name, rating, description, address } = data;

  return (
    <section className="container mx-auto flex flex-col justify-center">
      <img
        className="h-[70vw] w-full rounded-xl p-2 md:h-[40vw]"
        src={image}
        alt={name}
      />
      <div className="mx-2 flex flex-col gap-4">
        <p className="text-xl text-primary md:text-4xl">{name}</p>
        <p className="text-sm font-normal md:text-xl">{description}</p>
        <a
          href={`https://maps.google.com/maps?saddr=&daddr=${address}`}
          className="text-sm underline"
          target="_blank"
        >
          {address}
        </a>
      </div>
      <section className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((item) => (
          <Menu item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}

export default RestaurantDetail;
