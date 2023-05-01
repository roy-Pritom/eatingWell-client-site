import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
const chefData=useLoaderData();
console.log(chefData)
    return (
        <div className='container'>
            <Banner></Banner>
            <div className="">
                {

                }
            </div>
        </div>
    );
};

export default Home;