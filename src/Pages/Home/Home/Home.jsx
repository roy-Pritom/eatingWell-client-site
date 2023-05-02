import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import CardBox from '../CardBox/CardBox';
import Marquee from "react-fast-marquee";
import './Home.css'

const Home = () => {
const chefData=useLoaderData();
// console.log(chefData)
    return (
        <div className='container'>
          <div className="">
          <Banner></Banner>
          </div>
          <div className="" style={{marginTop:"120px"}}>
            <h1 className='text-center fw-bold fs-1 text-primary mt-5'>Meet Our Chefs</h1>
            <Marquee speed={150}>
            <p className='mt-3 text-center fs-5 text-danger fw-semibold  '>Need some help deciding what to choose? Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
            </Marquee>
          <div className="row g-4 py-5 mx-auto cart" >
                {
              chefData.map(data=><CardBox
              data={data}
              key={data.id}
              ></CardBox>)
                }
            </div>
          </div>
        </div>
    );
};

export default Home;