import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';



const Login = () => {
    const { signInWithGoogle, createAccount, signIn } = useAuth();

    // Hooks
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    // Link hooks
    const history = useHistory();
    const location = useLocation();
    const redirected_url = location.state?.from || '/'

    // Toggle Signup and Login
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }

    // Input Handlers
    const handleNameInput = e => {
        setName(e.target.value)
    }
    const handlePasswordInput = e => {
        setPassword(e.target.value)
    }
    const handleEmailInput = e => {
        setEmail(e.target.value)
    }

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault()
        if (isLogin) {
            createAccount(email, password, name, redirected_url, history)
        }
        else {
            signIn(email, password, redirected_url, history)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center login-page-height">
            <div className="card-border-primary login-box text-light p-5 rounded">
                <h2 className="text-center py-3 fs-2"><span className="border-bottom text-light">{isLogin ? 'Register' : 'Login'}</span></h2>
                <Form onSubmit={handleSubmit}>
                    {isLogin &&
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={handleNameInput} required className="bg-black rounded-pill text-light" type="text" placeholder="Enter your name" />
                        </Form.Group>}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailInput} required className="bg-black rounded-pill text-light" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={handlePasswordInput} className="bg-black rounded-pill text-light" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="New user?" />
                    </Form.Group>
                    <div className="d-flex justify-content-center total font-weight-bold p-3">
                        <Button
                            className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                            type="submit"
                        >
                            <i className="fas fa-sign-in-alt"></i>{isLogin ? ' Register' : ' Login'}
                        </Button>
                    </div>
                </Form>
                <hr className="card-border-primary" />
                <div className="d-flex justify-content-center total font-weight-bold p-3">
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item"
                        type="submit"
                        onClick={() => signInWithGoogle(redirected_url, history)}
                    >
                        <i className="fab fa-google"></i> Sign In With Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;