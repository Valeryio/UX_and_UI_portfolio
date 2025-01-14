
import React from "react";
import {Link} from "react-router-dom";
import Button from "./ui/button";
import Logo from "./../assets/icons/logo.svg";


function Header() {
  return <div>
          <img src={Logo} alt="Logo of the designer" />
            <ul className="" >
                <li className="navlink">
                    <Link to="/">HOME</Link>
                </li>
                <li className="navlink">
                    <Link to="/about" >ABOUT</Link>
                </li>
                <li className="navlink">
                    <Link to="/contact">MY WORKS</Link>
                </li>
            </ul>

            
        <Button primary={false} />
    </div>
}

export default Header;