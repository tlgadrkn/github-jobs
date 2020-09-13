import React from 'react';
import NavigationBar from './NavigationBar';
import { Container, Table } from 'react-bootstrap';
import SearchBar from './SearchBar';
import JobsList from './JobsList';

const Home = (props) => {
  return (
    <>
      <Container fluid className='p-0'>
        <NavigationBar />
        <SearchBar setFilteredJobs={props.setFilteredJobs} />
        <Container>
          <Table striped hover>
            <thead>
              <tr>
                <th>Jobs Available</th>
              </tr>
            </thead>
            <tbody>
              {props.filteredJobs
                ? props.filteredJobs.map((value, index) => {
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
                  })
                : props.state.map((value, index) => {
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
  );
};

export default Home;
