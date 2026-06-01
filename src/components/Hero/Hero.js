import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero(props) {
    return (
        <section id="hero" className="hero section accent-background">
            {/* <!-- Hero Section --> */}
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 className={`text-${props.mode === 'dark'?"light":"dark"}`}>Better Work Experience With {props.projectTitle}</h1>
                    <p className={`text-${props.mode === 'dark'?"light":"dark"}`}>Connecting students with valuable industry experience for a brighter future.</p>
                    <div className={`d-flex btn-get-started-container text-${props.mode === 'dark'?"light":"dark"}`}>
                        <a href="#about" className={`btn-get-started text-${props.mode === 'dark'?"light":"dark"} border-${props.mode === 'dark'?"light":"dark"}`}>Get Started</a>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                </div>
            </div>
        </div>

    {/* <!-- /Hero Section --> */}
    </section>
    )
}

export default Hero
