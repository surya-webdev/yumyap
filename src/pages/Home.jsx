import Hero from "../ui/Hero";
import Restaurant from "../ui/Restaurant";

function Home() {
  return (
    <section className="container mx-auto flex flex-col">
      <Hero />

      <Restaurant />
    </section>
  );
}

export default Home;
