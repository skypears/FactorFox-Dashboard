import React , { useState } from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Nav, NavItem, NavLink } from 'reactstrap'

const RightSideBar = ({icon, className}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
              color="link"
        className={`fs-5 ${className}`}
  
        onClick={() => {
          setShow(true);
        }}
      >
        <i className={`bi bi-${icon}`}></i>
      </Button>
      <Offcanvas
        direction="end"
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
    </>
  );
}

export default RightSideBar