import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <>
      <Navbar className="bg-primary justify-content-between" expand="lg">
        <Navbar.Brand className="text-white" href="#">
          GitHub Jobs
        </Navbar.Brand>
        <Nav className="bg-aqua">
          <Nav.Item>
            <Nav.Link className="text-white">See All Jobs</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
