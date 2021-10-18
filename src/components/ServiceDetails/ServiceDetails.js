import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { title } = useParams();
    const { services } = useServices();
    const service = services.find(srvc => srvc.key === title)
    console.log(service)
    return (
        <div >
            <div>
                <img
                    style={{
                        height: "50vh",
                        objectFit: "cover"
                    }}
                    className="gray-scale w-100" src={service?.img} alt="" />
            </div>
            <div className="text-center text-light d-flex justify-content-center flex-column">
                <h1 className="primary-text bebas-font my-3"><span className="border-bottom">{service?.title}</span></h1>
                <p className="my-3 primary-text"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                <p className="d-flex justify-content-center container my-4">{service?.desc}</p>
                <div className="d-flex justify-content-center">
                <NavLink
                    className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                    to="/home"
                ><i className="fas fa-home"></i> Return Home
                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;