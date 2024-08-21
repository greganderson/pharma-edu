import { Container, Form, FormControl, Button } from "react-bootstrap";
import SearchResult from "./SearchResult";





const SearchPage: React.FC = () => {

  return(
    <Container fluid style={{width: "100vw", height: "100vh"}} className="d-flex flex-column align-items-start ps-0">
      <Form className="body p-3">
        <h2 className="me-2">Search</h2>
        <FormControl
          type="search"
          placeholder="Last Name"
          className="mx-1 w-100"
          aria-label="Search" />
        <FormControl
          type="search"
          placeholder="First Name"
          className="me-1 w-100"
          aria-label="Search" /> 
        <FormControl
          type="search"
          placeholder="Birthdate"
          className="me-1 w-100"
          aria-label="Search" />
      </Form>
      {SearchResultObj.map((obj, index) => <SearchResult name={obj.name} descriptor={obj.descriptor} someProfile={obj.profile} />)
    </Container>
  );

};

export default SearchPage