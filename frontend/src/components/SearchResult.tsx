import { Col, Container, Row} from "react-bootstrap"
import { LinkContainer }  from "react-router-bootstrap"


interface SearchResultProps {
  name: string;
  descriptor: string;
  someProfile: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ name, descriptor, someProfile}) => {

  return(
    <Container fluid className="d-flex flex box mt-3">
    <LinkContainer to={someProfile} >
      <Row>
        <Col>
        <h3>{name}</h3>
        </Col>
        <Col xs={6}>
        <h3>{descriptor}</h3>
        </Col>
      </Row>
    </LinkContainer>
    </Container>
  );
};

export default SearchResult