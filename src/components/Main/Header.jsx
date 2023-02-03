import React, { useState } from "react";
import {
  Nav, NavItem, NavLink, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, UncontrolledDropdown, InputGroup, Input, Button } from "reactstrap";
const Header = (args) => {

 
  return (
    <div className="header-section">
      <div className="logo-section">
        <img src="./assets/images/fflogo.png" alt="" />
      </div>
      <div className="search-section ms-auto">
        <InputGroup>
          <Input />
          <Button><i className="bi bi-search"></i> </Button>
        </InputGroup>
      </div>
      <div className="menu-section">
        <Nav>
         
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle caret color="transparent">
              <i className="bi bi-person-fill pe-2"></i>
              <span>Atul Yadav</span>
            </DropdownToggle>
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
