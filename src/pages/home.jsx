
import Button from "../components/ui/button";
import MailContact from "../components/ui/mailContact";
import ProjectCard from "../components/ui/projectCard";



function Home() {
  return <>
      <section className="mb-8r flex gap-2r flex-col items-center py-2r">

        <p className="text-1 text-c-white-75 " >
          Hey <span className="text-white" >Linson</span> ! Pourquoi commencer par le design ?
        </p>
        <h1 className="text-5r text-center font-semibold w-56r">
          C'est simple, Dieu est un Designer !
        </h1>

        <Button type="primary">
          Voir les travaux
        </Button>
      </section>

      <section className="mb-8r py-2r px-6r grid grid-cols-r-img-colgrid flex-col gap-8r items-center ">
        <div className="flex flex-col gap-2r items-start" >
          <h1 className="text-4r font-semibold w-40r">
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

      <section className="mb-4r py-2r px-6r flex gap-2r flex-col items-center ">
        <h1 className="text-4r text-center font-semibold w-56r">
        My projects Hilight
        </h1>

        <Button type="primary">
          Explore works
        </Button>

        <div className="mb-4r w-full grid grid-cols-r-auto gap-2r p-4 justify-center" >
          <ProjectCard />
          <ProjectCard img_name="2.png" />
          <ProjectCard img_name="3.png" />
          <ProjectCard img_name="4.png" />
        </div>
      </section>

      <section className=" py-8r px-6r flex flex-col gap-2r items p-2r" >

          <h2 className="testimonials-title text-4r font-semibold w-56r" >
            Testimonials
          </h2>

          <p className="text-c-white-50 text-p" >
              "Aaroon was a fantastic to work with from start to finish. We were looking for a simple, stand-out
              logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money
              for a professional graphic designer but I was very wrong. Working with Aaronn was worth any penny 
              and was surprisingly affordable! I remember him saying the simplicity is key to successful logo and 
              boy, he was right. I can't thank Aaronn for his effort and professionalism. I would recommend him to
              any one looking for a design!"
          </p>
          <h3 className="text-2r font-semibold" >
            - Martin Lee
          </h3>
      </section>

      
    <MailContact />

  </>
}

export default Home;
