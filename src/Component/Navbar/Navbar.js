import React from "react";
import instagram from './instagram.png'
import facebook from './facebook-app-symbol.png'
import linkedin from './linkedin.png'
import github from './github.png'
const Navbar = ()=>{
    return (
        <>
            <div className="bg-gray1 text-black flex justify-between items-center h-24 px-5 py-5">
                {/*<img src={logo} alt="logo " className="w-28 h-28"/>*/}
                <h1 className="text-6xl font-logo">Datng</h1>
                <div>
                    <ul className='flex font-body gap-7 m-16'>
                        <li>
                            <a href="/">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li>
                            <a href="/">
                                <img src={facebook} alt="" className='w-7 h-7'/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={instagram} alt="" className='w-7 h-7'/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={linkedin} alt="" className='w-7 h-7'/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={github} alt="" className='w-7 h-7'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;