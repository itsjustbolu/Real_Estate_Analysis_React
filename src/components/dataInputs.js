import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const DataInputs = () => {
  return (
    <div>
      <Form>
        <h3>Property Location</h3>
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

        <h3>Property Details</h3>
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
            <Form.Label>Asking Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <h3>Financials</h3>
        <p>Sale and Rental Evaluation</p>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Rehab Cost</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Downpayment %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Rehab Interest Rate %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Rehab Loan Term</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Post Rehab Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Rehab Duration</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Monthly Rent</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Taxes (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Insurance (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>HOA (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Button  onClick={AnalyzeDeal} variant="primary" type="submit">
          Analyze Deal
        </Button>
      </Form>
    </div>
  );
};


function AnalyzeDeal(e) {
    e.preventDefault();
    console.log("link was clicked")
  

    // Define Variables 

}

export default DataInputs;


