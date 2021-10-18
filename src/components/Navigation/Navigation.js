import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import './Navigation.css'

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
                            <NavLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/home"
                                activeClassName="primary-text border-bottom"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/services"
                                activeClassName="primary-text border-bottom"
                            >
                                Services
                            </NavLink>
                            <NavLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/contact"
                                activeClassName="primary-text border-bottom"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                className="text-light text-decoration-none mx-3 nav-item nav-links"
                                to="/about"
                                activeClassName="primary-text border-bottom"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;