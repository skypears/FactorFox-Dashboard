import React from "react";
// import all components used in this file
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// create a functional component

const ColumnSection = ({ title, children }) => {
  children = React.Children.toArray(children);
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>
            <div className="d-flex justify-content-between">
              <span>{title}</span>
              <FormGroup check>
                <Label check>Show All</Label>
                <Input type="checkbox" />
              </FormGroup>
            </div>
          </CardTitle>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ColumnSection;
