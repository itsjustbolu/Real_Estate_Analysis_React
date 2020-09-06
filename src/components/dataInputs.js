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
          <Form.Group as={Col} controlId="house_size_sq_ft">
            <Form.Label>Size</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="lot_size_sq_ft">
            <Form.Label>Lot Size (sq ft)</Form.Label>
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

          <Form.Group as={Col} controlId="down_payment_percent">
            <Form.Label>Downpayment %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="rehab_interest_rate">
            <Form.Label>Rehab Interest Rate %</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

         

          <Form.Group as={Col} controlId="post_rehab_price">
            <Form.Label>Post Rehab Price</Form.Label>
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

        <Form.Row>
          <Form.Group as={Col} controlId="refinance_interest_rate">
            <Form.Label>Refi Interest Rate</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="refinance_term">
            <Form.Label>Refi Term (yrs)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>


        </Form.Row>

        <Button onClick={AnalyzeDeal} variant="primary" type="submit">
          Analyze Deal
        </Button>
      </Form>

      {/* Display results */}
      <div id="results"></div>
      <div id="blurb"></div>
      <div id="metrics"></div>


    </div>
  );
};

function AnalyzeDeal(e) {
  e.preventDefault();

  // Property Details Variables
  var propAddress = document.getElementById("address").value;
  var propCity = document.getElementById("city").value;
  var propState = document.getElementById("state").value;
  var propZip = document.getElementById("zip").value;
  var propBedrooms = document.getElementById("bedrooms").value;
  var propBaths = document.getElementById("baths").value;
  var propGarage = document.getElementById("garage").value;
  var propSize = Number(document.getElementById("house_size_sq_ft").value);
  var propLotSqFt = Number(document.getElementById("lot_size_sq_ft").value);
  var propBuilt = Number(document.getElementById("year_built").value);
  var propType = document.getElementById("property_type").value;
  var propAskingPrice = document.getElementById("asking_price").value;

  // Financial Analysis Variables
  var purchasePrice = Number(document.getElementById("purchase_price").value);
  var rehabCost = Number(document.getElementById("rehab_cost").value);
  var downPaymentPercent = Number(document.getElementById("down_payment_percent").value);
  var rehabInterestRate = Number(document.getElementById("rehab_interest_rate").value);
  // var rehabLoanTerm = document.getElementById("rehab_loan_term");
  var postRehabPrice = Number(document.getElementById("post_rehab_price").value);
  // var rehabDuration = document.getElementById("rehab_duration");
  var monthlyRent = Number(document.getElementById("monthly_rent").value);
  var annualTaxes = Number(document.getElementById("annual_taxes").value);
  var annualInsurance = Number(document.getElementById("annual_insurance").value);
  var annualHoa = Number(document.getElementById("annual_hoa").value);
  var refinanceInterestRate = Number(document.getElementById("refinance_interest_rate").value)
  var refinanceTerm = Number(document.getElementById("refinance_term").value)
  // make sure button click is properly bind to function
  console.log("link was clicked");
  
  // Calculations: Sale and Rental
  var d = Number(new Date().getFullYear)
  var homeAge = d - propBuilt
  var propLotAcres = (propLotSqFt / 43560).toFixed(2)
  var totalInvestment = purchasePrice + rehabCost
  var equityGenerated = postRehabPrice - totalInvestment
  var hardMoneyDownPaymentAmount = (downPaymentPercent/100) * totalInvestment
  var hardMoneyLoanAmount = totalInvestment - hardMoneyDownPaymentAmount
  var hardMoneyMonthlyPayment = ((rehabInterestRate / 100) * hardMoneyLoanAmount) / 12

      // if strategy is an outright sale
  var realtorCommission = 0.06 * hardMoneyLoanAmount
  var saleClosingCost = 0.03 * postRehabPrice
  var saleProfit = postRehabPrice - (hardMoneyLoanAmount + realtorCommission + saleClosingCost) - hardMoneyDownPaymentAmount
  var roiSale = (hardMoneyDownPaymentAmount / saleProfit) * 100
  
      // if strategy is a refinance rental
  var monthlyTaxes = (annualTaxes / 12).toFixed(2)
  var monthlyInsurance = (annualInsurance / 12).toFixed(2)
  var monthlyHoa = (annualHoa / 12).toFixed(2)

  var effectiveMonthlyRent = (0.97 * monthlyRent).toFixed(2)  // 3% for rental loss
  var monthlyManagementFees = 100


  var startingBalance = hardMoneyLoanAmount 
  var refinanceInterestRateDec = refinanceInterestRate / 100
  var refinanceTermMonths = refinanceTerm * 12 // in months
  var monthlyRefiInterestRate = refinanceInterestRateDec / 12
  var powerCalc = Math.pow((1 + monthlyRefiInterestRate), refinanceTermMonths)
  var refiMonthlyPayment = (startingBalance * ((monthlyRefiInterestRate * (1 + powerCalc))/(powerCalc - 1))).toFixed(2)
  var totalMonthlyExpenses = Number(refiMonthlyPayment) + Number(monthlyTaxes) + Number(monthlyInsurance) + Number(monthlyHoa) + Number(monthlyManagementFees)

  var monthlyCashFlow = effectiveMonthlyRent - (refiMonthlyPayment + monthlyTaxes + monthlyInsurance + monthlyHoa + monthlyManagementFees)
  var cashOnCashRoi = ((Number((effectiveMonthlyRent - totalMonthlyExpenses)*12) / hardMoneyDownPaymentAmount ) * 100).toFixed(2)

  var capRate = ((Number(effectiveMonthlyRent - totalMonthlyExpenses) / hardMoneyDownPaymentAmount ) * 100).toFixed(2)
  

  
  
  
  console.log("loan amt: ", hardMoneyLoanAmount)
  console.log("equity generated: ", equityGenerated);
  console.log("hard money monthly: ", hardMoneyMonthlyPayment);
  console.log("sale profit: ",saleProfit);
  console.log("refi monthly payment: ",refiMonthlyPayment);
  console.log("rental monthly cash: ", monthlyCashFlow);

  // remove form and display results
  var mainForm =  document.getElementById("main_form")
  mainForm.style.display = "none"

  var resultsDiv = document.getElementById("results")
  var resultsTitle = document.createTextNode("RESULTS")
  resultsDiv.appendChild(resultsTitle)

  var blurbDiv = document.getElementById("blurb")
  var propBlurb1 = "A " + propType + " located at " + propAddress + ", " + propCity + ", " + propState + " "+ propZip + " , built in " + propBuilt + ". This home is " + homeAge + " years old, and has " + propBedrooms + " bedrooms, " + propBaths + " bathrooms, " + propSize + " sq ft, " + propGarage + " car garage, on a " + propLotAcres + " acre lot." 
  var propBlurb2 = " The asking price for this property is $" + propAskingPrice + "."

  var blurb1 = document.createTextNode(propBlurb1)
  var blurb2 = document.createTextNode(propBlurb2)

  blurbDiv.appendChild(document.createElement("br"))
  blurbDiv.appendChild(blurb1)
  blurbDiv.appendChild(document.createElement("br"))
  blurbDiv.appendChild(blurb2)
  blurbDiv.appendChild(document.createElement("br"))


  var metricsDiv = document.getElementById("metrics")
  
  var metricsblurb1 = "Purchase price: $" + purchasePrice + ". Rehab Cost: $" + rehabCost + ". Total Investment: $" + totalInvestment + ". Down payment: " + downPaymentPercent + "%. Rehab Interest Rate: " + rehabInterestRate + "%. "
  var flipStrategy = "If the exit strategy is a sale, see metrics below: "
  var flipMetrics = "Post Rehab Value: $" + postRehabPrice + ". Equity Generated: $" + equityGenerated + ". Profit: $" + saleProfit + ". "
  var flipMetrics2 = "ROI = " + roiSale + "%. Cash In = $" + hardMoneyDownPaymentAmount + ". Cash Out = $" + (saleProfit + hardMoneyDownPaymentAmount)
  var rentalStrategy = "If the exit strategy is a rental, see metrics below: "
  var rentalMetrics1 = "Monthly Income: $" + effectiveMonthlyRent + "."
  var rentalMetrics2 = "Monthly Expenses: $" + totalMonthlyExpenses + "."
  var rentalExpenses = "Mortgage: " + refiMonthlyPayment + ". Taxes: " + monthlyTaxes + ". Insurance: " + monthlyInsurance + ". HOA Fees: " + monthlyHoa + ". Management Fees: " + monthlyManagementFees + "."
  var rentalMonthlyCashFlow = "Monthly cash flow is $" + (Number(effectiveMonthlyRent - totalMonthlyExpenses)).toFixed(2)
  var rentalMetrics3 = "Cash on Cash ROI = " + cashOnCashRoi + "%. Cap Rate = " + capRate + "%."

  var metrics1 = document.createTextNode(metricsblurb1)
  var metrics2 = document.createTextNode(flipStrategy)
  var metrics3 = document.createTextNode(flipMetrics)
  var metrics9 = document.createTextNode(flipMetrics2)
  var metrics4 = document.createTextNode(rentalStrategy)
  var metrics5 = document.createTextNode(rentalMetrics1)
  var metrics6 = document.createTextNode(rentalMetrics2)
  var metrics7 = document.createTextNode(rentalExpenses)
  var metrics8 = document.createTextNode(rentalMonthlyCashFlow)
  var metrics10 = document.createTextNode(rentalMetrics3)

  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics1)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics2)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics3)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics9)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics4)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics5)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics6)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics7)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics8)
  metricsDiv.appendChild(document.createElement("br"))
  metricsDiv.appendChild(metrics10)
  metricsDiv.appendChild(document.createElement("br"))





}

export default DataInputs;
