import React, { Component } from 'react';
import {Typewriter} from 'react-simple-typewriter';
import "./Hero.css"
class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showParagraph: false,
        };
    }

    componentDidMount() {
        // After the typewriter animation completes (after 2 seconds), show the paragraph
        setTimeout(() => {
            this.setState({ showParagraph: true });
        }, 1300); // Adjust the timeout duration based on the duration of your typewriter animation
    }

    render() {
        return (
            <>
            <div className="relative flex flex-col items-center justify-center h-dvh  bg-white1 rounded-lg">
                {/*<div className="text-center">*/}
                    {/* Typewriter component */}
                    <h1 className="font-satoshi md:text-7xl text-5xl md:m-0 m-4">
                        <Typewriter
                            words={['Hellooo , I\'m Dat Nguyen']}
                            loop={1}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={100}
                            delaySpeed={10}
                        />
                    </h1>

                    {/* Conditional rendering of paragraph */}
                    {this.state.showParagraph && (
                        <p className="absolute bottom-1/3 font-satoshi text-center text-2xl  my-9 fade1">
                            Front-end Dev
                        </p>
                    )}
                {/*</div>*/}
            </div>
            </>
        );
    }
}

export default Hero;
