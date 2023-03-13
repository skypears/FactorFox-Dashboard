import {useState } from "react";
import NavBarMenu from "./NavBarMenu";
import {
  Nav,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavItem,
} from "reactstrap";
import { Logo, Sidebar, DDMenu } from "./Index";
import { navItems, mainMenuItems } from "../data/Index";
import Cookies from "js-cookie";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
  loginStatus: (data: any) => void;
}

const Header = ({ loginStatus }: HeaderProps) => {
  function logout() {
    Cookies.remove("loggedIn");
    localStorage.clear();
    loginStatus(false);
  }
  const media12 = useMediaQuery({ query: "(min-width: 1200px)" });
  const [userDDOpen, setuserDDOpen] = useState(false);
  const toggle = () => setuserDDOpen((prevState) => !prevState);
  return (
    <>
      <div className="header-section">
        <div className="logo-section d-flex align-items-center">
          <Sidebar icon={"list"} logo />
          <Logo height={30} shrinkOnSmallScreen />
        </div>
        {media12 ? (
          <>
            <div className="main-menu ms-auto position-relative">
              <Nav>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-chat"></i>
                    <span>Let's Chat</span>
                  </NavLink>{" "}
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-calendar"></i>
                    <span>Calender</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-clipboard"></i>
                    <span>Bank Files</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-file-earmark"></i>
                    <span>QuickBooks</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-ticket"></i>
                    <span>Generate Ticket</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-calendar2-check"></i>
                    <span>Ticket Status</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i className="pe-2 bi bi-arrow-counterclockwise"></i>
                    <span>Releases</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </>
        ) : (
          <>
            <div className="menu-section ms-auto">
              <DDMenu title={"Menu"} icon="grid" data={mainMenuItems} />
            </div>
          </>
        )}

        <div className="user-section border-start border-end">
            <Dropdown isOpen={userDDOpen} toggle={toggle} >
              <DropdownToggle caret color="transparent" outline>
                <span className="pe-none">
                  <i className="bi bi-person pe-2 fs-5"></i>
                  <span className="d-none d-sm-inline small">
                    <span>Atul Yadav</span>
                  </span>
                </span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="py-2">
                  <i className="bi bi-person-circle pe-2"></i>
                  <span>Profile</span>
                </DropdownItem>
                <DropdownItem className="py-2">
                  <i className="bi bi-gear pe-2"></i>
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem className="py-2" onClick={() => logout()}>
                  <i className="bi bi-box-arrow-right pe-2"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
         
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
