import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div className="h-full bg-gray1">
        <div className="md:px-14 md:py-10 px-7 py-14 ">
          <Fade
            direction="left"
            triggerOnce="true"
            className="text-4xl text-black md:text-5xl font-body "
          >
            About me
          </Fade>
        </div>
        <div className="flex flex-col justify-between gap-10 xl:flex-row md:gap-4 md:px-14 px-7">
          <Fade
            direction="up"
            triggerOnce="true"
            duration="1000"
            className=" flex items-center md:w-[700px] w-full "
          >
            {/*About section*/}
            <p className="font-serif text-lg leading-loose text-black1 md:text-2xl ">
              I'm Dat Nguyen, a front-end dev enthusiast passionate about
              crafting engaging web experiences. With a strong foundation in
              HTML, CSS, and JavaScript, I thrive on continuously learning and
              mastering new technologies to bring creative ideas to life. Let's
              build something amazing together!
            </p>
          </Fade>

          <div className="flex flex-col justify-between gap-6 px-0 py-0 overflow-hidden md:px-16">
            <div className="flex justify-between w-full gap-4 md:gap-16">
              <span className=" btn-skill">HTML</span>
              <span className=" btn-skill">CSS</span>
              <span className="btn-skill">Javascript</span>
            </div>
            <div className="flex justify-center w-full gap-20">
              <span className="btn-skill">Tailwind</span>
              <span className="btn-skill">React</span>
            </div>
            <div className="flex justify-between w-full gap-20">
              <span className="btn-skill">NodeJS</span>
              <span className="btn-skill">MongoDB</span>
            </div>
            <div className="flex w-full gap-20 justify-evenly">
              <span className="btn-skill">Git</span>
              <span className="btn-skill">Github</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
