import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
const SearchBar = () => {
  return (
    <>
      <Container className="py-4 d-flex  justify-content-around">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridJobDesc" className="mx-2">
              <Form.Label>Job Description</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLocation" className="mx-2">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              id="formGridFullTimeOnly"
              className="align-self-center my-auto mx-2"
            >
              <Form.Check type="checkbox" label="Full Time Only" />
            </Form.Group>

            <Button
              className="align-self-center my-auto py-1 px-3 mx-2"
              variant="primary"
              type="submit"
            >
              Search
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </>
  );
};

export default SearchBar;
