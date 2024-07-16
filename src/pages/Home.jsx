import Button from "../ui/Button";
import Restaurant from "../ui/Restaurant";

function Home() {
  return (
    <section className="container mx-auto flex flex-col">
      <div className="hero relative mx-2 h-[100vw] w-full bg-cover bg-left-top bg-no-repeat md:h-[45vw]">
        <div className="absolute left-8 top-[30%] flex flex-col gap-4">
          <h1 className="text-xl font-medium text-white md:text-4xl">
            Enjoy your food while sitting in your home!
          </h1>
          <p className="w-full text-sm md:w-2/4 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            autem, delectus doloribus possimus cumque saepe recusandae.
          </p>
          <div>
            <Button>Order Now</Button>
          </div>
        </div>
      </div>

      <Restaurant />
    </section>
  );
}

export default Home;
