import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

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



    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        //console.log(email, password)
        await signInWithEmailAndPassword(email, password)


        const { data } = await axios.post('http://localhost:5000/login', { email })
        //console.log(data.assessToken)
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate(from, { replace: true });
    }



    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {

        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please give your email address')
        }


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

            <p>Forget Password ?? <button onClick={resetPassword} className='text-danger p-auto btn btn-link'>Reset Here</button></p>
            {errorElement}
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;