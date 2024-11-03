import React from "react";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import gmail from "./gmail.svg";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <Element name="contact">
        <div className="relative min-h-screen bg-white1">
          {/*first div ist the header*/}
          <Fade
            direction="left"
            triggerOnce="true"
            className="md:px-14 md:py-14 px-7 py-14 "
          >
            <h1 className="text-4xl text-black md:text-5xl font-body">
              Contact
            </h1>
          </Fade>

          <div className="flex flex-col items-center justify-center xl:flex-row mx-14 mb-14">
            {/*wrap the whole content in Contact*/}
            <Fade direction="left">
              <div className="flex-col items-stretch flex-1 ">
                {/* left content */}
                <p className="pb-10 text-lg font-body md:text-xl">
                  // Submit the form below or shoot me an email -
                  dat.nt0609@gmail.com
                </p>
                <form
                  method="POST"
                  action="https://getform.io/f/paygjyxa"
                  className="flex flex-col justify-center direction max-w-[700px]"
                >
                  <input
                    className="p-2 bg-gray1"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="p-2 my-4 bg-gray1"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <textarea
                    className="p-2 bg-gray1"
                    name="message"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                  <button className="my-4 text-white transition duration-500 ease-out btn-live hover:text-black1 hover:bg-white1 border-black1 md:border-2 bg-black1">
                    Send me
                  </button>
                </form>
              </div>
            </Fade>

            <div className="flex flex-col items-center justify-center flex-1 ">
              {/*right content*/}
              <Fade direction="up">
                <p className="pb-10 text-lg md:text-2xl">
                  Or you can find me on other social media platforms like{" "}
                </p>
                <div className="relative flex gap-10 ">
                  <a
                    href="https://github.com/dattuannguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt=""
                      className="w-16 h-16 rounded-full md:w-24 md:h-24"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/datng0609/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt=""
                      className="w-16 h-16 rounded-full md:w-24 md:h-24"
                    />
                  </a>
                  <a
                    href="mailto:dat.nt0609@gmail.com.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={gmail}
                      alt=""
                      className="w-16 h-16 rounded-full md:w-24 md:h-24"
                    />
                  </a>
                </div>
              </Fade>
            </div>
          </div>

          {/* <Fade direction="down" className="absolute bottom-3 right-2">
            <p className="text-3xl md:text-5xl font-logo">
              2024,Augsburg,Germany
            </p>
          </Fade> */}
        </div> 
      </Element>
    </>
  );
};

export default Contact;
