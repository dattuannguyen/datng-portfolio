import React from "react";
import brain from "./Magic Brain .png"
import robofriend from "./RoboFriends.png"
import loop from "./Loopstudios-landing-page.png"
import rating from "./Interactive Rating Component .png"
import card from "./Interactive-card-details-form.png"
import notification from "./Notifications-page.png"
import restaurant from "./1997. restaurant.png"
import "./Project.css"
import {Fade} from "react-awesome-reveal";

const Project = () =>{
    return(
        <>
            <div className=" bg-gray1 pb-28">
                <Fade direction="left" triggerOnce="true" className="md:px-14 md:py-28 px-7 py-14">
                    <h1 className="md:text-5xl text-4xl text-black font-body" >Project</h1>
                </Fade>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    <Fade delay="5">
                        <div className="project group">
                            {/*1 project*/}
                            <img src={restaurant} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">
                                    Introducing the 1997. Restaurant Landing Page:
                                    a responsive and interactive web application built with React and Tailwind CSS.
                                    This project showcases a modern design, smooth animations, and an intuitive user interface for an enhanced dining reservation experience.
                                </div>
                                <div  className=" flex justify-center items-center gap-20 m-2 ">
                                    <a href="https://restaurant-reservation-emgb.onrender.com/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/restaurant-reservation" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="project group">
                            {/*2. project*/}
                            <img src={brain} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">
                                    Introducing the Smart Brain project:
                                    This is the final full-stack project of the ZTM learning program, utilizing the Clarifai API to detect human faces in images.
                                    The project includes a registration page to store user data in the database and subsequently allows users to sign in and use the web application.
                                </div>
                                <div className=" flex justify-center items-center gap-20  ">
                                    <a href="https://face-rec-u55m.onrender.com" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/face-rec" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="project group">
                            {/*3.project*/}
                            <img src={robofriend} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">
                                    Introducing the Robofriends project:
                                    Another interesting small project in the ZTM learning program. This project utilizes the simple Robohash API to generate names for various robot characters.
                                </div>
                                <div  className=" flex justify-center items-center gap-20 m-2 ">
                                    <a href="https://dattuannguyen.github.io/robofriends/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/robofriends" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>

                        <div className="project group">
                            {/*4 project*/}
                            <img src={rating} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">

                                    Introducing the Basic Interactive Rating Card project: Developed an interactive rating component allowing users to rate their experience on a scale of 1 to 5. The project features real-time feedback upon submission and a thank-you message.
                                </div>
                                <div  className=" flex justify-center items-center gap-20 m-2 ">
                                    <a href="https://dattuannguyen.github.io/interactive-rating/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/interactive-rating" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="project group">
                            {/*5 project*/}
                            <img src={card} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">
                                    Introducing the Bank Card project: This project allows users to enter and validate credit card details in real-time, using HTML, CSS, and JavaScript.
                                    The form includes features like live validation feedback and a confirmation message upon successful submission.
                                </div>
                                <div  className=" flex justify-center items-center gap-20 m-2 ">
                                    <a href="https://dattuannguyen.github.io/interactive-card-details-form/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/interactive-card-details-form" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>
                        <div className="project group">
                            {/*6 project*/}
                            <img src={notification} alt="" className="img "/>
                            <div className="relative flex flex-col justify-between p-10 bg-white1 ">
                                <div className="description rounded-full">
                                    Introducing the Notifications Page
                                    project: Created a dynamic notifications page that displays user interactions in a clean, responsive layout. This project features real-time updates and interactive elements, providing users with immediate feedback on their actions. Built using HTML, CSS, and JavaScript to ensure a seamless user experience.
                                </div>
                                <div  className=" flex justify-center items-center gap-20 m-2 ">
                                    <a href="https://dattuannguyen.github.io/notifications-page/" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Live</a>
                                    <a href="https://github.com/dattuannguyen/notifications-page" target="_blank" className="btn-live text-black1 border-black1 md:border-2 hover:bg-black1 hover:text-white transition ease-out duration-500">Source</a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>

        </>
    )
}



export default Project