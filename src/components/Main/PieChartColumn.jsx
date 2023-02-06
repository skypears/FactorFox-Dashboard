import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChartColumn = ({ title, chartData }) => {
  return (
    <Card>
      <CardHeader className="pt-3">
        <CardTitle className="mb-2">{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Pie
          data={chartData}
          style={{ maxHeight: "360px" }}
          className="d-block mx-auto"
        />
      </CardBody>
    </Card>
  );
}

export default PieChartColumn