import Logo from "./../assets/icons/logo.svg";
import { Link } from "react-router-dom";


function Footer() {
  return <footer>

        <img src={Logo} alt="Logo of the designer" />

        <div className="footer__contact">
            <p className="footer__city">Street Avenue 21, CA</p>
            <p className="footer__address">0-8-00-888-000</p>
            <p className="footer__phone">+9 0283353</p>
            <div className="footer__social">
                <img src="" alt="" className="footer__facebook-icon" />
                <img src="" alt="" className="footer__twitter-icon" />
                <img src="" alt="" className="footer__instagram-icon" />
            </div>
        </div>

        <hr />

        <p> &copy 2025 All right reserved!</p>
  </footer>
}

export default Footer;