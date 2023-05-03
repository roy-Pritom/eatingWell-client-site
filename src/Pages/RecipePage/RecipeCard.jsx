import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipeData }) => {
    const [favorite, setFavorite] = useState(false);
    const { _id, food_name, food_img, method, Ingredients, rating,number_of_recipe } = recipeData;
    const handleFavoriteBtn = () => {
        toast.success('items added to favorite');

        setFavorite(true)
    }
    return (
        <div className='col col-md-4 col-12 py-5'>
            <Card style={{ height: "730px" }}>
                <Card.Img variant="top" src={food_img} style={{ height: "200px", width: "100%" }} />
                <Card.Body className='cart-container'>
                    <Card.Title className='fs-4 fw-semibold'>{food_name}</Card.Title>
                    <Card.Text>
                        {method}
                    </Card.Text>
                    <p><span className='fw-semibold text-success fs-5'>Ingredients</span> : {Ingredients}</p>
                    <p><span className='fw-semibold text-success fs-5'>Rating </span>: {rating}</p>
                    <Button onClick={handleFavoriteBtn}  variant="success" className='favorite-btn mb-3 fw-bold  ' disabled={favorite}>Favorite</Button>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;