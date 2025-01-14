import arrow_right from "./../../assets/icons/arrow_right.svg";

const Button = ({primary, arrow, children}) => {
    let primaryButton = {
        background: "orange",
        color: "white",
        padding: "1rem 2rem"
      }
    let buttonStyle = {};

    if (primary === true) {
      buttonStyle = primaryButton
    }
    if (!children) {
      children = "Default value";
    }
    return <button className="text-orange-500"  >
        {children}
        <img src={arrow_right} alt="" />
    </button>
}

export default Button;