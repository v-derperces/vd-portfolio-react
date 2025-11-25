import React from 'react';

function About() {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row items-center justify-between mb-3">
                <div className="pe-md-5 d-flex align-items-center">
                    <p className="fs-5">
                        I'm learning web development because I enjoy finding solutions to problems and adding my
                        personal touch to meaningful projects.
                        <br/><br/>
                        Having studied literature before diving into the world of web development, I've
                        developed a critical mindset that helps me take a step back and find the best possible
                        solutions.
                    </p>
                </div>
                <div className="text-center">
                    <img src="/assets/images/work.svg" alt="Illustration of a woman coding"/>
                </div>
            </div>
            <p className="fs-5 mb-4">
                My goal? To keep learning and building useful, thoughtful projects.
            </p>
            <p className="fs-5 fw-bold text-ikigai">That's my <span>IKIGAI</span>.</p>
        </div>
    );
}

export default About;
