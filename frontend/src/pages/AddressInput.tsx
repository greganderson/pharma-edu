import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AddressInput: React.FC = () => {

  const statesArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  
  return (
    <InputGroup className="my-2">

      <Row>
        <div className="my-2">
          <Form.Label><h5 className="m-0">Address</h5></Form.Label>
          <FormControl aria-label="street" placeholder="street"/> 
        </div>
        <Col>
          <FormControl aria-label="city" placeholder="city" />
        </Col>

        <Col>
          <FormControl aria-label="zip" placeholder="Zip code"/>
        </Col>
        <Col xs={2}>
          <Form.Select aria-label="state">
            {statesArray.map((state, index) =>
              <option value={index}>{state}</option>
            )}
          </Form.Select>
        </Col>
      </Row>
    </InputGroup>
  )
}

export default AddressInput