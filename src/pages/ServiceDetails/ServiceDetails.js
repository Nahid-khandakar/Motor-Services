import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceId } = useParams()

    return (
        <div>
            <h2>this is serviceId details : {serviceId}</h2>

            <div>
                <Link to='/checkout'>
                    <button className='btn btn-danger'>CheckOut</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetails;