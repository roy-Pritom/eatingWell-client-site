import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LatestNews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
    >
      <div className="">
        <Card style={{ height: "520px" }}>
          <Card.Img src="https://xpressrow.com/html/frudbaz/assets/img/shop/img_05.png" />
          <Card.Body className='position-relative'>
            <Card.Title>CHICKEN</Card.Title>
            <Card.Text>
              In general, chicken has a mild and versatile taste that can be enhanced with different herbs, spices, and marinades. When cooked properly, chicken can be juicy, tender, and flavorful. Common ways of cooking chicken include...
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }} >
          <Card.Img src="https://xpressrow.com/html/frudbaz/assets/img/shop/img_04.png" />
          <Card.Body className='position-relative'>
            <Card.Title>NOUDLUS</Card.Title>
            <Card.Text>
              The easy availability at online or at a grocery store, has made noodles the go-to option when there’s no time or effort to prepare a full course meal. If we look at brands available in India...
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }} >
          <Card.Img src="https://xpressrow.com/html/frudbaz/assets/img/shop/img_03.png" />
          <Card.Body className='position-relative'>
            <Card.Title>DOUBLE STUCK BURGAR</Card.Title>
            <Card.Text>
              Burgers are one of the most popular foods in India and on Instagram, with almost 20 million uses of the #burger and #burgers hashtags. But even though they’re popular, it can be hard to come up with something witty to post...
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }}>
          <Card.Img src="https://xpressrow.com/html/frudbaz/assets/img/shop/img_01.png" />
          <Card.Body className='position-relative'>
            <Card.Title>CHICKEN FRY</Card.Title>
            <Card.Text>
              Spicy chicken fry that taste amazing. Great as appetizer and this spicy chicken fry makes a great appetizer. Totally addictive. This chicken fry turns out so juicy and delicious. I made this couple days back and it was total hit...
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }}>
          <Card.Img src="https://img.freepik.com/free-photo/delicious-homemade-sandwiches-white-plate-black-distressed-surface-with-free-space_179666-42481.jpg?size=626&ext=jpg" />
          <Card.Body className='position-relative'>
            <Card.Title>HOTDOG</Card.Title>
            <Card.Text>
              hotdogs are a popular and versatile food that can be customized to suit individual tastes. However, it is worth noting that they are also high in sodium and saturated fat, so they should be consumed in moderation as part of a balanced diet.
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }}>
          <Card.Img src="https://xpressrow.com/html/frudbaz/assets/img/shop/img_09.png" />
          <Card.Body className='position-relative'>
            <Card.Title>PIZZA</Card.Title>
            <Card.Text>
              The taste of pizza can vary depending on the type of crust, sauce, cheese, and toppings used. Some people prefer thin and crispy crusts.Overall, pizza is a versatile and delicious dish that can be customized to suit individual preferences.
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>
      <div className="">
        <Card style={{ height: "520px" }}>
          <Card.Img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg" />
          <Card.Body className='position-relative'>
            <Card.Title>PASTA</Card.Title>
            <Card.Text>
              Pasta is a universally loved dish and for good reason. It's a quick and easy Italian meal that can be enjoyed any time of day. With over 500 different types of pasta, there are endless delicious versions of this one-pot wonder.
            </Card.Text>
            <Button variant="success fw-bold" className='position-absolute bottom-0 mb-3'>Buy Now</Button>

          </Card.Body>
        </Card>
      </div>

    </Carousel>
  );
};

export default LatestNews;