import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="flex justify-between items-center px-20 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[1.7rem] font-bold text-[#1e3a8a]">
          <span className="text-[#fe0706] ">AROHAR </span>
          TECHNOLOGIES
        </h1>
        <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <GiHamburgerMenu/>
        </div>
      </div>

      <div className={`md:flex justify-between list-none gap-4 max-md:absolute max-md:bg-white left-0 right-0 top-16 transition-all max-md:text-center ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link to="/">
          <li className={location.pathname === "/" ? "text-[#fe0706] font-bold" : "hover:text-[#fe0706]"}>
            HOME
          </li>
        </Link>
        <Link to="/services">
          <li className={location.pathname === "/services" ? "text-[#fe0706] font-bold" : "hover:text-[#fe0706]"}>
            SERVICES
          </li>
        </Link>
        <Link to="/career">
          <li className={location.pathname === "/career" ? "text-[#fe0706] font-bold" : "hover:text-[#fe0706]"}>
            CAREER
          </li>
        </Link>
        <Link to="/pricing">
          <li className={location.pathname === "/pricing" ? "text-[#fe0706] font-bold" : "hover:text-[#fe0706]"}>
            PRICING
          </li>
        </Link>
        <Link to="/contact">
          <li className={location.pathname === "/contact" ? "text-[#fe0706] font-bold" : "hover:text-[#fe0706]"}>
            CONTACT
          </li>
        </Link>
      </div>
    </div>
  )
}

export default Header
