import React from 'react';
import useServices from '../../hook/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()


    const handleDelete = (id) => {
        console.log(id)

        const proceed = window.confirm('r u sure')

        if (proceed) {
            const url = `https://sleepy-mountain-64974.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }

    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Manage service</h1>

            {
                services.map(service => <h4 className='m-3' key={service._id}>
                    {service.name}
                    <button className='ms-3' onClick={() => handleDelete(service._id)}>x</button>
                </h4>)
            }
        </div>
    );
};

export default ManageServices;