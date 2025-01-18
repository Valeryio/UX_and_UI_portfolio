
import Button from "../components/ui/button";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectCard from "../components/ui/projectCard";



function Home() {
  return <>
      <section className="hero-header border border-yellow-300 flex gap-2r flex-col items-center ">

        <h1 className="hero-header-title text-5r text-center font-semibold w-56r border">
        Adaptive Logo Design for Your Brand
        </h1>

        <Button type="primary">
          Explore works
        </Button>
      </section>

      <section className="border border-violet-300 grid grid-cols-r-img-colgrid flex-col gap-8r items-center ">
        <div className="flex flex-col gap-2r items-start" >
          <h1 className="hero-header-title text-4r font-semibold w-40r border">
          Let's get know about me closer
          </h1>

          <p className="text-c-white-50 text-p" >
            Aaron is a New York-based visual designer focused on brand and visual identity.
            His portfolio is showcases his wide range of work, spanning books and web design.
          </p>

          <Button type="primary">
            Discover More About Me
          </Button>
        </div>

        <div data-img="profile-img-container">
          <img src="/images/profile_1.png" className="row-start-1 col-start-2" id="th" data-img="profile-img" 
        alt="This is a profile img" />
        </div>
      </section>

      <section className="hero-header border border-yellow-300 flex gap-2r flex-col items-center ">
        <h1 className="hero-header-title text-4r text-center font-semibold w-56r border ">
        My projects Hilight
        </h1>

        <Button type="primary">
          Explore works
        </Button>

        <div className=" w-full grid grid-cols-r-auto gap-2r border-2 border-yellow-300 p-4 justify-center" >
          <ProjectCard />
          <ProjectCard img_name="2.png" />
          <ProjectCard img_name="3.png" />
          <ProjectCard img_name="4.png" />
        </div>
      </section>

      <section>

          <h2>
            Testimonials
          </h2>

          <p>
              "Aaroon was a fantastic to work with from start to finish. We were looking for a simple, stand-out
              logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money
              for a professional graphic designer but I was very wrong. Working with Aaronn was worth any penny 
              and was surprisingly affordable! I remember him saying the simplicity is key to successful logo and 
              boy, he was right. I can't thank Aaronn for his effort and professionalism. I would recommend him to
              any one looking for a design!"
          </p>
          <h3>- Martin Lee</h3>
      </section>
  </>
}

export default Home;
