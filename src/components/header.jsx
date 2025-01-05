
import React from "react";
import Contact from "./../pages/contact";
import About from "./../pages/about";
import Hone from "./../pages/home";
import {Link} from "react-router-dom";


function Header() {
  return <div>
        <Router>
            <ul className="" >
                <li className="navlink">
                    <Link></Link>
                </li>
                <li className="navlink">About</li>
                <li className="navlink">Contact</li>
            </ul>
        </Router>
    </div>
}

export default Header;