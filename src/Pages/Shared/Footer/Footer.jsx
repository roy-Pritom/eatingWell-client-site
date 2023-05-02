import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="bg-dark text-white">
      <Container>
        <Row className="py-5">
          <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
            <h4>About Chef's Delight</h4>
            <p>
              Chef's Delight is a food blog dedicated to bringing you the best 
              recipes and culinary inspiration from around the world. Follow us 
              on social media to stay up-to-date with our latest content.
            </p>
            <ul className="list-unstyled list-inline mt-4">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#" className="text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white">Recipes</a>
              </li>
              <li>
                <a href="#" className="text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h4>Contact Us</h4>
            <p>
              123 Main Street<br />
              Anytown, USA 12345<br />
              info@chefsdelight.com<br />
              (555) 555-5555
            </p>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2023 Chef's Delight. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;