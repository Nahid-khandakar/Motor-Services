import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Register = () => {

    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value

        //console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' />
                <input type="password" name="password" id="" placeholder='your password' />
                <input type="submit" value="Register" />
            </form>

            <p>Already have a account?? <Link to='/login' onClick={navigateLogin} className='text-danger p-auto'>Login Here</Link></p>
        </div>
    );
};

export default Register;