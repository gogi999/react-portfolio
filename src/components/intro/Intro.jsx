import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ['Developer', 'Designer', 'Content Creator']
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Goran Petrovic</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}

export default Intro;
