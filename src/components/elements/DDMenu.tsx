import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { IMenuItem } from "../data/Index";
import { Direction } from "reactstrap/types/lib/Dropdown";
interface DDMenuProps {
  direction?: Direction;
  title: string;
  icon?: string;
  data: IMenuItem[];
  showAlways?: boolean;
}
function DDMenu({ direction, title, icon, data, showAlways }: DDMenuProps) {
  const [ddOpen, setDdOpen] = useState(false);
  const toggle = () => setDdOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={ddOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret color="transparent">
          <span className="pe-none">
            {icon && <i className={`bi bi-${icon} pe-2 fs-5`}></i>}

            <span className="">
              <span className={`${!showAlways && 'd-none d-sm-inline'}`}>{title}</span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          {data.map((item, index) => (
            <DropdownItem key={index} className="py-2 d-flex border-bottom">
              {icon && <i className={`pe-2 bi bi-${item.icon}`}></i>}
              <span>{item.name}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DDMenu.propTypes = {
  direction: PropTypes.string,
};

export default DDMenu;
