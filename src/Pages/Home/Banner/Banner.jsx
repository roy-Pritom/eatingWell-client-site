import React from 'react';

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center gap-5 flex-md-row flex-column mt-4'>
            <div className="">
                 <img src="https://img.freepik.com/free-photo/chef-pointing-lateral-white-background_1368-2826.jpg?w=740&t=st=1682957607~exp=1682958207~hmac=281acea4296554b0b48beee0873c8cb0991a92ded15406bd81665adb031de1fe"  style={{height:"500px"}} alt="" />
            </div>
            <div className="">
               <h2>Chef</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur nemo culpa blanditiis delectus officiis? Vero, explicabo officiis?</p>
            </div>
        </div>
    );
};

export default Banner;