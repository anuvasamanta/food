import React, { useEffect, useState } from 'react'
import { endUrl } from '../../api/api'
import axiosInstance from '../../api/axiosInstance'
import { Carousel, Col, Container, Row, Card, Button, Image } from 'react-bootstrap';
import '../../style/style.css'
import { Link } from 'react-router-dom';
import TableBooking from './TableBooking';
function Home() {
  let api = endUrl.hero;
  let [categories, setcategories] = useState();
  let fatchAll = () => {
    axiosInstance.get(api)
      .then(res => {
        console.log("response", res.data);
        setcategories(res.data)
      })
      .catch(err => {
        console.log("error", err);

      })
  }
  useEffect(() => {
    fatchAll()
  }, [api, setcategories])
  return (
    <div className='slider-section'>
      {/* Carousel Section */}
      <Carousel fade className="hero-carousel">
        {[0, 1, 2].map((index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img
                className="carousel-image"
                src={`${categories?.image[index]}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
            <Carousel.Caption className="carousel-caption">
              <div className="restaurant-title">
                <h1>FOOD</h1>
                <h4>RESTAURANT</h4>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Contact Section */}
      <div className="contact-section container my-5">
        <Row className="align-items-center">
          <Col lg={6} className="contact-info mb-5 mb-lg-0">
            <Row className="contact-row align-items-center mb-4">
              <Col xs="auto">
                <div className="contact-icon">
                  <img 
                    src={`${categories?.contact?.image}`} 
                    alt="Contact" 
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col>
                <div className="contact-details">
                  <p className="contact-comment">{categories?.contact?.comment}</p>
                  <h2 className="contact-number">{categories?.contact?.number}</h2>
                </div>
              </Col>
            </Row>
            
            <div className="about-section">
              <h5 className="section-title">{categories?.contact?.title}</h5>
              <p className="about-text">{categories?.contact?.about}</p>
              <ul className="features-list">
                {categories?.contact?.list?.map((item, i) => (
                  <li key={i} className="feature-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="thumbnail-container">
              <img 
                src={`${categories?.contact?.thambail}`} 
                alt="Restaurant" 
                className="thumbnail-image img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Menu Section */}
      <div className="menu-section container my-5 text-center">
        <h5 className="section-subtitle">Tasty</h5>
        <h2 className="section-title">Favorite Meals</h2>
        <p className="section-description">Add these fan-favorite recipes to your order</p>
        
        <Row className="menu-items justify-content-center">
          {categories?.menu?.map((data) => (
            <Col key={data?.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="menu-card h-100">
                <div className="card-image-container">
                  <Card.Img variant="top" src={`${data?.img}`} className="card-image" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="item-name">{data?.name}</Card.Title>
                  <div className="price mt-auto">{data?.price}</div>
                  <Button variant="primary" className="add-to-cart mt-2">
                    {data?.icon} Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Button as={Link} to="/menu" variant="outline-primary" className="view-menu-btn">
          Explore Full Menu
        </Button>
      </div>

      {/* Table Booking Component */}
      <div className="container my-5">
        <TableBooking />
      </div>

      {/* Chefs Section */}
      <div className="chefs-section container my-5 text-center">
        <p className="section-subtitle">Meet Our Chefs</p>
        <h2 className="section-title">Introducing Our Culinary Masters</h2>
        
        <Row className="chefs-row justify-content-center">
          {categories?.chef?.map((data) => (
            <Col key={data?.id} xs={6} md={4} className="mb-4">
              <div className="chef-card">
                <div className="chef-image-container">
                  <Image src={`${data?.img}`} roundedCircle className="chef-image" />
                </div>
                <h3 className="chef-name">{data?.name}</h3>
                <h5 className="chef-title">{data?.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
 
  )
}

export default Home