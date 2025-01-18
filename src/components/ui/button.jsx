import arrow_right from "./../../assets/icons/arrow_right.svg";

const Button = ({type, arrow, children}) => {

    let primaryStyles = "font-semibold text-base py-4 btn--arrow px-9 rounded-c-32 bg-c-orange-100";
    let secondaryStyles = "border-2 border-c-black-25 font-medium py-4 px-9 rounded-c-32 bg-black";
    let defaultStyles = "border-2 border-c-black-25 font-medium py-4 px-9 rounded-c-32 bg-red-100";
    let buttonStyle = {};

    let icon = document.createElement("img");
    icon.src= "/icons/icon.svg";

    switch (type) {
      case "primary":
        buttonStyle = primaryStyles;
        break;
      case "secondary":
        buttonStyle = secondaryStyles;
        break;
      default:
        buttonStyle = defaultStyles;
        break;
    }
  
    if (!children) {
      children = "Default value";
    }
  
    return (
      <button className={buttonStyle} data-icon="arrow-right" >
        {children}
        {/* <img src={arrow_right} alt="" /> */}
    </button>
)};

export default Button;