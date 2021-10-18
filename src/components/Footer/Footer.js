import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import payment from "../../images/payment.png";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-about">
                                <div className="footer-logo text-light fs-2">
                                    <img src={logo} alt="" />GYMSTER
                                </div>
                                <p className="footer-p">The Customer is at the heart of our unique bussiness model, which include design.</p>
                                <img src={payment} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h6>Social Media</h6>
                                <ul>
                                    <li><a className="footer-anchor" target="_blank" href="https://www.facebook.com/ItzXunaid/"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                                    <li><a className="footer-anchor" target="_blank" href="https://www.instagram.com/zamaa.aa/"><i className="fab fa-twitter"></i> Twitter</a></li>
                                    <li><a className="footer-anchor" target="_blank" href="https://www.instagram.com/zamaa.aa/"><i className="fab fa-instagram"></i> Instagram</a></li>
                                    <li><a className="footer-anchor" target="_blank" href="https://github.com/junaidzamaahmed/"><i className="fab fa-github"></i> Github</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2  col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h6>Links</h6>
                                <ul>
                                    <li><NavHashLink className="footer-anchor" to="/home#home">Home</NavHashLink></li>
                                    <li><NavHashLink className="footer-anchor" to="/home#services">Services</NavHashLink></li>
                                    <li><NavHashLink className="footer-anchor" to="/home#plans">Plans</NavHashLink></li>
                                    <li><NavHashLink className="footer-anchor" to="/home#about">About</NavHashLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h6>NewsLetter</h6>
                                <div className="footer-newslatter">
                                    <p className="footer-p">Be the first to know about new arrivals of equipments, promos and much more about Gymster!</p>
                                    <form action="#">
                                        <input type="text" placeholder="Your Email" />
                                        <button type="submit"><span><i className="fa fa-envelope"
                                            arial-hidden="true"></i></span></button>
                                    </form>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer-copyright-text">
                                <p className="footer-p">Copyright &copy; 2021 All rights reserved | This website is made with <i className="fa fa-heart-o" arial-hidden="true"></i> {' '}
                                    by <a target="_blank" className="footer-anchor" href="https://www.instagram.com/zamaa.aa/">Junaid Ahmed Zama</a></p>
                            </div>
                        </div>
                    </div>


                </div>

            </footer>
        </div>
    );
};

export default Footer;