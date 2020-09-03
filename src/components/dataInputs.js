import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const DataInputs = () => {
  return (
    <div>
      <Form id="main_form">
        <h3>Property Location</h3>
        <Form.Group controlId="address">
          <Form.Label>Property Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>TX</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <h3>Property Details</h3>
        <Form.Row>
          <Form.Group as={Col} controlId="bedrooms">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="baths">
            <Form.Label>Baths</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="garage">
            <Form.Label>Garage</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="house_size_sqft">
            <Form.Label>Size</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="lot_size_sqft">
            <Form.Label>Lot Size (sq ft)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="lot_size_ac">
            <Form.Label>Lot Size (ac)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="year_built">
            <Form.Label>Year Built</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="property_type">
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

          <Form.Group as={Col} controlId="asking_price">
            <Form.Label>Asking Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <h3>Financials</h3>
        <p>Sale and Rental Evaluation</p>

        <Form.Row>
          <Form.Group as={Col} controlId="purchase_price">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="rehab_cost">
            <Form.Label>Rehab Cost</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="downpayment_percent">
            <Form.Label>Downpayment %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="rehab_interest_rate">
            <Form.Label>Rehab Interest Rate %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="rehab_loan_term">
            <Form.Label>Rehab Loan Term</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="post_rehab_price">
            <Form.Label>Post Rehab Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="rehab_duration">
            <Form.Label>Rehab Duration</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="monthly_rent">
            <Form.Label>Monthly Rent</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="annual_taxes">
            <Form.Label>Taxes (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="annual_insurance">
            <Form.Label>Insurance (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="annual_hoa">
            <Form.Label>HOA (annual)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Button onClick={AnalyzeDeal} variant="primary" type="submit">
          Analyze Deal
        </Button>
      </Form>
    </div>
  );
};

function AnalyzeDeal(e) {
  e.preventDefault();

  // Property Details Variables
  var propAddress = document.getElementById("address").value;
  // var propCity = document.getElementById("city").value;
  // var propState = document.getElementById("state").value;
  // var propZip = document.getElementById("zip").value;
  // var propBedrooms = document.getElementById("bedrooms").value;
  // var propBaths = document.getElementById("baths").value;
  // var propGarage = document.getElementById("garage").value;
  // var propSize = document.getElementById("house_size_sq_ft").value;
  // var propLot = document.getElementById("lot_size_sq_ft").value;
  // var propBuilt = document.getElementById("year_built").value;
  // var propType = document.getElementById("property_type").value;
  // var propAskingPrice = document.getElementById("asking_price").value;

  // // Financial Analysis Variables
  // var purchasePrice = document.getElementById("purchase_price");
  // var rehabCost = document.getElementById("rehab_cost");
  // var downpaymentPercent = document.getElementById("downpayment_percent");
  // var rehabInterestRate = document.getElementById("rehab_interest_rate");
  // var rehabLoanTerm = document.getElementById("rehab_loan_term");
  // var postRehabPrice = document.getElementById("post_rehab_price");
  // var rehabDuration = document.getElementById("rehab_duration");
  // var monthlyRent = document.getElementById("monthly_rent");
  // var annualTaxes = document.getElementById("annual_taxes");
  // var annualInsurance = document.getElementById("annual_insurance");
  // var annualHoa = document.getElementById("annual_hoa");

  // make sure button click is properly binded to function
  console.log("link was clicked");
  console.log(propAddress);


  // remove form and display results
  var mainForm =  document.getElementById("main_form")
  mainForm.style.display = "none"

  const mainResultsDiv = document.createElement("div")
  


  console.log("div created")

  // mainResultsDiv.appendChild(addressResult)





}

export default DataInputs;
