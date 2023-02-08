import React from "react";
import { useMediaQuery } from "react-responsive";
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
  const media768 = useMediaQuery({ query: "(min-width: 768px)" });
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
        {media768 ? (
          <>
            {navitems.map((item, index) => (
              <NavItem key={index}>
                <NavLink active href="#">
                  {item}
                </NavLink>
              </NavItem>
            ))}

          </>
        ) : (
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle
              caret
              color="transparent"
              className="text-white nav-link"
            >
              Header Menu
            </DropdownToggle>
            <DropdownMenu>
              {navitems.map((item, index) => (
                <DropdownItem key={index}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
      </Nav>
    </div>
  );
};

export default NavigationBar;
