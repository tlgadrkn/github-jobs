import React from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <>
      <Container fluid className="p-0">
        <NavigationBar />
        <SearchBar />
      </Container>
    </>
  );
};

export default Home;
