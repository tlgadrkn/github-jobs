import React, { useEffect, useState, useRef } from 'react';
import NavigationBar from './NavigationBar';
import { Container, Table } from 'react-bootstrap';
import SearchBar from './SearchBar';
import JobsList from './JobsList';

const Home = (props) => {
  console.log(props.state);
  return props.state ? (
    <>
      <Container fluid className="p-0">
        <NavigationBar />
        <SearchBar />
        <Container>
          <Table striped hover>
            <thead>
              <tr>
                <th>Jobs Available</th>
              </tr>
            </thead>
            <tbody>
              {props.state.map((value, index) => {
                return (
                  <JobsList
                    key={index}
                    value={{
                      title: value.title,
                      company: value.company,
                      location: value.location,
                      created_at: value.created_at,
                      type: value.type,
                      url: value.url,
                    }}
                  />
                );
              })}
            </tbody>
          </Table>{' '}
        </Container>
      </Container>
    </>
  ) : (
    <>loading jobs</>
  );
};

export default Home;
