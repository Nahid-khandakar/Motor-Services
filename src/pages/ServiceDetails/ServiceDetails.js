import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceId } = useParams()

    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>this is serviceId details : {service.name}</h2>

            <div>
                <Link to='/checkout'>
                    <button className='btn btn-danger'>CheckOut</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetails;