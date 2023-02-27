
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
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
import {validation} from '../../data/validation'
import "./login.scss";
interface LoginProps {
  callback: (data: any) => void;
}
const Login = ({ callback }: LoginProps) => {
  const submitForm = (e: any) => {
    e.preventDefault();
    const errorData = validation(formdata);
    console.log(errorData);
    if (Object.keys(errorData).length == 0) {
      callback(true);
      return <Navigate to="/dashboard" replace />;
    } else {
      setErrorData(errorData);
    }
      
  };
  const [errordata, setErrorData] = useState({email:'', password:''});
  const [formdata, setFormData] = useState({email:'', password:''});
  const [showPass, setShowPass] = useState(false);
  React.useEffect(() => {
    document.title = "Login";
  }, []);
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
                  <Form className="mt-5" method="post" onSubmit={submitForm}>
                    <FormGroup>
                      <Label for="email" className="d-block d-sm-none">
                        Username
                      </Label>
                      <InputGroup>
                        <InputGroupText className="d-none d-sm-inline">
                          <i className="bi bi-person-fill pe-2 "></i>
                          Username
                        </InputGroupText>
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          value={formdata.email}
                          onChange={(e) =>
                            setFormData({ ...formdata, email: e.target.value })
                          }
                          placeholder="demouser@factorfox.com"
                        />
                      </InputGroup>
                      {errordata.email && (
                        <label className="error">{errordata.email}</label>
                      )}
                    </FormGroup>
                    <FormGroup>
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
                          id="password"
                          placeholder="********"
                          value={formdata.password}
                          onChange={(e) =>
                            setFormData({
                              ...formdata,
                              password: e.target.value,
                            })
                          }
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
                      {errordata.password && (
                        <label className="error">{errordata.password}</label>
                      )}
                      <Link
                        to={"/forgotpassword"}
                        className="float-end px-0 btn btn-link"
                      >
                        Forgot Password?
                      </Link>
                    </FormGroup>
                    <FormGroup className="mt-5 text-center">
                      <Button
                        type="submit"
                        className="px-5 py-2 shadow btn btn-primary"
                      >
                        Login
                      </Button>
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
