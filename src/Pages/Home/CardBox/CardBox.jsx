import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CardBox = ({data}) => {
    const {id,likes,name,years_of_experience,img_url}=data;
    return (
        <div className='col col-md-4 col-12'>
             <Card >
      <Card.Img variant="top" src={img_url} style={{height:"250px"}} />
      <Card.Body>
        <Card.Title className='fw-bold'>{name}</Card.Title>
        <p className='text-dark m-0 p-0'>Years of experience :{years_of_experience}</p>
          <p className='text-dark mt-2'>Likes : {likes}</p>
      <Link to={`/recipes/${id}`}>
      <Button variant="success  " className='px-4 py-2 text-white fs-6 fw-semibold'>View Recipes Button</Button>
      </Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardBox;