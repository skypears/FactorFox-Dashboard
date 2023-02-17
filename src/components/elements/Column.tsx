import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
interface ColumnProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[] | any;
  chartData?: React.ReactNode | React.ReactNode[] | any;
  tabTitles?: string[];
  type?: "tab" | "chart" | "card";
}
const Column = ({ title, children, chartData, tabTitles }: ColumnProps) => {
  children = React.Children.toArray(children);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>
            <div className="d-flex justify-content-between">
              <span>{title}</span>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Show All
                </Label>
              </FormGroup>
            </div>
          </CardTitle>
        </CardHeader>
      )}
      <CardBody>
        {chartData ? (
          <Pie
            data={chartData}
            style={{ maxHeight: "360px" }}
            className="d-block mx-auto"
          />
        ) : tabTitles ? (
          <div>
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
              {children.map((child: React.ReactNode, index: number) => (
                <TabPane key={index} tabId={index}>
                  {child}
                </TabPane>
              ))}
            </TabContent>
          </div>
        ) : (
          children
        )}
      </CardBody>
    </Card>
  );
};
Column.defaultProps = {
  type: "card",
};
export default Column;
