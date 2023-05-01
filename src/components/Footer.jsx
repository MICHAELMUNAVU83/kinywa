import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#111111]">
      <div className="flex justify-between items-center mx-auto w-[80%] p-4">
        <img src={logo} alt="logo" className="w-56" />
        <div className="uppercase flex gap-8 text-xl text-[#888888]">
          <a
            className="cursor-pointer hover:text-white transition-all duration-500"
            rel="noreferrer"
            target="_blank"
            href="#home"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:text-white transition-all duration-500"
            rel="noreferrer"
            target="_blank"
          >
            About
          </a>
          <a
            href="#works"
            className="cursor-pointer hover:text-white transition-all duration-500"
            rel="noreferrer"
            target="_blank"
          >
            Works
          </a>
          <a
            href="#clients"
            className="cursor-pointer hover:text-white transition-all duration-500"
          >
            Clients
          </a>
          <a
            href="#pricing"
            className="cursor-pointer hover:text-white transition-all duration-500"
            rel="noreferrer"
            target="_blank"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="cursor-pointer hover:text-white transition-all duration-500"
            rel="noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
