import React from 'react';
import { NavLink } from 'react-router-dom';

const Subscribed = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center login-page-height flex-column">
                <h1 className="primary-text bebas-font"><i class="fas fa-check-circle"></i> Congratulations!</h1>
                <p className="text-light fs-3 text-center">You have successfully subscribed to the package!</p>
                <p className="text-light fs-3 text-center">You can join us TODAY!</p>
                <div className="d-flex justify-content-center">
                    <NavLink
                        className="mb-5 primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        to="/home"
                    ><i className="fas fa-home"></i> Return Home
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Subscribed;