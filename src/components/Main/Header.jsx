import React from "react";
import {
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  InputGroup,
  Input,
  Button,
  NavItem,
  NavLink,

} from "reactstrap";
import {LeftSidebar, CompanyLogo, RightSideBar} from "../Main";
const Header = (args) => {

  return (
    <div className="header-section">
      <div className="logo-section d-flex align-items-center">
        <LeftSidebar icon={"list"} />
        <CompanyLogo />
      </div>
      <div className="search-section ms-auto d-none d-md-block">
        <InputGroup>
          <Input placeholder="Search" />
          <Button>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
      <div className="menu-section">
        <Nav>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle caret color="transparent" className="text-start ">
              <span className="pe-none">
                <i className="bi bi-person-fill pe-2 fs-5"></i>
                <span className="">
                  <span className="d-none d-md-inline">Atul Yadav </span>
                </span>
              </span>
            </DropdownToggle>
            <RightSideBar icon={"pause"} />
            <DropdownMenu {...args}>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem>Dropdown Item Text</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    </div>
  );
};
export default Header;
