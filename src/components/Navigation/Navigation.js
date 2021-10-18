import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import './Navigation.css';
import { NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" className="w-100 absolute pt-4">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        GYMSTER
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div id="nav-responsive">
                            <NavHashLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home#home"
                                activeClassName="primary-text border-bottom"
                            >
                                Home
                            </NavHashLink>
                            <NavHashLink
                                smooth
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home#services"
                                activeClassName="primary-text border-bottom"
                            >
                                Services
                            </NavHashLink>
                            <NavHashLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home#plans"
                                activeClassName="primary-text border-bottom"
                            >
                                Plans
                            </NavHashLink>
                            <NavHashLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home#contact"
                                activeClassName="primary-text border-bottom"
                            >
                                Contact
                            </NavHashLink>
                            <NavHashLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home#about"
                                activeClassName="primary-text border-bottom"
                            >
                                About
                            </NavHashLink>
                            <NavLink
                                className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                                to="/login"
                            >
                                <i className="fas fa-sign-in-alt"></i> Login
                            </NavLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;