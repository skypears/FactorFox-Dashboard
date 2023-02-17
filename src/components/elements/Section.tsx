import React, { useState } from 'react'
import { Row, Col, Card, CardHeader, Button, Collapse, CardBody, Container } from 'reactstrap'

interface SectionProps {
    sectionName: string;
    children: React.ReactNode;
}
const Section = ({ sectionName, children }: SectionProps) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
     <Row className="section" >
      <Col sm="12">
        <Card>
          <CardHeader
            className="fw-bold d-flex align-items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{sectionName}</span>
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
            <CardBody className='p-2'>
              <Container fluid className="px-0">
                <Row>{children}</Row>
              </Container>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

export default Section