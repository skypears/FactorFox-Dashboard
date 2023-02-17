import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { useMediaQuery } from 'react-responsive'
import { IMenuItem } from "../data/Index";
import DDMenu from './DDMenu'

interface NavBarMenuProps {
  data: IMenuItem[];
}
const NavBarMenu = ({ data }: NavBarMenuProps) => {
  const media768 = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="theme-nav">
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
    </div>
  );
};

export default NavBarMenu