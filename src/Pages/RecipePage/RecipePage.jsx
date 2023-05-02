import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import RecipeCard from './RecipeCard';




const RecipePage = () => {
    const data=useLoaderData();
    console.log(data);
    const {id,recipes,name,years_of_experience,img_url,bio,likes}=data;
  
    return (
        <div className='mb-5'>
           {/* <div className="d-flex justify-content-center mt-5">
            <img src={img_url} className='border rounded mx-auto ' style={{width:"400px",height:"270px"}} alt="" />
           </div>
           <h2 className='text-center fw-bold fs-1 my-3'>{name}</h2>
          <p className='text-center mx-5 px-5'>{bio}</p>
          <div className="text-center d-flex justify-content-center gap-5">
          <p>Likes : {likes}</p>
          <p>years of experience : {years_of_experience}</p>
          </div> */}
          <Card className='container my-5 py-5 px-4'>
       <div className="d-flex justify-content-center">
       <Card.Img variant="top" src={img_url} style={{width:"400px",height:"270px"}} />
       </div>
        <Card.Body>
      
          <h2 className='text-center fw-bold fs-1 my-3'>{name}</h2>
          <p className=' '>{bio}</p>
          <div className=" d-flex gap-5">
          <p>Likes : {likes}</p>
          <p>years of experience : {years_of_experience}</p>
          </div>
  
        </Card.Body>
      </Card>
      <div className="container">
        <h2 className='text-center fs-2 fw-bold mb-5'>Hottest Recipes at Food & Taste</h2>
        <div className="row g-5 mx-auto ">
          {
            recipes.map(recipe=><RecipeCard
            key={recipe._id}
            recipeData={recipe}
            ></RecipeCard>)
          }
        </div>
      </div>
        </div>
    );
};

export default RecipePage;