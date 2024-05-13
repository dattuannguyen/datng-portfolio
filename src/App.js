import './App.css';
import React, {Component} from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact"


class App extends Component{
    render() {
        return(
            <>
                <Navbar/>
                <Hero/>
                <About/>
                <Project/>
                <Contact/>
            </>
        )
    }


}

export default App;
