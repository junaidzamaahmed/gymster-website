import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css'

const Contact = () => {
    // History Hook
    let history = useHistory();
    // Push when submitted
    const handleSubmitClick = () => {
        history.push('/submitted')
    }
    return (
        <div id="contact" className="my-5 text-light">
            <h2 className="text-center py-3 fs-2"><span className="border-bottom text-light">Contact Us</span></h2>
            <p className="text-center">Submit your form, we'll get in touch with you very soon!</p>
            <div className='container'>
                <div className="form-floating mb-3 text-dark">
                    <input type="name" className="form-control" id="floatingInput" placeholder="First name" />
                    <label htmlFor="floatingInput">First name</label>
                </div>
                <div className="form-floating text-dark mb-3">
                    <input type="name" className="form-control" id="floatingPassword" placeholder="Last Name" />
                    <label htmlFor="floatingPassword">Last Name</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Explain your inquiry:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-flex">
                    <div className="form-floating text-dark mb-3 w-50 me-2">
                        <input type="name" className="form-control" id="floatingPassword" placeholder="Last Name" />
                        <label htmlFor="floatingPassword">Country</label>
                    </div>
                    <div className="form-floating text-dark mb-3 w-25 me-2">
                        <input type="name" className="form-control" id="floatingPassword" placeholder="Last Name" />
                        <label htmlFor="floatingPassword">City</label>
                    </div>
                    <div className="form-floating text-dark mb-3 w-25">
                        <input type="name" className="form-control" id="floatingPassword" placeholder="Last Name" />
                        <label htmlFor="floatingPassword">Zip Code</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Present address and/or Permanent address(if different)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        onClick={handleSubmitClick}
                    >
                        <i className="fas fa-info-circle"></i> Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;