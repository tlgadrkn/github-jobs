import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <>
      <Navbar className="bg-primary justify-content-around" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#">
            GitHub Jobs
          </Navbar.Brand>
          <Nav className="bg-aqua">
            <Nav.Item>
              <Nav.Link className="text-white">See All Jobs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
