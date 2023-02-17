import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Direction } from "reactstrap/types/lib/Offcanvas";
import Logo from "./Logo";

interface SidebarProps {
  icon: string;
    dir?: Direction;
    logo?: boolean;
}
const Sidebar = ({ icon, dir, logo }: SidebarProps) => {
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
        direction={dir}
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
{ logo && <Logo />}
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

export default Sidebar;
