import React from "react";
import "./Navbar.css"
import { Link, Element } from 'react-scroll';
const Navbar = ()=>{
    return (
        <>
            <div className="bg-gray1 text-black flex justify-between items-center h-28 md:px-14 md:py-6 px-4 py-6">
                <h1 className="text-5xl md:text-6xl font-logo">Datng</h1>
                <div>
                    <Link to="contact" smooth={true} duration={500}>
                        <a href="#" className="btn text-black1 border-black1 border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Contact</a>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Navbar;