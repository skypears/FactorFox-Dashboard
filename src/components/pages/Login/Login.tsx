import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Logo } from "../../elements/Index";
import "./login.scss";

const Login = () => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <div className="login">
      <Container>
        <Row>
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={12}
            className="vh-100 mx-auto d-flex align-items-center"
          >
            <Container className="login-form py-4 shadow rounded">
              <Row>
                <Col className="border-bottom">
                  <div className="logo-section text-center my-3 ">
                    <Logo height={40} />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={10} className="mx-auto">
                  <div className="text-center my-4">
                    <h3 className="fw-bold">Welcome</h3>
                    <p className="small text-black-50 fw-semibold ">
                      Please Sign In to your Account
                    </p>
                  </div>

                  <Form className="mt-5">
                    <FormGroup>
                      <Label for="email" className="d-block d-sm-none">
                        Username
                      </Label>
                      <InputGroup>
                        <InputGroupText className="d-none d-sm-inline">
                          <i className="bi bi-person-fill pe-2 "></i>
                          Username
                        </InputGroupText>
                        <Input type="text" id="email" name="email" placeholder="demouser@factorfox.com" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="text-end">
                      <Label for="password" className="d-block d-sm-none">
                        Password
                      </Label>
                      <InputGroup>
                        <InputGroupText className="d-none d-sm-inline">
                          <i className="bi bi-key-fill pe-2 "></i>
                          Password&nbsp;
                        </InputGroupText>
                        <Input
                          type={!showPass ? "password" : "text"}
                          name="password"
                          id="password" placeholder="********"
                        />
                        <InputGroupText className="bg-white">
                          <a
                            href="#"
                            className="text-reset"
                            onClick={() => setShowPass(!showPass)}
                          >
                            <i
                              className={`bi bi-${
                                !showPass ? "eye-slash" : "eye"
                              }`}
                            ></i>
                          </a>
                        </InputGroupText>
                      </InputGroup>
                      <Link to={'/forgotpassword'} className="px-0 btn btn-link">
                        Forgot Password?
                      </Link>
                    </FormGroup>
                    <FormGroup className="mt-5 text-center">
                      <Link to="/" className="px-5 py-2 shadow btn btn-primary">
                        Login
                      </Link>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
