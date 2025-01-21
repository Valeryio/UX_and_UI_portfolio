
const ProjectBox = ({img_name}) => {

    console.log(img_name);
    let path = "/images/";
    if (!img_name) {
      path += "5.png";
    } else {
      path += img_name;
    }

  return (
    <a href="#" className="p-4 rounded-sm flex flex-col gap-2" >
        <img src={path} alt="Image of a project" />

        <div className=" flex flex-col gap-2" >
            <h3>

            </h3>
            <p>

            </p>
        </div>
    </a>
)};

export default ProjectBox;