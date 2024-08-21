import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import AddressInput from "./AddressInput"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Accordion } from "react-bootstrap"

const PatientProfile: React.FC = () => {

    return(
        <div>
            
            <div className="body pt-5"> 
              <Form className="section pt-5">
                <h2>Patient Information</h2>
                <InputGroup className="my-2" >
                  <InputGroup.Text>Last, First Name</InputGroup.Text>
                  <FormControl aria-label="Last Name" placeholder="Last Name"/>
                  <FormControl aria-label="First Name" placeholder="First Name"/>
                </InputGroup>
                
                <InputGroup className="my-2">
                  <InputGroup.Text>Date of Birth</InputGroup.Text>
                  <FormControl aria-label="date" type="date" />
                </InputGroup>

                <AddressInput />

                <InputGroup className="my-2">
                  <InputGroup.Text>Primary Doctor</InputGroup.Text>
                  <FormControl aria-label="Doctor Profile" placeholder="Doctor Profile"/>
                </InputGroup>

                <InputGroup className="my-2">
                  <FloatingLabel 
                    controlId="floatingTextarea"
                    label={"Allergies"}
                    className="mb-3">
                      <FormControl as="textarea" aria-label="Allergies" placeholder="Leave a Comment here" style={{height: '100px'}}/>
                  </FloatingLabel>
                </InputGroup>
              </Form>
            <div className="line"/>
            <div className="section pt-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><h2></h2></Accordion.Header>
              <Form>
                <InputGroup className="my-2">
                  <InputGroup.Text>BIN</InputGroup.Text>
                  <FormControl aria-label="BIN" placeholder="BIN" />
                </InputGroup>

                <InputGroup className="my-2">
                  <InputGroup.Text>PCN</InputGroup.Text>
                  <FormControl aria-label="PCN" placeholder="PCN" />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputGroup.Text>Person Code</InputGroup.Text>
                  <FormControl aria-label="Person Code" placeholder="Person Code" />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputGroup.Text>ID #</InputGroup.Text>
                  <FormControl aria-label="ID #" placeholder="ID #" />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputGroup.Text>Group #</InputGroup.Text>
                  <FormControl aria-label="Group #" placeholder="Group #" />
                </InputGroup>
              </Form>
              </Accordion.Item>
            </Accordion>
            </div>
            </div>
        </div>
    )
}

export default PatientProfile