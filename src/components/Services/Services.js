import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import "./Services.css";


const Services = () => {
    const {services}=useServices();
    // Services JSX
    return (
        <div className="my-5" id="services">
            <h2 className="text-center py-5 fs-1"><span className="border-bottom text-light">Our Services</span></h2>
            <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                {services.map(service=> <Service key={service.key} service={service}></Service>)}
            </div>
            </Container>
        </div>
    );
};

export default Services;