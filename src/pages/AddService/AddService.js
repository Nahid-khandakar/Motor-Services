import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

        fetch('https://sleepy-mountain-64974.herokuapp.com/services', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <div className='w-50 mx-auto'>

            <h1>this is add service page</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column mt-3'>

                <input className='my-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='my-3' placeholder='description' {...register("description")} />
                <input className='my-3' placeholder='price' type="number" {...register("price")} />
                <input className='my-3' placeholder='photo url'  {...register("img")} />
                <input className='my-3' type="submit" value='add service' />
            </form>

        </div>
    );
};

export default AddService;