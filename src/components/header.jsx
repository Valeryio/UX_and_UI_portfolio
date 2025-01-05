
import React from "react";
import {Link} from "react-router-dom";


function Header() {
  return <div>
            <ul className="" >
                <li className="navlink">
                    <Link to="/"> Home </Link>
                </li>
                <li className="navlink">
                    <Link to="/about" >About</Link>
                </li>
                <li className="navlink">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
    </div>
}

export default Header;