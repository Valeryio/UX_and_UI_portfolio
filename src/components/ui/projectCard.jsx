
const ProjectCard = ({img_name}) => {

    console.log(img_name);
    let path = "/images/";
    if (!img_name) {
      path += "1.png";
    } else {
      path += img_name;
    }

  return (
    <div className="border border-rose-600 p-4 rounded-sm flex flex-col gap-2" >
        <img src={path} alt="Image of a project" />

        <div className=" flex flex-col gap-2" >
            <h2 className="text-1.5r font-semibold" >Brand Journey Improvment </h2>

            <div className="" >
                <span className="text-c-white-50 text-p">Client : </span>
                <span className="text-c-white-100 text-normal" >Organic</span>
            </div>
            <div className="" >
                <span className="text-c-white-50 text-p">Work : </span>
                <span className="text-c-white-100 text-normal" >Branding logo Design</span>
            </div>
        </div>
    </div>
)};

export default ProjectCard;