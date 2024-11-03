import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Contact />
      </>
    );
  }
}

export default App;
