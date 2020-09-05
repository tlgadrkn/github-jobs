import React from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <NavigationBar />
        <Container>
          <div>HI FROM HOME</div>
        </Container>
      </Container>
    </>
  );
};

export default Home;
