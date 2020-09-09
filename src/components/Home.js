import React, { useEffect, useState, useRef } from 'react';
import NavigationBar from './NavigationBar';
import { Container, Table } from 'react-bootstrap';
import SearchBar from './SearchBar';
import JobsList from './JobsList';

const Home = () => {
  const [state, setState] = useState(null);
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const GITHUB_JOBS_BASE_URL = 'https://jobs.github.com/positions.json';

  const componentIsMounted = useRef(true);

  useEffect(() => {
    // each useEffect can return a cleanup function
    return () => {
      componentIsMounted.current = false;
    };
  }, []); // no extra deps => the cleanup function run this on component unmount

  useEffect(() => {
    async function fetchData() {
      try {
        const asyncResponse = await fetch(
          `${CORS_PROXY}${GITHUB_JOBS_BASE_URL}`
        );
        const data = await asyncResponse.json();

        if (componentIsMounted.current) {
          setState(data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return state ? (
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
              {state.map((value, index) => {
                return (
                  <JobsList
                    key={index}
                    value={{
                      title: value.title,
                      company: value.company,
                      location: value.location,
                      created_at: value.created_at,
                      type: value.type,
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
