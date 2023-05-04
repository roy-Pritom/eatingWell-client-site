import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center gap-5 flex-md-row flex-column mt-4 '>
            <div className=" ">
                <img src="https://img.freepik.com/free-photo/chef-pointing-lateral-white-background_1368-2826.jpg?w=740&t=st=1682957607~exp=1682958207~hmac=281acea4296554b0b48beee0873c8cb0991a92ded15406bd81665adb031de1fe" className='cart '  alt="" />
 
                {/* style={{height:"500px"}}  */}
            </div>
            <div className="">
                <h2 className='fw-bold fs-2 fs-md-1' >Your diet is a bank account <span className='text-success'>Good food</span> choices are good investments<br /></h2>
                <p className='fs-5'>everyday recipes with ratings and reviews by home cooks like you. find easy dinner ideas, healthy recipes, plus helpful cooking tips and techniques.</p>
                <button className='btn btn-success px-4 py-2 text-white fs-5 fw-bold mt-2'>Explore <FaArrowRight></FaArrowRight> </button>
            </div>
        </div>
    );
};

export default Banner;