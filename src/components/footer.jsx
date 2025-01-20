
import { Link } from "react-router-dom";


const Footer = () => {
  return (
      
      <footer className="py-2r px-6r gap-4 flex flex-col p-2r  bg-black" >

        <div className="footer__contact flex py-2r items-center justify-between ">
          <Link to="/" className="w-16r" >
            <img src="/icons/logo.svg" className="" alt="Logo of the designer" />
          </Link>

          <div>
          <p className="footer__city font-semibold text-1.5r ">
              Street Avenue 21, CA
              </p>
            <p className="footer__address font-semibold text-1.5r ">
              0-8-00-888-000
            </p>
          </div>

            <div>
              <p className="footer__phone font-semibold text-1.5r ">
                +9 0283353
              </p>
              <div className="footer__social flex gap-2">
                <img src="/icons/facebook.svg" alt="" 
                className="footer__facebook-icon w-2r" />
                <img src="/icons/twitter.svg" alt="" 
                className="footer__twitter-icon w-2r" />
                <img src="/icons/instagram.svg" alt="" 
                className="footer__instagram-icon w-2r" />
            </div>
          </div>
        </div>

        <hr />
        
        <p className=" font-semibold text-center text-1.5r text-c-white-75" >
          &copy 2025 All right reserved!
        </p>
  </footer>
  )};

export default Footer;