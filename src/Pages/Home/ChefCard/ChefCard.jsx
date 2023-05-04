import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazy-load';


const ChefCard = ({ data }) => {
    const { id, likes, name, years_of_experience, img_url, number_of_recipe } = data;
    return (
        <div className='col col-md-4 col-12'>
            <Card className=''>
                <LazyLoad  height={250}  threshold={0.99} onContentVisible={() => { console.log('loaded!') }}>
                    <Card.Img variant="top"  src={img_url} style={{ height: "250px" }} />

                </LazyLoad>


                <Card.Body>
                    <Card.Title className='fw-bold fs-4'>{name}</Card.Title>
                    <div className="" style={{ color: "#787885", fontWeight: "700", fontSize: "16px" }}>
                        <p className='mb-2 p-0'>Years of experience :{years_of_experience}</p>
                        <p className=' m-0'>Number of recipe: {number_of_recipe}</p>
                        <p className=' mt-2 d-flex gap-2 align-items-center'>Likes : {likes}<FontAwesomeIcon icon={faThumbsUp} className='text-primary' /> </p>
                    </div>
                    <Link to={`/recipes/${id}`}>
                        <Button variant="success  " className='px-4 py-2 text-white fs-6 fw-semibold'>View Recipes Button</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;