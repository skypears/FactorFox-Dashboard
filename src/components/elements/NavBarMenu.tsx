import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input, InputGroup } from 'reactstrap'
import { useMediaQuery } from 'react-responsive'
import { IMenuItem } from "../data/Index";
import DDMenu from './DDMenu'

interface NavBarMenuProps {
  data: IMenuItem[];
}
const NavBarMenu = ({ data }: NavBarMenuProps) => {
  const media768 = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="theme-nav" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Nav className="ps-3">
        {media768 ? (
          <>
            {data.map(({ name }, index: number) => (
              <NavItem key={index}>
                <NavLink href="#">{name}</NavLink>
              </NavItem>
            ))}
          </>
        ) : (
          <DDMenu title="Header Menu" icon="grid" data={data} showAlways />
        )}
      </Nav>
      <div className="search-section d-none d-md-block px-4">
        <InputGroup size="sm">
          <Input placeholder="Search" />
          <Button color='light' outline>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default NavBarMenu