import { useEffect, useState } from "react";
import useGetRestaurant from "../service/useGetRestaurant";
import RestaurantLayout from "./RestaurantLayout";
import Spinner from "./Spinner";

function Restaurant() {
  const [searchTerm, setSearchTerm] = useState("");

  const [filterData, setFilterData] = useState([]);

  const { data, isLoading } = useGetRestaurant();

  useEffect(() => {
    //
    if (!data) return;

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilterData(filtered);
  }, [data, searchTerm]);

  if (isLoading) return <Spinner />;
  //

  return (
    <>
      <div className="w-full">
        <div className="flex w-full justify-end">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-md bg-slate-200 p-2"
            placeholder="search..."
            name="search"
            type="text"
          />
        </div>
      </div>
      <section className="mx-2 my-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filterData.map((item) => (
          <RestaurantLayout data={item} key={item.id} />
        ))}
      </section>
    </>
  );
}

export default Restaurant;
