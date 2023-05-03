import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const RecipeCard = ({ recipeData }) => {
    const [favorite, setFavorite] = useState(false);
    const { _id, food_name, food_img, method, Ingredients, rating, number_of_recipe } = recipeData;
    const handleFavoriteBtn = () => {
        toast.success('items added to favorite');

        setFavorite(true)
    }
    return (
        <div className='col col-md-4 col-12 '>
            <Card style={{ height: "700px" }} className='recipe-card'>
                <Card.Img variant="top" src={food_img} style={{ height: "200px", width: "100%" }} />
                <Card.Body className='cart-container'>
                    <Card.Title className='fs-4 fw-semibold'>{food_name}</Card.Title>
                    <Card.Text>
                        {method}
                    </Card.Text>
                    <p><span className='fw-semibold text-success fs-5'>Ingredients</span> : {Ingredients}</p>
                    <div className=' d-flex align-items-center rating'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-2'> {rating}</span>
                    </div>

                    <Button onClick={handleFavoriteBtn} variant="success" className='favorite-btn mb-3 fw-bold  ' disabled={favorite}>Favorite</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;