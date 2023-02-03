import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,Table,
  UncontrolledAccordion,
} from "reactstrap";

const Content = () => {
  const [activeTabm1, setActiveTabm1] = useState("1");
  const [activeTabm2, setActiveTabm2] = useState("1");

  return (
    <div className="content">
      <Container fluid>
        <Row className="pt-3">
          <Col sm="12">
            <Card>
              <CardHeader className="fw-bold">Performance</CardHeader>
              <CardBody>
                <Container fluid className="px-0">
                  <Row>
                    <Col sm="4">
                      <Card>
                        <CardBody>
                          <Nav pills className="border-bottom">
                            <NavItem>
                              <NavLink
                                className={activeTabm1 == "1" ? "active" : ""}
                                onClick={() => setActiveTabm1("1")}
                              >
                                ADV
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={activeTabm1 == "2" ? "active" : ""}
                                onClick={() => setActiveTabm1("2")}
                              >
                                INV
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={activeTabm1}>
                            <TabPane tabId="1">
                              <Row>
                                <Col sm="12" className="pt-3">
                                  <Table striped responsive size="sm">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="2">
                              <Row>
                                <Col sm="12">
                                  <Card body className="border-0">
                                    <CardTitle>
                                      Special Title Treatment
                                    </CardTitle>
                                    <CardText>
                                      With supporting text below as a natural
                                      lead-in to additional content.
                                    </CardText>
                                    <Button>Go somewhere</Button>
                                  </Card>
                                </Col>
                              </Row>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Aging Summary</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <CardBody>
                          <Nav pills className="border-bottom">
                            <NavItem>
                              <NavLink
                                className={activeTabm2 == "1" ? "active" : ""}
                                onClick={() => setActiveTabm2("1")}
                              >
                                Day
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={activeTabm2 == "2" ? "active" : ""}
                                onClick={() => setActiveTabm2("2")}
                              >
                                Month
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={activeTabm2 == "3" ? "active" : ""}
                                onClick={() => setActiveTabm2("3")}
                              >
                                YTD
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={activeTabm2}>
                            <TabPane tabId="1">
                              <Row>
                                <Col sm="12" className="pt-3">
                                  <Table striped responsive size="sm">
                                    <tbody>
                                      <tr>
                                        <td>
                                          Invoice Purchased by Invoice Date
                                        </td>
                                        <td className="text-right">
                                          €146,060.00
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Net Advances by Advance Date</td>
                                        <td className="text-right">€109,201.79</td>
                                      </tr>
                                      <tr>
                                        <td>Advance Discounts</td>
                                        <td className="text-right">€664.48</td>
                                      </tr>
                                      <tr>
                                        <td>Received Discounts</td>
                                        <td className="text-right">€559,258.06</td>
                                      </tr>
                                      <tr>
                                        <td>Total Receipts</td>
                                        <td className="text-right">
                                          €4,909,121.20
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>Total Chargebacks</td>
                                        <td className="text-right">€800.00</td>
                                      </tr>
                                      <tr>
                                        <td>Advance Chargebacks</td>
                                        <td className="text-right">€800.00</td>
                                      </tr>
                                      <tr>
                                        <td>Discount Chargebacks</td>
                                        <td className="text-right">€0.00</td>
                                      </tr>

                                      <tr>
                                        <td>Paid Fuel Adv</td>
                                        <td className="text-right">€110.00</td>
                                      </tr>
                                      <tr>
                                        <td>Paid Pre-Funds</td>
                                        <td className="text-right">€0.00</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="2">
                              <Row>
                                <Col sm="12">
                                  <Card body className="border-0">
                                    <CardTitle>
                                      Special Title Treatment
                                    </CardTitle>
                                    <CardText>
                                      With supporting text below as a natural
                                      lead-in to additional content.
                                    </CardText>
                                    <Button>Go somewhere</Button>
                                  </Card>
                                </Col>
                              </Row>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
