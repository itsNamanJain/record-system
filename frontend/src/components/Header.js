import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Record System</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
