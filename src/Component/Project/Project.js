import React from "react";
import brain from "./Magic Brain .png"
import robofriend from "./RoboFriends.png"
import loop from "./Loopstudios-landing-page.png"
import rating from "./Interactive Rating Component .png"
import card from "./Interactive-card-details-form.png"
import notification from "./Notifications-page.png"
import "./Project.css"
const Project = () =>{
    return(
        <>
            <div className=" bg-gray1 pb-28">
                <div className="px-14 py-28">
                    <h1 className="text-5xl text-black font-body" >Project</h1>
                </div>
                <div className="flex flex-col gap-16">
                    <div className="project">
                        {/*first project*/}
                        <img src={brain} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">
                                This is the final full-stack project of the ZTM learning program, utilizing the Clarifai API to detect human faces in images.
                                The project includes a registration page to store user data in the database and subsequently allows users to sign in and use the web application.
                            </div>
                            <div className=" flex justify-center items-center gap-20  ">
                                <a href="https://face-rec-u55m.onrender.com" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/face-rec" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        {/*2project*/}
                        <img src={robofriend} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">
                                Welcome to another captivating project within the ZTM course, where we delve into the realm of APIs to embark on an adventure in search of fascinating robots. Through the utilization of various APIs,
                                we aim to uncover a diverse array of intriguing robotic entities, each with its own unique characteristics and functionalities
                            </div>
                            <div  className=" flex justify-center items-center gap-20 m-2 ">
                                <a className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/robofriends" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        {/*3 project*/}
                        <img src={loop} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">
                                Introducing the Loop Landing page project:
                                an exercise aimed at enhancing proficiency in utilizing layout grid and flexbox techniques using basic HTML, CSS, and JavaScript.
                            </div>
                            <div  className=" flex justify-center items-center gap-20 m-2 ">
                                <a href="https://dattuannguyen.github.io/loopstudios-landing-page/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/loopstudios-landing-page" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        {/*4 project*/}
                        <img src={rating} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">

                                Introducing the Basic Interactive Rating Card project: Utilizing HTML, CSS, and JS, this endeavor aims to create an engaging component for interactive rating experiences,
                                enhancing user interaction and interface aesthetics.
                            </div>
                            <div  className=" flex justify-center items-center gap-20 m-2 ">
                                <a href="https://dattuannguyen.github.io/interactive-rating/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/interactive-rating" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        {/*5 project*/}
                        <img src={card} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">
                                Introducing the Bank Card project: This engaging project offers an excellent opportunity to hone your skills in DOM manipulation and form validation.
                                Put your HTML and CSS expertise to the test while enhancing your understanding of web development fundamentals.
                            </div>
                            <div  className=" flex justify-center items-center gap-20 m-2 ">
                                <a href="https://dattuannguyen.github.io/interactive-card-details-form/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/interactive-card-details-form" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        {/*6 project*/}
                        <img src={notification} alt="" className="w-2/5 h-auto rounded "/>
                        <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                            <div className="description rounded-full">
                                Introducing the Notifications Page
                                project: his project serves as a comprehensive assessment of HTML, CSS, and fundamental JavaScript abilities.
                                Explore interactive notification toggling and sharpen your front-end development prowess
                            </div>
                            <div  className=" flex justify-center items-center gap-20 m-2 ">
                                <a href="https://dattuannguyen.github.io/notifications-page/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                <a href="https://github.com/dattuannguyen/notifications-page" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}



export default Project