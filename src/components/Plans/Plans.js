import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Plans.css";

const Plans = () => {

    // Hooks
    let history = useHistory();

    // Purchase click handler
    const handlePurchaseClick = () => {
        history.push('/subscribed')
    }
    return (
        <div id="plans" className="bg-dark py-5">
            <Container>
                <h2 className="text-center py-5 fs-1"><span className="border-bottom text-light">Our Subscription Plans</span></h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-light bg-dark text-center">
                    <div className="col">
                        <div className="card card-border-primary rounded bg-dark h-100">
                            <span className="text-center w-50 container primary-background text-light rounded-bottom bebas-font fs-5">1 Month</span>
                            <div className="card-body">
                                <h5 className="card-title mb-4">Facilities</h5>
                                <p className="card-text"><i className="far fa-times-circle primary-text"></i> Save 0%</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> 12PM - 6PM</p>
                                <hr />
                                <p className="card-text"><i className="far fa-times-circle primary-text"></i> Special Equipments</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Personal Trainer</p>
                                <h3 className="bebas-font mt-4">Price : $9.99</h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center total font-weight-bold p-3">
                                    <Button
                                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item mb-3"
                                        onClick={handlePurchaseClick}
                                    >
                                        <i className="fas fa-info-circle"></i> Purchase
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-border-primary rounded bg-dark h-100">
                            <span className="text-center w-50 container primary-background text-light rounded-bottom bebas-font fs-5">6 Months</span>
                            <div className="card-body">
                                <h5 className="card-title mb-4">Facilities</h5>
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Save 25%</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> 8AM - 8PM</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Special Equipments</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Special Personal Trainer</p>
                                <h3 className="bebas-font mt-4">Price : $44.99</h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center total font-weight-bold p-3">
                                    <Button
                                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item mb-3"
                                        onClick={handlePurchaseClick}
                                    >
                                        <i className="fas fa-info-circle"></i> Purchase
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-border-primary rounded bg-dark h-100">
                            <span className="text-center w-50 container primary-background text-light rounded-bottom bebas-font fs-5">Annual</span>
                            <div className="card-body">
                                <h5 className="card-title mb-4">Facilities</h5>
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Save 35%</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> 24/7</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Special Equipments</p>
                                <hr />
                                <p className="card-text"><i className="fas fa-check-circle primary-text"></i> Special Personal Trainer</p>
                                <h3 className="bebas-font mt-4">Price : $77.99</h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center total font-weight-bold p-3">
                                    <Button
                                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item mb-3"
                                        onClick={handlePurchaseClick}
                                    >
                                        <i className="fas fa-info-circle"></i> Purchase
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Plans;