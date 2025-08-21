import React from 'react';
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

    // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper flex justify-between items-center px-20 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="brand flex items-center justify-between w-full">
        <h1 className="text-[1.7rem] font-bold text-[#1e3a8a]">
          <span className="text-[#fe0706] ">AROHAR </span>
          TECHNOLOGIES
        </h1>
        <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <GiHamburgerMenu/>
        </div>
      </div>
      <div
      ref={menuRef}
      className={`flex justify-between list-none gap-4 max-md:absolute max-md:bg-white left-0 right-0 top-16 transition-all py-4 max-md:flex-col max-md:items-center max-md:gap-6 font-semibold ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}`}>
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
