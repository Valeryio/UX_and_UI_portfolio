
import MailContact from "../components/ui/mailContact";
import HeroHeader from "../components/heroHeader";

function About() {
  return <>

      <HeroHeader title="À propos" description="Un peu plus sur moi-même !" />
      
      <hr className="w-80r mb-4r m-auto" />

      <section className="flex gap-2r justify-center mb-4r py-2r" >
        <h2 className="text-5r p-0 leading-none font-semibold max-w-32r" >
          
          Construire des designs uniques qui convertissent
        </h2>
        <p className="text-1.5r px-2 py-2r text-c-white-50 max-w-40r" >
          Create custom design with Aaronn that converts more visitor
          than any website. With lots of unique design, you can easily select
          a logo without hassle.
          <br />
          Create custom landing logo with Aaronn  that converts more visitor
          than any website. With lots of revision, you can easily build a logo
          without problem.
        </p>
      </section>

      <picture className="flex gap-2r justify-center mb-4r py-2r px-4r" data-img="profile-img-container">
  
        <div className="deco-tb relative">
        <img src="./images/profile_1.png" alt="profile img of the designer" />
        </div>
  
        <div className="obj relative">
          <img src="./images/profile_2.png" alt="profile img of the designer" />
        </div>
      </picture>

      <section className="flex flex-col gap-2r mb-4r py-8r px-6r" >
        <h2 className="text-4r font-semibold" >
          Follow me on:
        </h2>

        <div className="flex justify-between" >
          <a href="#" className="text-2r text-c-black-25 font-semibold hover:text-white hover:underline">
            DRIBBLE
            </a>
          <a href="#" className="text-2r text-c-black-25 font-semibold hover:text-white hover:underline">
            TWITTER
            </a>
          <a href="#" className="text-2r text-c-black-25 font-semibold hover:text-white hover:underline">
            FACEBOOK
            </a>
          <a href="#" className="text-2r text-c-black-25 font-semibold hover:text-white hover:underline">
            INSTAGRAM
            </a>
        </div>
      </section>

    <MailContact />
      
  </>
}

export default About;