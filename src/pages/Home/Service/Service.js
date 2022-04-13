import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, description, img } = service
    return (
        <div>
            <h1>{name} </h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;