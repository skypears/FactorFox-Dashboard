import  {  useEffect, useState } from "react";
import NavBarMenu from "./NavBarMenu";
import { Nav, InputGroup, Input, Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";
import { Logo, Sidebar, DDMenu } from "./Index";
import { navItems, mainMenuItems } from "../data/Index";
import Cookies from "js-cookie";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { Login } from "../pages";
interface HeaderProps {
  loginStatus: (data: any) => void;
}

const Header = ({ loginStatus }: HeaderProps) => {  
  function logout() {
    Cookies.set("loggedIn", "false");
    localStorage.clear();
    loginStatus(false);
  };


  const [userDDOpen, setuserDDOpen] = useState(false);
  const toggle = () => setuserDDOpen((prevState) => !prevState);
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
            <Dropdown isOpen={userDDOpen} toggle={toggle}>
              <DropdownToggle caret color="transparent">
                <span className="pe-none">
                  <i className="bi bi-person pe-2 fs-5"></i>
                  <span className="d-none d-sm-inline">Atul Yadav</span>
                </span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <i className="bi bi-person-circle pe-2"></i>
                  <span>Profile</span>
                </DropdownItem>
                <DropdownItem onClick={()=>logout()}>
                  <i className="bi bi-box-arrow-right pe-2"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
