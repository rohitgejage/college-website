import React from 'react'
import './Footer.css';

function Footer(props) {
    const footerBg = props.mode === 'light' ? 'bg-dark' : 'bg-light';
    const footerTextColor = props.mode === 'light' ? 'text-dark' : 'text-light';
    return (
        <footer id="footer" className="footer accent-background">

            <div className="container footer-top">
                <div className="row gy-4 justify-content-evenly">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className={`${footerTextColor}`}>{props.projectTitle}</span>
                        </a>
                        <p className={`${footerTextColor}`}>Empowering the next generation of professionals through seamless internship opportunities.</p>
                        <div className="social-links d-flex mt-4">
                            <a href="" className={`${footerTextColor} border-${props.mode == "dark"? "light" : "dark"}`}><i className="bi bi-twitter-x"></i></a>
                            <a href="" className={`${footerTextColor} border-${props.mode == "dark"? "light" : "dark"}`}><i className="bi bi-facebook"></i></a>
                            <a href="" className={`${footerTextColor} border-${props.mode == "dark"? "light" : "dark"}`}><i className="bi bi-instagram"></i></a>
                            <a href="" className={`${footerTextColor} border-${props.mode == "dark"? "light" : "dark"}`}><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4 className={`${footerTextColor}`}>Useful Links</h4>
                        <ul>
                            <li><a href="#" className={`${footerTextColor}`}>Home</a></li>
                            <li><a href="#" className={`${footerTextColor}`}>About us</a></li>
                            <li><a href="#" className={`${footerTextColor}`}>Terms of service</a></li>
                            <li><a href="#" className={`${footerTextColor}`}>Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4 className={`${footerTextColor}`}>Contact Us</h4>
                        <p className={`${footerTextColor}`}>College Engineering</p>
                        <p className={`${footerTextColor}`}>Pune, Maharashtra</p>
                        <p className={`${footerTextColor}`}>India</p>
                        <p className={`${footerTextColor} mt-4`}><strong>Phone:</strong> <span>xxxxxxxxx</span></p>
                        <p className={`${footerTextColor}`}><strong>Email:</strong> <span>info@rohan.edu</span></p>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p className={`${footerTextColor}`}>© <span>Copyright</span> <strong className="px-1 sitename">{props.projectTitle}</strong> <span>All Rights Reserved</span></p>
                <div className={`${footerTextColor} credits`}>
                    Designed by <a href="" className={`${footerTextColor}`}>G11</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
