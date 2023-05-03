import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CardBox from '../CardBox/CardBox';
import Marquee from "react-fast-marquee";
import './Home.css'
import OfferCard from '../OfferCard/OfferCard';
import LatestNews from '../LatestNews/LatestNews';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const navigation=useNavigation();
  if(navigation.state==='loading')
  {
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
const chefData=useLoaderData();
// console.log(chefData)
    return (
        <div className='container'>
          <div className="">
          <Banner></Banner>
          </div>
          <div className="" style={{marginTop:"100px"}}>
            <h1 className='text-center fw-bold fs-1 text-success mt-5'>Meet Our Chefs</h1>
            <Marquee speed={100}>
            <p className='mt-3 text-center fs-5 text-success fw-semibold  '>Need some help deciding what to choose? Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
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
          <div className="my-5 py-5">
            <h2 className='fw-bold fs-1 text-success text-center'>Hot Deals</h2>
            <OfferCard></OfferCard>
          </div>
          <div className="mt-3 mb-5 pb-3">
            <h2  className='fw-bold fs-1 text-success text-center mb-5'>Latest News from Food & Taste</h2>
            <LatestNews></LatestNews>
          </div>
        </div>
    );
};

export default Home;