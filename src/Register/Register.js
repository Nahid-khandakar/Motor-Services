import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from '../pages/Login/SocialLogin/SocialLogin';
import Loading from '../pages/Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false)
    console.log(agree)

    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);


    if (user) {
        console.log('user', user)
    }


    if (updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.trems.checked
        // //console.log(name, email, password)


        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        navigate('/home')
        console.log('updateProfile')

    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' />
                <input type="password" name="password" id="" placeholder='your password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={agree ? 'ps-2 text-success' : 'ps-2 text-danger'} htmlFor="terms">Accepts Terms and Conditions</label>
                <input disabled={!agree} type="submit" value="Register" className='w-50 btn btn-success mx-auto' />
            </form>

            <p>Already have a account?? <Link to='/login' onClick={navigateLogin} className='text-danger p-auto'>Login Here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;