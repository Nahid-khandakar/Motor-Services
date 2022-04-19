import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (loading) {
        return <Loading></Loading>
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {

        return <div className='text-warning'>
            <h3 className='mt-5 text-center'>Your email is not verified</h3>
            <h3 className='text-center'>Please try again</h3>

            <button className='w-25 d-block mx-auto btn btn-danger'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                sent again
            </button>
            <ToastContainer />
        </div>


    }

    return children;
};

export default RequireAuth;