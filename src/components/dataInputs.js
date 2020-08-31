import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const DataInputs = () => {
  return (
    <div>
      <Form>
        <p>Property Location</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Property Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>TX</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <p>Property Details</p>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Baths</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Garage</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Size</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Lot Size (sq ft)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Lot Size (ac)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>
        
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Year Built</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Property Type</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>SFH</option>
              <option>Duplex</option>
              <option>Triplex</option>
              <option>MultiFamily</option>
              <option>Townhome</option>
              <option>Condo</option>
              <option>Land</option>

            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <p>Financials</p>
        


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DataInputs;
