import React from "react"
import github from "./icons8-github.svg"
import linkedin from "./icons8-linkedin.svg"
import gmail from "./icons8-gmail.svg"
import { Link, Element } from 'react-scroll';
const Contact = () =>{
    return(
        <>
            <Element name='contact'>
                <div className="relative bg-white1 h-screen">
                    {/*first div ist the header*/}
                    <div className="px-14 pt-24 ">
                        <h1 className="text-5xl text-black font-body" >Contact</h1>
                    </div>

                    <div className="flex items-center justify-center mx-14 my-14">
                        {/*wrap the whole content in Contact*/}
                        <div className="flex-1 flex-col items-stretch ">
                            {/*left content*/}
                            <p className="pb-10 font-body text-xl">
                                // Submit the form below or shoot me an email - dat.nt0609@gmail.com
                            </p>
                            <form method="POST" action="https://getform.io/f/paygjyxa" className="flex flex-col justify-center direction w-[700px]">
                                <input className="bg-gray1 p-2" type="text" placeholder="Name" name="name"/>
                                <input className="my-4 p-2 bg-gray1" type="email" placeholder="Email" name="email"/>
                                <textarea className="bg-gray1 p-2" name="message" rows="10" placeholder="Message"></textarea>
                                <button className="btn-live my-4 text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Send me</button>
                            </form>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center ">
                            {/*right content*/}
                            <p className="pb-10">Or you can find me on other social media platforms like </p>
                            <div className="relative flex gap-10 ">
                                <a href="">
                                    <img src={github} alt="" className="rounded-full w-24 h-24"/>
                                </a>
                                <a href="">
                                    <img src={linkedin} alt="" className="rounded-full w-24 h-24"/>
                                </a>
                                <a href="mailto:dat.nt0609@gmail.com.com" target="_blank">
                                    <img src={gmail} alt="" className="rounded-full w-24 h-24"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-2">
                        <p className="text-4xl font-body">2024,Augsburg,Germany</p>
                    </div>
                </div>
            </Element>
        </>
    )
}



export default Contact;