import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { _id, name, price, description, img } = service
    const navigate = useNavigate()

    const navigateToServiceDetail = _id => {
        navigate(`/service/${_id}`)
    }


    return (
        <div className='service border border-danger rounded'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p>price : {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-danger'>Book : {name}</button>
        </div>
    );
};

export default Service;