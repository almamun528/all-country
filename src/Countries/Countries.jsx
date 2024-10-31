import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {

const countries = useLoaderData()
    

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-3'>
            {
                countries.map((country,index)=> <Country key={index} country={country} ></Country>  )
            }
        </div>
    );
};

export default Countries;