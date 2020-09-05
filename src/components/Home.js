import React from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container>
        <NavigationBar />
        <div>HI FROM HOME</div>
      </Container>
    </>
  );
};

export default Home;
