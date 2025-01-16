
import Button from "../components/ui/button";
import Header from "../components/header";
import Footer from "../components/footer";



function Home() {
  return <>
      <section className="hero-header border border-yellow-300 flex gap-2r flex-col items-center ">

        <h1 className="hero-header-title text-4r text-center font-semibold w-48r border">
        Adaptive Logo Design for Your Brand
        </h1>

        <Button type="primary">
          EXPLORE WORKS
        </Button>
      </section>

        <section className="border border-violet-300 grid grid-cols-r-img-colgrid gap-2r flex-col items-center ">

          <h1 className="hero-header-title text-3r font-semibold w-48r border">
          Let's get know about me closer
          </h1>

          <p>Aaron is a New York-based visual designer focused on brand and visual identity.
            His portfolio is showcases his wide range of work, spanning books and web design.
          </p>

          <Button type="primary">
            Discover More About Me
        </Button>

        <img src="/images/profile_1.png" alt="This is a profile img" />
        </section>
  </>
}

export default Home;
