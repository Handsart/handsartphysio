import React from 'react';
import {Navbar, Container, NavDropdown, Collapse, Nav} from 'react-bootstrap';
import './Nav.css'
import logo from '../../Assets/logoHanstart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbars = ()=> {
    return(
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src ={logo} title="logo" className="logo-img"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="active">Home</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Login/Register</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Service Details</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bolgs Details</NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link>Contact Us</Nav.Link> */}
              <Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                  <Nav.Link href="tel:+919205011372">
                    <FontAwesomeIcon icon={faPhone} className='phone' />
                            (+91) 9205011372
                    </Nav.Link>
                  <Nav.Link>
                    <button>contact us <span> > </span></button>
                        </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Navbars;