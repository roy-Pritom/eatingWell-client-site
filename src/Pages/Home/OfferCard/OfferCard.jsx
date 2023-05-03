import React from 'react';

const OfferCard = () => {
    return (
       <div className="offerCard mt-5">
       
        <div className='d-flex flex-md-row flex-column gap-5 justify-content-center align-items-center'>
            <div className="">
                <p className='fs-3 text-warning fst-italic fw-bold'>Special offer</p>
                <h2 className='fs-1 mb-4 ' style={{fontWeight:"700"}}>Good Food,Drinks & <br /> Great Company.</h2>
                <p className='mb-4'>As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you</p>
                <div className="d-flex align-items-center gap-5">
                    <button className='btn btn-success px-4 py-2 text-white fs-5 fw-bold'>Order Now</button>
                   <div className="d-flex">
                   <p className='text-warning fs-1' style={{fontWeight:'800'}}>$46.99<sub className='fw-bold fs-4'>$59.99</sub></p>
                    
                   </div>
                </div>
            </div>
            <div className="">
                <img src="https://xpressrow.com/html/frudbaz/assets/img/offer/offer_img.png" alt="" className='img' />
            </div>
           
        </div>
        <img src="https://xpressrow.com/html/frudbaz/assets/img/icon/d_img.png" className='offer-img' alt="" />
       </div>
    );
};

export default OfferCard;