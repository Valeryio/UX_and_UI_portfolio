
import React from "react";
import {Link} from "react-router-dom";
import Button from "./ui/button";


function Header() {
  return <div className="py-2r px-6r flex items-center justify-between" >

            <Link to="/" >
                <img src="/icons/logo.svg" className="w-12r opacity-80 hover:opacity-100" alt="Logo of the designer" />
            </Link>
          
            <nav className="flex gap-4r items-center" >
            <ul className="flex gap-4" >
                <li className="navlink">
                    <Link to="/" className="font-medium text-c-white-50 hover:text-white hover:text-semibold" >
                        ACCUEIL
                    </Link>
                </li>
                <li className="navlink">
                    <Link to="/about" className="font-medium text-c-white-50 hover:text-white hover:text-semibold"  >
                        À PROPOS
                    </Link>
                </li>
                <li className="navlink">
                    <Link to="/works" className="font-medium text-c-white-50 hover:text-white hover:text-semibold" >
                        MES TRAVAUX
                    </Link>
                </li>
            </ul>
            
            <Button type="secondary">
                <Link to="/contact" className="font-medium text-c-white-50 hover:text-white hover:text-semibold" >
                CONTACTER
                </Link>
            </Button>
          </nav>

        </div>
}

export default Header;