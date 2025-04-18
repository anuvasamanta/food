import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../style/style.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <Row>
        <Col className='right'>
          <Row>
            <Col>
              <p className='Subscribe'  id='contact'>Subscribe Our</p>
              <h4>Newsletter</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>About Food</h4>
              <p>Kisye atdolor ultrices semp lacus sed maxim and nulla Etiam pretium dam serosy lacini voluti patni Vestibulu efficituri vel liberio ntesqud tellus neque.</p>
            </Col>
            <Col>
              <h4>Navigation</h4>
              <ol>
               <Link as={Link} to=''><li>Home</li></Link>
                <Link as={Link} to='about'><li>About</li></Link>
                <Link as={Link} to='recipie'><li>Recipie</li></Link>
                <Link as={Link} to='contact'><li>Contact</li></Link>
              </ol>
            </Col>
          </Row>
        </Col>
        <Col className='left'>
          <p className='bold' id='contact'>Contact Info</p>
          <p>Address</p>
          <p>Street 238,52 tempor Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
          <p  className='bold'>Booking & Contact:</p>
          <ol>
            <li>Phone: +1 500 000 0000</li>
            <li>Email: demo@lorem.com</li>
            <li>Website: http://demo.com</li>
          </ol>
        </Col>
      </Row>
    </div>
  )
}

export default Footer