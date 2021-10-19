import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css';



const Login = () => {
    const {signInWithGoogle}=useAuth();
    return (
        <div className="d-flex justify-content-center align-items-center login-page-height">
            <div className="card-border-primary login-box text-light p-5 rounded">
                <h2 className="text-center py-3 fs-2"><span className="border-bottom text-light">Login</span></h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="bg-black rounded-pill text-light" type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="bg-black rounded-pill text-light" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="New user?" />
                    </Form.Group>
                    <div className="d-flex justify-content-center total font-weight-bold p-3">
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        type="submit"
                    >
                        <i class="fas fa-sign-in-alt"></i> Login
                    </Button>
                </div>
                </Form>
                    <hr className="card-border-primary"/>
                    <div className="d-flex justify-content-center total font-weight-bold p-3">
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        type="submit"
                        onClick={signInWithGoogle}
                    >
                        <i class="fab fa-google"></i> Sign In With Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;