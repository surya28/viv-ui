import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='p-6 rounded-lg text-white banner'>
            <p className='text-2xl font-bold'>
                Lorem Ipsum
            </p>
            <p className='text-lg mt-2 font-light text-gray-400'>
                Slash sale begins in June. Get up to 80% discount on all products. <strong className='cursor-pointer text-white'>Read more</strong>
            </p>
        </div>
    )
}

export default Banner;