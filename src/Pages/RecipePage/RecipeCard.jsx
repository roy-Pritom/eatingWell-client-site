import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const RecipeCard = ({recipeData}) => {
    const {_id,food_name,food_img,method,Ingredients,rating}=recipeData;
    return (
        <div className='col col-md-4 col-12 py-5'>
            <Card style={{height:"730px"}}>
      <Card.Img variant="top" src={food_img}  style={{height:"200px",width:"100%"}} />
      <Card.Body className='cart-container'>
        <Card.Title className='fs-6'>{food_name}</Card.Title>
        <Card.Text>
         {method}
        </Card.Text>
         <p><span className='fw-semibold text-primary fs-6'>Ingredients</span> : {Ingredients}</p>
         <p><span className='fw-semibold text-primary'>Rating </span>: {rating}</p>
        <Button variant="warning" className='favorite-btn mb-3 '>Favorite</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default RecipeCard;