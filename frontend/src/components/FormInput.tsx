import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;

}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder}) => {

  return(
    <InputGroup className="my-1">
      <InputGroup.Text><h5 className="m-0">{label}</h5></InputGroup.Text>
      <Form.Control type={type} placeholder={placeholder} />
    </InputGroup>
  )

}

export default FormInput