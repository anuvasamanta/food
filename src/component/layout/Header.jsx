import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import '../../style/style.css'
function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src="assert/logo (3).png" 
            alt="Brand Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Navbar Content */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>

          {/* Right-side Icons/Buttons */}
          <div className="d-flex align-items-center">
            <Button variant="link" className="nav-icon">
              <FiSearch size={20} />
            </Button>
            <Button variant="link" className="nav-icon">
              <FiShoppingCart size={20} />
              <span className="cart-badge">3</span>
            </Button>
            
            <NavDropdown
              title={<CgProfile size={22} />}
              id="profile-dropdown"
              align="end"
              className="profile-dropdown"
            >
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;