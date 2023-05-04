import Banner from '../Banner/Banner';
import { useNavigation } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import './Home.css'
import OfferCard from '../OfferCard/OfferCard';
import LatestNews from '../LatestNews/LatestNews';
import { Spinner } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <div className="d-flex justify-content-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  }

  const [loader, setLoader] = useState(true)
  const [chefData, setChefData] = useState([])
  useEffect(() => {
    fetch('https://assignment-10-server-site-roy-pritom.vercel.app/data/')
      .then(res => res.json())
      .then(data => {
        setChefData(data)
        setLoader(false)
      })


  }, [])

  // console.log(chefData)
  return (
    <div className='container'>
      <div className="">
        <Banner></Banner>
      </div>
      <div className="" style={{ marginTop: "100px" }}>
        <h1 className='text-center fw-bold fs-1 text-success mt-5'>Meet Our Chefs</h1>
        <Marquee speed={100}>
          <p className='mt-3 text-center fs-5 text-success fw-semibold  '>Need some help deciding what to choose? Take a look at our most popular recipes or check out the latest dishes we have added to the site.</p>
        </Marquee>
        {
          loader ? <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
            :
            <div className="row g-4 py-5 mx-auto cart" >
              {
                chefData.map(data => <ChefCard
                  data={data}
                  key={data.id}
                ></ChefCard>)
              }

            </div>
        }
      </div>
      <div className="my-md-5 my-3 py-md-5">
        <h2 className='fw-bold fs-1 text-success text-center'>Hot Deals</h2>
        <OfferCard></OfferCard>
      </div>
      <div className="mt-3 mb-5 pb-3">
        <h2 className='fw-bold fs-1 text-success text-center mb-5'>Latest News from Food & Taste</h2>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
};

export default Home;