import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const { common,official } =country.name
    const {independent ,status,cca2,flags} =country
    return (
        <div className='border-2 border-red-400 bg-gray-100 my-6 rounded-lg p-2 shadow-2xl flex flex-col'>
            <h1 className='font-bold text-xl text-red-600'>{common} </h1>
            <h2 className='my-3 font-semibold'>Official : {official} </h2>
            <img className='flex-grow rounded-lg border-2 p-1 border-red-950 shadow-xl' src={flags.png} alt="" />

            <Link  to={`/countries/${cca2}`} >
            <button className='font-semibold bg-red-200 my-2 rounded-lg py-2 px-3 hover:bg-red-500 hover:text-white'>Details</button>
            
            </Link>
        </div>
    );
};

export default Country;