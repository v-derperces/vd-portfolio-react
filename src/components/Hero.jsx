import React from 'react';

function Hero() {
    return (
        <div id="home" className="hero-img vh-100 d-flex align-items-center text-center">
            <div className="text-white w-100 p-md-5 row">
                <h1 className="col text-nowrap">Hi, I'm Viviane Derperces</h1>
                <p className="h1">a curious and resourceful</p>
                <div className="position-relative d-flex justify-content-center mirror col fs-1">
                    <div> FULL-STACK DEVELOPER</div>
                    <div className="position-absolute text-mirror"> FULL-STACK DEVELOPER</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
