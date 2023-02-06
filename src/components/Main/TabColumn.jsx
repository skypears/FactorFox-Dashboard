import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const TabColumn = ({ tabTitles, children }) => {
  children = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Nav pills>
        {tabTitles.map((tabTitle, index) => (
          <NavItem key={index}>
            <NavLink
              className={activeTab == index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tabTitle}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {children.map((child, index) => {
          return (
            <TabPane key={index} tabId={index}>
              {child}
            </TabPane>
          );
        })}
      </TabContent>
    </>
  );
};

export default TabColumn;
