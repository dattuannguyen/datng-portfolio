import React from "react";
import "./About.css"
const About =()=>{
    return(
        <>
            <div className="h-full bg-gray1">
                <div className="px-14 py-10 ">
                    <h1 className="text-5xl text-black font-body ">
                        About me
                    </h1>
                </div>
                <div className=" flex gap-4  px-14">
                    <div className="w-1/2 flex items-center ">
                        {/*About section*/}

                        <p className="text-black1 text-2xl font-serif leading-loose ">
                            I'm Dat Nguyen, a self-taught front-end enthusiast passionate about crafting engaging web experiences.
                            With a strong foundation in HTML, CSS, and JavaScript, I thrive on continuously learning and mastering new technologies to bring creative ideas to life.
                            Let's build something amazing together!
                        </p>
                    </div>
                    <div className="flex  flex-col justify-between py-0 px-16 gap-6">
                        <div className="w-full flex gap-16 justify-between">
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