import React from "react";
import NavBarMenu from "./NavBarMenu";
import { Nav, InputGroup, Input, Button } from "reactstrap";
import { Logo, Sidebar, DDMenu } from "./Index";
import { navItems, userMenuItems, mainMenuItems } from "../data/Index";

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="logo-section d-flex align-items-center">
          <Sidebar icon={"list"} logo />
          <Logo height={30} shrinkOnSmallScreen />
        </div>
        <div className="main-menu ms-auto position-relative">
          <Nav>
            <DDMenu title={"Menu"} icon="grid" data={mainMenuItems} />
          </Nav>
        </div>
        <div className="search-section d-none d-md-block px-4">
          <InputGroup size="sm">
            <Input placeholder="Search" />
            <Button>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </div>
        <div className="menu-section">
          <Nav>
            <DDMenu title={"Atul Yadav"} icon="user" data={userMenuItems} />
          </Nav>
        </div>
        <div className="right-sidebar-section">
          <Sidebar icon={"bell-fill"} dir="end" />
        </div>
      </div>
      <NavBarMenu data={navItems} />
    </>
  );
};

export default Header;
