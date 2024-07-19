import Button from "./Button";

function Hero() {
  return (
    <div className="hero relative my-4 h-[100vw] w-full bg-cover bg-left-top bg-no-repeat md:h-[45vw]">
      <div className="absolute left-8 top-[30%] flex flex-col gap-4">
        <h1 className="text-xl font-medium text-white md:text-4xl">
          Enjoy your food while sitting at your home!
        </h1>
        <p className="w-full text-sm md:w-2/4 md:text-lg">
          Yumyap is a food ordering app based in Bengaluru, offering quick
          delivery and delicious food.
        </p>
        <div>
          <Button className={"text-white"}>Order Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
