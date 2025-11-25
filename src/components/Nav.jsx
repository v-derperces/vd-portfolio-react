import React from 'react';

function Nav() {
    return (
        <nav id="navbar"  className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="/assets/images/logo.svg" alt="Logo img"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasPortfolio" aria-controls="offcanvasPortfolio"
                        aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasPortfolio"
                     aria-labelledby="offcanvasPortfolioLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasPortfolioLabel">Navigation</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-white">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav