import { clippingParents } from "@popperjs/core";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Login = ({ getResponse }) => {
  let msg = 1;
  return (
    <div className="app-container" id="loginpage">
      <div className="h-100 bg-ultimate bg-animation">
        <div className="d-flex h-100vh justify-content-center align-items-center">
          <div className="mx-auto app-login-box col-md-8">
            <div className="app-logo-login mx-auto mb-3">
              <img
                className="d-block mx-auto"
                src="./assets/images/fflogo.png"
                alt=""
              />
            </div>
            <div className="modal-dialog w-100 mx-auto">
              <div className="modal-content p-2">
                <div className="modal-body mx-3 px-sm-5 px-4 pt-4">
                  <div className="h5 modal-title text-center mb-5">
                    <h4 className="mt-2">Welcome</h4>
                    <h5 className="text-secondary small">
                      Please sign in to your account below.
                    </h5>
                  </div>
                  <form className="">
                    <div className="form-row">
                      <div className="col-md-12">
                        <div className="position-relative form-group mb-3">
                          <label
                            htmlFor="username"
                            className="d-block d-md-none"
                          >
                            Username / Email
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text fixedWidth d-none d-md-block">
                                Username
                              </span>
                            </div>
                            <input
                              placeholder="abc@bytexus.com"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="position-relative form-group mb-3">
                          <label
                            htmlFor="password"
                            className="d-block d-md-none"
                          >
                            Password
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text fixedWidth d-none d-md-block">
                                Password
                              </span>
                            </div>
                            <input
                              placeholder="******"
                              type="password"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="position-relative form-check">
                      <input
                        name="check"
                        id="exampleCheck"
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="exampleCheck"
                        className="form-check-label"
                      >
                        Keep me logged in
                      </label>
                    </div>
                  </form>
                  <div className="divider"></div>
                </div>
                <div className="modal-footer mt-3 mb-2 px-3 clearfix">
                  <div className="float-left">
                    <a href="#" className=" btn btn-link btn-sm">
                      Forgot Password ?
                    </a>
                  </div>
                  <div className="float-right">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => getResponse(msg)}
                    >
                      Login to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
