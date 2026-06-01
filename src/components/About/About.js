import React from 'react'
import "./About.css";

function About(props) {
    return (
        <section id="about" className={`bg-${props.mode === 'dark' ? "light" : "dark"}`}>
            {/* < !--About Section-- > */}
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <h1 className={`text-${props.mode === 'light' ? "light" : "dark"}`}>About Us</h1>
                    <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
                        <h3 className={`text-${props.mode === 'light' ? 'light' : 'dark'}`}>
                            College Engineering
                        </h3>
                        <p className={`fst-italic text-${props.mode === 'light' ? 'light' : 'dark'}`}>
                            College Engineering, is one of the premier engineering colleges in Maharashtra, known for its excellence in technical education and research.
                        </p>
                        <p className={`text-${props.mode === 'light' ? 'light' : 'dark'}`}>
  Our Internship Management System is designed to bridge the gap between students and industry by streamlining the internship application and management process. It ensures seamless communication between students, faculty, and companies, making it easier to track progress and outcomes. This system empowers students to gain real-world experience and enhances their professional development.
</p>

<ul>
    <li className={`text-${props.mode === 'light' ? "light" : "dark"}`}>
        <i className="bi bi-check-circle me-1"></i> 
        <span>
            Streamlines internship management and communication.
        </span>
    </li>
    <li className={`text-${props.mode === 'light' ? "light" : "dark"}`}>
        <i className="bi bi-check-circle me-1"></i> 
        <span>
            Tracks progress and ensures real-world experience.
        </span>
    </li>
    <li className={`text-${props.mode === 'light' ? "light" : "dark"}`}>
        <i className="bi bi-check-circle me-1"></i> 
        <span>
            Empowers students and enhances professional growth.
        </span>
    </li>
    <li className={`text-${props.mode === 'light' ? "light" : "dark"}`}>
        <i className="bi bi-check-circle me-1"></i>
        <span>
            Provides user-friendly interface for internship management.
        </span>
    </li>
    <li className={`text-${props.mode === 'light' ? "light" : "dark"}`}>
        <i className="bi bi-check-circle me-1"></i>
        <span>
            Fosters industry-academic collaboration for better career readiness.
        </span>
    </li>
</ul>


                        {/* <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a> */}
                    </div>

                </div>

            </div>

            {/* <!-- /About Section --> */}
        </section>
    )
}

export default About
