import HeroHeader from "../components/heroHeader";
import MailContact from "../components/ui/mailContact";

const ProjectDetails = () => {

  return (
    <>
        <HeroHeader title="Project Details"
        description="Details About The Project" />
        <hr className="w-80r mb-4r m-auto" />

        <section className="my-4r border m-auto border-violet-600 w-64r flex flex-col gap-2" >
            <img src="/images/14.png" alt="A new protocol" />

            <div className="m-2r flex flex-col gap-2" >
                <h3 className="text-1.5r font-medium" >
                    Project Story
                </h3>
                <p className="text-c-white-50 text-p" >
                    The fact that photography has different meanings to different 
                    people is one of the many components of its appeal. 
                    Photography is such an important part of our life that it is 
                    now very difficult to imagine the world without it. 
                    <br /> <br />
                    We cannot imagine a wedding without the opportunity to capture 
                    it on film, we would not be able to remember the growing up 
                    of children or the holidays if we did not have pictures.
                </p>

                <picture className="grid gap-4 grid-cols-2 my-4r" >
                    <img src="/images/15.png" alt="" />
                    <img src="/images/16.png" alt="" />
                </picture>

                <h3 className="text-1.5r font-medium" >
                    Day One
                </h3>
                <p className="text-c-white-50 text-p" >
                    Everywhere we are haunted by photography in newspapers, magazines, 
                    advertisements on television on the Internet, but we still crave 
                    even more. 
                    <br /> <br />
                    And what helps to achieve a good result? We will look at these 
                    issues and some of the possibilities of photography and explain 
                    that it is a combination of thought imagination, visual design, 
                    technical skills and organizational skills
                </p>

            </div>
            <div className="flex gap-2r items-center justify-between my-4r" >
                <div className="flex gap-2r items-center" >
                    <img src="/icons/arrow_l.svg" alt="Arrow to left" />
                    <p>PREVIOUS WORK</p>
                </div>

                <div className="flex gap-2r items-center" >
                    <p>NEXT WORK</p>
                    <img src="/icons/arrow_r.svg" alt="Arrow to right" />
                </div>
            </div>
        </section>

        <section className="border border-red-600 flex mb-4r flex-col gap-2r justify-center" >

            <h2 className="text-4r text-center font-semibold border border-yellow-400" >
                Other projects
            </h2>

            <div className=" grid grid-cols-3 p-4 border border-green-400" >
                <a href="#">
                    <div className="flex flex-col gap-1r border border-amber-900 p-2r" >
                        <img src="/images/17.png" alt="" />

                        <h4 className="text-1.5r" >Logo 1</h4>
                        <p className="text-1.2r font-semibold text-c-white-75" >Branding</p>
                    </div>
                </a>

                <a href="#">
                    <div className="flex flex-col gap-1r border border-amber-900 p-2r" >
                        <img src="/images/18.png" alt="" />

                        <h4 className="text-1.5r" >Logo 1</h4>
                        <p className="text-1.2r font-semibold text-c-white-75" >Branding</p>
                    </div>
                </a>

                <a href="#">
                    <div className="flex flex-col gap-1r border border-amber-900 p-2r" >
                        <img src="/images/19.png" alt="" />

                        <h4 className="text-1.5r" >Logo 1</h4>
                        <p className="text-1.2r font-semibold text-c-white-75" >Branding</p>
                    </div>
                </a>
            </div>
        </section>

        <MailContact />

    </>
)};

export default ProjectDetails;