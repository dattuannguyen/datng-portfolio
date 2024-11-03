import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-6 text-black bg-gray1 h-28 md:px-14 md:py-6">
        <h1 className="text-5xl md:text-6xl font-logo">Datng</h1>
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button className="transition duration-500 ease-out border-2 btn text-black1 border-black1 hover:bg-black1 hover:text-white">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
