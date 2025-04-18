import React from 'react'
import { Row, Col,Container} from 'react-bootstrap'
import '../../style/style.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="footer-container bg-dark text-light py-5">
    <Container>
      <Row className="g-4 g-lg-5">
        {/* Left Section */}
        <Col lg={6} className="pe-lg-5">
          <Row className="g-4">
            {/* Newsletter */}
            <Col md={6}>
              <div className="mb-4">
                <p className="text-uppercase text-muted mb-1">Subscribe Our</p>
                <h4 className="text-danger">Newsletter</h4>
              </div>
              <div className="d-flex">
                <input 
                  type="email" 
                  className="form-control rounded-0" 
                  placeholder="Your email address" 
                />
                <button className="btn btn-danger rounded-0 px-3">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </Col>
  
            {/* About */}
            <Col md={6}>
              <h4 className="text-danger mb-3">About Food</h4>
              <p >
                Kisye atdolor ultrices semp lacus sed maxim and nulla Etiam pretium dam serosy lacini voluti patni Vestibulu efficituri vel liberio ntesqud tellus neque.
              </p>
            </Col>
  
            {/* Navigation */}
            <Col md={6}>
              <h4 className="text-danger mb-3">Navigation</h4>
              <ul className="list-unstyled text-light ">
                <li className="mb-2 ">
                  <Link to="/" className="text-decoration-none text-light hover-text-danger">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-decoration-none text-light hover-text-danger">About</Link>
                </li>
                <li className="mb-2">
                  <Link to="/menu" className="text-decoration-none text-light hover-text-danger">Menu</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-decoration-none text-light  hover-text-danger">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
  
        {/* Right Section - Contact Info */}
        <Col lg={6} className="ps-lg-5">
        <h4 className="text-danger mb-4">Get in Touch</h4>
          
          <div className="mb-4">
            <p className=" mb-1">Address</p>
            <p className="text-light">
              Street 238,52 tempor Donec ultricies mattis nulla, suscipit risus tristique ut.
            </p>
          </div>
          
          <div>
            <p className=" mb-1">Booking & Contact:</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone text-warning me-2"></i>
                <span className="text-light">Phone: +1 500 000 0000</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope text-warning me-2"></i>
                <span className="text-light">Email: demo@lorem.com</span>
              </li>
              <li>
                <i className="bi bi-globe text-warning me-2"></i>
                <span className="text-light">Website: http://demo.com</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-4 social-icons">
            <a href="#" className="text-decoration-none text-danger me-3">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a href="#" className="text-decoration-none text-danger me-3">
              <i className="bi bi-twitter fs-5"></i>
            </a>
            <a href="#" className="text-decoration-none text-danger me-3">
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a href="#" className="text-decoration-none text-danger">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </Col>
      </Row>
      
      <hr className="my-4 border-secondary" />
      
      <div className="text-center pt-3">
        <p className="mb-0">© {new Date().getFullYear()} Food Restaurant. All rights reserved.</p>
      </div>
    </Container>
  </div>
  )
}

export default Footer