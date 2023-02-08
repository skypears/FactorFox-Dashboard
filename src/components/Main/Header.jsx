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
import { LeftSidebar, CompanyLogo, RightSideBar } from "../Main";
const mainMenuItems = [
  { name: "Let's Chat", icon: "chat" },
  { name: "Calender", icon: "calendar" },
  { name: "Bank Files", icon: "clipboard" },
  { name: "QuickBooks", icon: "file-earmark" },
  { name: "Generate Ticket", icon: "ticket" },
  { name: "Ticket Status", icon: "calendar2-check" },
  { name: "Releases", icon: "arrow-counterclockwise" },
  { name: "Settings", icon: "gear-fill" },
  { name: "Logout", icon: "box-arrow-right" },
];
const Header = (args) => {
  return (
    <div className="header-section">
      <div className="logo-section d-flex align-items-center">
        <LeftSidebar icon={"list"} />
        <CompanyLogo height={30} shrinkOnSmallScreen />
      </div>
      <div className="main-menu ms-auto position-relative">
        <Nav>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle caret color="link" className="text-start ">
              <span className="pe-none">
                <i className="bi bi-ui-radios-grid pe-2 fs-5"></i>
                <span className="">
                  <span className="d-none d-md-inline">Menu</span>
                </span>
              </span>
            </DropdownToggle>

            <DropdownMenu end className="py-0">
              {mainMenuItems.map(({ icon, name }, index) => (
                <DropdownItem key={index} className="py-2 d-flex border-bottom">
                  <i className={`pe-2 bi bi-${icon}`}></i>
                  <span>{name}</span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
      <div className="search-section d-none d-md-block">
        <InputGroup size="sm">
          <Input placeholder="Search" />
          <Button>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
      <div className="menu-section">
        <Nav>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle caret color="link" className="text-start ">
              <span className="pe-none">
                <i className="bi bi-person-fill pe-2 fs-5"></i>
                <span className="">
                  <span className="d-none d-md-inline">Atul Yadav</span>
                </span>
              </span>
            </DropdownToggle>

            <DropdownMenu end className="py-0">
              <DropdownItem className="py-2 d-flex border-bottom">
                Some Action
              </DropdownItem>
              <DropdownItem className="py-2 d-flex border-bottom">
                Dropdown Item Text
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
      <div className="right-sidebar-section">
        <RightSideBar icon={"bell-fill"} />
      </div>
    </div>
  );
};
export default Header;
