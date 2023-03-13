import React, { useEffect, useReducer, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
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
import { validation } from "../../data/validation";
import "./login.scss";
import handleApi from "../../data/apireq";

interface LoginProps {
  loginStatus: (data: any) => void;
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "setFormData":
      return {
        ...state,
        formdata: action.payload,
      };
    case "setErrorData":
      return {
        ...state,
        errordata: action.payload,
      };
    case "setShowPass":
      return {
        ...state,
        showPass: action.payload,
      };
    case "setSpinner":
      return {
        ...state,
        spinner: action.payload,
      };
    default:
      return state;
  }
};
const Login = ({ loginStatus }: LoginProps) => {
  const [state, dispatch] = useReducer(reducer, {
    errordata: { email: "", password: "" },
    formdata: { email: "atul@factorfox.com", password: "factor" },
    showPass: false,
    spinner: false,
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  const submitForm = (e: any) => {
    e.preventDefault();
    const errorData = validation(state.formdata);
    if (Object.keys(errorData).length == 0) {
      dispatch({ type: "setSpinner", payload: true });
      handleApi(state.formdata).then((res) => {
        if (res == 200) {
          loginStatus(true);
          localStorage.setItem("user", state.formdata.email);
        } else if (res == 502) {
          dispatch({
            type: "setErrorData",
            payload: {
              email: "Invalid Credentials",
              password: "Invalid Credentials",
            },
          });
          dispatch({ type: "setSpinner", payload: false });
        } else {
          dispatch({ type: "setSpinner", payload: false });
        }
      });
    } else {
      // setErrorData(errorData);
      dispatch({ type: "setErrorData", payload: errorData });
    }
  };
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
                          value={state.formdata.email}
                          onChange={(e) =>
                            dispatch({
                              type: "setFormData",
                              payload: {
                                ...state.formdata,
                                email: e.target.value,
                              },
                            })
                          }
                          placeholder="demouser@factorfox.com"
                        />
                      </InputGroup>
                      {state.errordata.email && (
                        <label className="error">{state.errordata.email}</label>
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
                          type={!state.showPass ? "password" : "text"}
                          name="password"
                          id="password"
                          placeholder="********"
                          value={state.formdata.password}
                          onChange={(e) =>
                            dispatch({
                              type: "setFormData",
                              payload: {
                                ...state.formdata,
                                password: e.target.value,
                              },
                            })
                          }
                        />
                        <InputGroupText className="bg-white">
                          <a
                            href="#"
                            className="text-reset"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch({
                                type: "setShowPass",
                                payload: !state.showPass,
                              });
                            }}
                          >
                            <i
                              className={`bi bi-${
                                !state.showPass ? "eye-slash" : "eye"
                              }`}
                            ></i>
                          </a>
                        </InputGroupText>
                      </InputGroup>
                      {state.errordata.password && (
                        <label className="error">
                          {state.errordata.password}
                        </label>
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
                        className={`px-5 py-2 shadow btn btn-primary`}
                        disabled={state.spinner}
                      >
                        {state.spinner ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Logging In...
                          </>
                        ) : (
                          "Login"
                        )}
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
