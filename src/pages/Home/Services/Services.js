import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service-data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container' id='services'>
            <div className="row">
                <h1 className='services-title my-5 text-danger'>Our services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;