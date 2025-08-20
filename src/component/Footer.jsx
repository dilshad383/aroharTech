import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#1e3a8a] text-white pt-12'>
        <div className="grid grid-cols-3 border-b-2 border-white/10 pb-8 mx-20">
            <div className="grid gap-4">
                <h4 className="text-2xl font-bold">
                    Company
                </h4>
                <ul className="list-none grid gap-2">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Career</li>
                    Pricing
                </ul>
            </div>
            <div className="">
                <h4 className="text-2xl font-bold mb-2">
                    Contact
                </h4>
                <ul className="list-none ">
                    <li>Contact Us</li>   
                </ul>
            </div>
            <div className="">
                <h4 className="text-2xl font-bold mb-2">
                    More
                </h4>
                <ul className='list-none'>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-6 px-8">
            <div className="flex gap-4">
                <FaFacebook size={30} />
                <FaInstagram size={30}/>
                <FaLinkedin size={30}/>
                <FaYoutube size={30}/>
            </div>
            <p>© 2025 Arohar Technologies. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
