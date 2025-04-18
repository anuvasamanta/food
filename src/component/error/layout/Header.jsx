import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../style/style.css'
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="#home"><img src="assert/logo (3).png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='nav' as={Link} to='' active>Home</Nav.Link>
              <Nav.Link className='nav' as={Link} to='about'>About</Nav.Link>
              <Nav.Link className='nav' as={Link} to='recipie'>Recipe</Nav.Link>
              <Nav.Link className='nav' as={Link} to='contact'>Contact</Nav.Link>
              <NavDropdown title={<CgProfile className='icon' />} id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to='signup'>Sign Up</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='signin'>Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='profile'>Profile</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='table'><button>Book Table</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header