import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, description, img } = service
    return (
        <div className='service border border-danger rounded'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p>price : {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-danger'>Book : {name}</button>
        </div>
    );
};

export default Service;