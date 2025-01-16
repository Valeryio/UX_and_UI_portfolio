
import React from "react";
import {Link} from "react-router-dom";
import Button from "./ui/button";


function Header() {
  return <div className="flex border items-center justify-between px-4" >

            <Link to="/" >
                <img src="/icons/logo.svg" className="w-lgo" alt="Logo of the designer" />
            </Link>
          
            <nav className="flex gap-4r items-center" >
            <ul className="flex gap-4" >
                <li className="navlink">
                    <Link to="/" className="font-medium text-c-black-25 hover:text-white hover:text-semibold" >HOME</Link>
                </li>
                <li className="navlink">
                    <Link to="/about" className="font-medium text-c-black-25 hover:text-white hover:text-semibold"  >ABOUT</Link>
                </li>
                <li className="navlink">
                    <Link to="/contact" className="font-medium text-c-black-25 hover:text-white hover:text-semibold" >MY WORKS</Link>
                </li>
            </ul>
            
            <Button type="secondary">
                CONTACT
            </Button>
          </nav>

        </div>
}

export default Header;