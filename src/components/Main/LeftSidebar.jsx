import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { CompanyLogo } from "./";


const LeftSidebar = ({ icon }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        color="link"
        className="fs-2"
        onClick={() => {
          setShow(true);
        }}
      >
        <i className={`bi bi-${icon}`}></i>
      </Button>
      <Offcanvas
        isOpen={show}
        toggle={() => {
          setShow(false);
        }}
        style={{ maxWidth: "300px" }}
      >
        <OffcanvasHeader
          toggle={() => {
            setShow(false);
          }}
        >
          <CompanyLogo />
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav vertical>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default LeftSidebar;
