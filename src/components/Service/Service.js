import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({key,service}) => {
    const {title,short_desc,img}=service;
    return (
        <div className="col">
            <div className="card bg-black card-border h-100">
                <img src={img} className="w-100 image-border gray-scale" alt="working out" />
                <div className="about-product text-center mt-2 p-3">
                    <div>
                        <h4 className="bebas-font mb-2">{title}</h4>
                        <p className="pimary-text"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                    </div>
                </div>
                <div className="stats px-3 text-center h-100">
                    <p>{short_desc}</p>
                </div>
                <div className="d-flex justify-content-center total font-weight-bold p-3">
                    <NavLink
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        to="/"
                    >
                        <i className="fas fa-info-circle"></i> Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;