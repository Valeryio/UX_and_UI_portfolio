
import HeroHeader from "../components/heroHeader";
import Button from "../components/ui/button";


function contact() {
  return <>

      <HeroHeader title="Contact Me" description="Little brief about myself" />
      <hr className="w-80r mb-4r m-auto" />

      <section className="grid grid-cols-contact-grid gap-4r justify-center p-2r">
        <h2 className="text-4r max-w-32r font-semibold">
          Get in Touch With Us
        </h2>
        <form action="" className=" justify-start max-w-40r gap-2r p-2">
          <div className="flex mb-3r flex-col gap-2">
            <label htmlFor="" className="text-1r font-semibold">NAME</label>
            <input type="text" className="h-4r border-b-2 p-1 inline-block bg-transparent outline-none" />
          </div>
          <div className="flex mb-3r flex-col gap-2">
            <label htmlFor="" className="text-1r font-semibold">SUBJECT</label>
            <input type="text" className="h-4r border-b-2 p-1 inline-block bg-transparent outline-none" />
          </div>
          <div className="flex mb-3r flex-col gap-2">
            <label htmlFor="" className="text-1r font-semibold">MESSAGE</label>
            <textarea name="" className="resize-none h-4r border-b-2 p-1 inline-block bg-transparent outline-none">

            </textarea>
          </div>

          <Button type="primary" >
            SEND
          </Button> 
        </form>
      </section>

      <section className="flex flex-col m-4r items-center gap-2r" >
        <div className="w-48r">
          <img src="./images/13.png" alt="" />
        </div>
        <div className="flex gap-2r" >
          <span className="text-1.5r" >Street Avenue 21, CA</span>
          <span className="text-1.5r" >+9 0283353</span>
          <span className="text-1.5r" >info@aaronn.com</span>
        </div>
      </section>

  </>
}

export default contact;