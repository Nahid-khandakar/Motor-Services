import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        //console.log(email, password)
        signInWithEmailAndPassword(email, password)

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    if (user) {
        navigate(from, { replace: true });
    }



    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {

        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }



    return (
        <div className='container w-50 mx-auto '>
            <h1 className='text-danger text-center mt-3'>login here</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit" className='w-50 d-block mx-auto p-2'>
                    Login
                </Button>
            </Form>

            <p>New in Motor Services?? <Link to='/register' onClick={navigateRegister} className='text-danger p-auto'>Register Here</Link></p>

            <p>Forget Password ?? <Link to='/register' onClick={resetPassword} className='text-danger p-auto'>Reset Here</Link></p>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;