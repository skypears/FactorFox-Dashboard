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
  const navitems = [
    "Dashboard",
    "Setup",
    "Contacts",
    "Transactions",
    "Reports",
    "Graphs",
    "Payments Due",
    "Integrations",
  ];

  return (
    <div className="theme-nav">
      <Nav className="ps-3">
        {navitems.map((item, index) => (
          <NavItem key={index}>
            <NavLink active href="#">
              {item}
            </NavLink>
          </NavItem>
        ))}
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle color="transparent" className="text-white nav-link">
            <i className="bi bi-grip-horizontal pe-none"></i>
          </DropdownToggle>
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
