import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const data=useLoaderData();
    console.log(data);
    const {id,likes,name,years_of_experience,img_url}=data;
  
    return (
        <div>
           <div className="d-flex justify-content-center mt-5">
            <img src={img_url} className='border rounded mx-auto ' style={{width:"400px"}} alt="" />
           </div>
        </div>
    );
};

export default Recipe;