import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hook/useServiceDetail';

const ServiceDetails = () => {

    const { serviceId } = useParams()

    const [service] = useServiceDetail(serviceId)



    return (
        <div>
            <h2>this is serviceId details : {service.name}</h2>

            <div>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-danger'>CheckOut</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetails;