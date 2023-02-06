import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardBody, Container, Button, Collapse } from 'reactstrap'

const RowSection = ({ headerName, children }) => {
// remove whitespace and add '-' to headerName
  const hid = headerName.replace(/\s+/g, "-").toLowerCase();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Row className="pt-3 row-section" id={hid+'-row-section'}>
      <Col sm="12">
        <Card>
          <CardHeader
            className="fw-bold d-flex align-items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{headerName}</span>
            <Button
              color="transparent"
              
              className="ms-auto py-0"
            >
              <i
                className={`bi collapse-icon ${
                  isOpen ? "bi-arrow-up-circle" : "bi-arrow-down-circle"
                }`}
              ></i>
            </Button>
          </CardHeader>
          <Collapse isOpen={isOpen}>
            <CardBody>
              <Container fluid className="px-0">
                <Row>{children}</Row>
              </Container>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export default RowSection