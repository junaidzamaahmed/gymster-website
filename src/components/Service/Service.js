import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useHistory  } from 'react-router-dom';

const Service = ({service}) => {
    const {key,title,short_desc,img}=service;
    let history = useHistory();
    const handleDetailsClick=(e)=>{
        e.preventDefault();
        history.push('/service/'+key)
    }


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
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        onClick={handleDetailsClick}
                    >
                        <i className="fas fa-info-circle"></i> Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Service;