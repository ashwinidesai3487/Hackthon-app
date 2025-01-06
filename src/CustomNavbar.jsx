import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState(null); // Initially, no link is active

  // When the component mounts, set "about" as active link
  useEffect(() => {
    setActiveLink('about');
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link
          href="#about"
          active={activeLink === 'about'}
          onClick={() => setActiveLink('about')}
        >
          About
        </Nav.Link>
        <Nav.Link
          href="#who"
          active={activeLink === 'who'}
          onClick={() => setActiveLink('who')}
        >
          Who Should Register
        </Nav.Link>
        <Nav.Link
          href="#rules"
          active={activeLink === 'rules'}
          onClick={() => setActiveLink('rules')}
        >
          Hackathon Rules
        </Nav.Link>
        <Nav.Link
          href="#rewards"
          active={activeLink === 'rewards'}
          onClick={() => setActiveLink('rewards')}
        >
          Rewards
        </Nav.Link>
        <Nav.Link
          href="#jury"
          active={activeLink === 'jury'}
          onClick={() => setActiveLink('jury')}
        >
          Jury
        </Nav.Link>
        <Nav.Link
          href="#contact"
          active={activeLink === 'contact'}
          onClick={() => setActiveLink('contact')}
        >
          Contact
        </Nav.Link>
      </Nav>
      <Button variant="warning" className="ms-2">Register Now</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>


  );
};

export default CustomNavbar;
