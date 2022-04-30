import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hook/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    return (
        <div>
            <h2>confirm your checkout : {service.name}</h2>
        </div>
    );
};

export default CheckOut;