import React from "react";
import "./About.css"
import {Fade} from "react-awesome-reveal";

const About =()=>{
    return(
        <>
            <div className="h-full bg-gray1">
                <div className="md:px-14 md:py-10 px-7 py-14 ">
                    <Fade direction="left" triggerOnce="true" className="text-4xl md:text-5xl text-black font-body ">
                        About me
                    </Fade>
                </div>
                <div className=" flex flex-col md:flex-row justify-between md:gap-4 gap-10 md:px-14 px-7">
                    <Fade direction="up" triggerOnce="true" duration="1000"  className=" flex items-center md:w-[700px] w-full ">
                        {/*About section*/}
                        <p className="text-black1 md:text-2xl text-lg font-serif leading-loose ">
                            I'm Dat Nguyen, a self-taught front-end enthusiast passionate about crafting engaging web experiences.
                            With a strong foundation in HTML, CSS, and JavaScript, I thrive on continuously learning and mastering new technologies to bring creative ideas to life.
                            Let's build something amazing together!
                        </p>
                    </Fade>

                    <div className="flex flex-col justify-between py-0 md:px-16 px-0 gap-6 overflow-hidden">
                        <div className="w-full flex md:gap-16 gap-4 justify-between">
                            <span className=" btn-skill">HTML</span>
                            <span className="  btn-skill">CSS</span>
                            <span className="btn-skill">Javascript</span>

                        </div>
                        <div className="w-full flex gap-20 justify-center">
                            <span className="btn-skill">Tailwind</span>
                            <span className="btn-skill">React</span>
                        </div>
                        <div className="w-full flex gap-20 justify-between">
                            <span className="btn-skill">NodeJS</span>
                            <span className="btn-skill">MongoDB</span>
                        </div>
                        <div className="w-full flex gap-20 justify-evenly">
                            <span className="btn-skill">Git</span>
                            <span className="btn-skill">Github</span>
                        </div>
                    </div>
            </div>

            </div>
        </>
)
}

export default About