import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hook/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)


    const [user] = useAuthState(auth);
    //just for learning

    // const [user, setUser] = useState({
    //     name: 'nahid',
    //     email: 'q@mail.com',
    //     address: 'New Market',
    //     phone: '0147852'
    // })

    // const handleAddressChange = event => {
    //     const { address, ...rest } = user
    //     const newAddress = event.target.value
    //     const newUser = { address: newAddress, ...rest }
    //     setUser(newUser)
    //     console.log(newUser)
    // }

    const handlePlaceOrder = event => {
        event.preventDefault()

        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://sleepy-mountain-64974.herokuapp.com/order ', order)
            .then(res => {
                const { data } = res
                if (data.insertedId) {
                    toast('your order is accepted')
                    event.target.reset()
                }
            })

    }

    return (
        <div className='w-50 mx-auto'>
            <h2>confirm your checkout : {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3' value={user?.displayName} type="text" name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' value={user?.email} type="email" name='email' placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' value={service.name} type="text" name='service' placeholder='service' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-3' type="number" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-success d-block mx-auto' type="submit" value="place order" />
            </form>
        </div>
    );
};

export default CheckOut;