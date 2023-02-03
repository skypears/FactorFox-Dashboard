import React, {useState} from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const NavigationBar = (args) => {

  return (
    <div className="theme-nav">
      <Nav className="ps-3">
        {[
          "Dashboard",
          "Setup",
          "Contacts",
          "Transactions",
          "Reports",
          "Graphs",
          "Payments Due",
          "Integrations",
        ].map((item,index) => (
          <NavItem key={index}>
            <NavLink active href="#">
              {item}
            </NavLink>
          </NavItem>
        ))}
        <UncontrolledDropdown nav direction='down'>
          <DropdownToggle caret color="transparent" className="text-white">Dropdown</DropdownToggle>
          <DropdownMenu {...args}>
            
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem>Dropdown Item Text</DropdownItem>
           
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default NavigationBar;
