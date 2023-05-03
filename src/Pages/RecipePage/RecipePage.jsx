import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import RecipeCard from './RecipeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



const RecipePage = () => {
    const data=useLoaderData();
    console.log(data);
    const {recipes,name,years_of_experience,img_url,bio,likes,number_of_recipe}=data;
  
    return (
        <div className='mb-5'>
          <Card className='container my-5 py-5 px-4  ' style={{backgroundColor:"#F3F3F3"}}>
       <div className="d-flex justify-content-center">
       <Card.Img variant="top" src={img_url} style={{width:"400px",height:"270px"}} />
       </div>
        <Card.Body>
      
          <h2 className='text-center fw-bold fs-1 my-3'>{name}</h2>
          <p className=' '>{bio}</p>
          <div className=" d-flex gap-5"style={{color:"#787885",fontWeight:"700", fontSize:"14px"}}>
          <p className=' d-flex gap-2 align-items-center'>Likes : {likes}<FontAwesomeIcon icon={faThumbsUp} className='text-primary'  /> </p>
          <p>years of experience : {years_of_experience}</p>
          <p>Number of recipe : {number_of_recipe}</p>
          </div>
  
        </Card.Body>
      </Card>
      <div className="container">
        <h2 className='text-center fs-2 fw-bold mb-5 text-success'>Hottest Recipes at Food & Taste</h2>
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