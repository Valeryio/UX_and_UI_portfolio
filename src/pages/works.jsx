import ProjectBox from "../components/ui/projectBox";
import Button from "../components/ui/button";
import HeroHeader from "../components/heroHeader";
import MailContact from "../components/ui/mailContact";

const Works = () => {

    return (
        <>
            <HeroHeader title="My Works" description="Showcase About Works" />
            <hr className="w-80r mb-4r m-auto" />
            
            <section className="border mb-8r border-green-500 p-2r " >

                <div className="border border-orange-500 grid grid-cols-3 " >
                    <ProjectBox />
                    <ProjectBox img_name="6.png" />
                    <ProjectBox img_name="7.png" />
                    <ProjectBox img_name="8.png" />
                    <ProjectBox img_name="9.png" />
                    <ProjectBox img_name="10.png" />
                    <ProjectBox img_name="11.png" />
                    <ProjectBox img_name="12.png" />
                </div>

                <Button type="secondary" >
                    LOAD MORE WORKS
                </Button>
            </section>

            <MailContact />
        </>
    )
};

export default Works;