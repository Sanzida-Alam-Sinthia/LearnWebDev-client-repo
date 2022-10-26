import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkingOutInfo = useLoaderData();
    return (
        <div className='mt-5'>
            <h2 className='mb-5'>Checking out? </h2>
            <h2 className='mb-5'> Thank You For Choosing Our Course : <span className='text-primary'> {checkingOutInfo.name}</span></h2>
            <h2 className='mb-5'> The Total Cost is: <span className='text-danger'>${checkingOutInfo.total}</span></h2>
        </div>
    );
};

export default CheckOut;