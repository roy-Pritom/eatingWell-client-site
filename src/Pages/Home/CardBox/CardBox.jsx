import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardBox = ({data}) => {
    const {id,likes,name,years_of_experience,img_url}=data;
    return (
        <div className='col col-4'>
             <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={img_url} />
      <Card.Body>
        <Card.Title className='fw-bold'>{name}</Card.Title>
        <p className='text-dark m-0 p-0'>Years of experience :{years_of_experience}</p>
          <p className='text-dark mt-2'>Likes : {likes}</p>
        <Button variant="warning fw-semibold ">View Recipes Button</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardBox;