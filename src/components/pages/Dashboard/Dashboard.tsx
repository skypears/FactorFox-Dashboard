import React, { useEffect } from "react";
import { Container, Col, Table } from "reactstrap";
import {Column, Section, Header } from "../../elements/Index";

const DashboardPage = () => {
  const chartData = {
    labels: ["0-30", "31-60", "61-90", "90+"],
    datasets: [
      {
        label: "Advances %",
        data: [0.76, 3.25, 0.17, 95.82],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const setCardHeight = () => {
    const rs = document.querySelectorAll<HTMLElement>(".section");
    rs.forEach((r) => {
      const cards = r.querySelectorAll<HTMLElement>(".collapse .card");
      const cardHeight = Math.max(
        ...Array.from(cards).map((c) => c.clientHeight)
      );

      cards.forEach((c) => {
        c.style.height = `${cardHeight}px`;
        c.style.maxHeight = "500px";
      });
    });
  };
  useEffect(() => setCardHeight(), []);
  return (
    <div className="content">
      <Header />
      <Container fluid className="pt-3">
        <Section sectionName="Performance Demo">
          <Col xl={4} md={6}>
            <Column type="tab" tabTitles={["ADV", "INV"]}>
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th className="text-left"></th>
                      <th className="text-left"></th>
                      <th className="text-right ng-binding">Count</th>

                      <th className="text-right ng-binding">Advance Due</th>
                      <th className="text-right">%</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr
                      ng-if="!showCustomfield('CapitalNow')"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <b className="ng-binding">Total</b>
                      </td>
                      <td className="text-right ng-binding">751</td>
                      <td className="text-right ng-binding">13,067,760.48</td>
                      <td className="text-right"></td>
                    </tr>

                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          0-30
                        </a>
                      </td>
                      <td className="text-right ng-binding">125</td>

                      <td className="text-right ng-binding">156,886.66</td>
                      <td className="text-right ng-binding">1.20</td>
                    </tr>
                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          31-60
                        </a>
                      </td>
                      <td className="text-right ng-binding">39</td>

                      <td className="text-right ng-binding">347,680.00</td>
                      <td className="text-right ng-binding">2.66</td>
                    </tr>

                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          61-90
                        </a>
                      </td>
                      <td className="text-right ng-binding">22</td>

                      <td className="text-right ng-binding">24,499.00</td>
                      <td className="text-right ng-binding">0.19</td>
                    </tr>
                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          90+
                        </a>
                      </td>
                      <td className="text-right ng-binding">565</td>

                      <td className="text-right ng-binding">12,538,694.82</td>
                      <td className="text-right ng-binding">95.95</td>
                    </tr>

                    <tr>
                      <td colSpan={8} className="ng-scope">
                        <a
                          href="#"
                          ng-click="ShowMoreArInvoice()"
                          className="ng-binding"
                        >
                          More
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th className="text-left"></th>
                      <th className="text-left"></th>
                      <th className="text-right ng-binding">Count</th>

                      <th className="text-right ng-binding">Advance Due</th>
                      <th className="text-right">%</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr
                      ng-if="!showCustomfield('CapitalNow')"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <b className="ng-binding">Total</b>
                      </td>
                      <td className="text-right ng-binding">780</td>
                      <td className="text-right ng-binding">14,729,304.58</td>
                      <td className="text-right"></td>
                    </tr>

                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          0-30
                        </a>
                      </td>
                      <td className="text-right ng-binding">45</td>

                      <td className="text-right ng-binding">54,875.00</td>
                      <td className="text-right ng-binding">0.37</td>
                    </tr>
                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          31-60
                        </a>
                      </td>
                      <td className="text-right ng-binding">70</td>

                      <td className="text-right ng-binding">412,220.00</td>
                      <td className="text-right ng-binding">2.80</td>
                    </tr>

                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          61-90
                        </a>
                      </td>
                      <td className="text-right ng-binding">19</td>

                      <td className="text-right ng-binding">52,940.00</td>
                      <td className="text-right ng-binding">0.36</td>
                    </tr>
                    <tr
                      ng-if="ARList.length > 0"
                      ng-repeat="item in resultValue=(ARList)"
                      className="ng-scope"
                    >
                      <td></td>
                      <td className="text-left">
                        <a
                          href="#"
                          ng-click="GetDetailsOfData(item);"
                          className="ng-binding"
                        >
                          90+
                        </a>
                      </td>
                      <td className="text-right ng-binding">646</td>

                      <td className="text-right ng-binding">14,209,269.58</td>
                      <td className="text-right ng-binding">96.47</td>
                    </tr>

                    <tr>
                      <td
                        colSpan={8}
                        ng-if="ARList.length > 0"
                        className="ng-scope"
                      >
                        <a
                          href="#"
                          ng-click="ShowMoreArInvoice()"
                          className="ng-binding"
                        >
                          More
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Column>
          </Col>
          <Col xl={4} md={6}>
            <Column
              title="Aging Summary Demo"
              type="chart"
              chartData={chartData}
            />
          </Col>
          <Col xl={4} md={6}>
            <Column tabTitles={["Day", "Month", "YTD"]} type="tab">
              <Table striped responsive size="sm" >
                <tbody >
                  <tr>
                    <td>Invoice Purchased by Invoice Date</td>
                    <td className="text-right">€146,060.00</td>
                  </tr>
                  <tr>
                    <td>Net Advances by Advance Date</td>
                    <td className="text-right">€109,201.79</td>
                  </tr>
                  <tr>
                    <td>Advance Discounts</td>
                    <td className="text-right">€664.48</td>
                  </tr>
                  <tr>
                    <td>Received Discounts</td>
                    <td className="text-right">€559,258.06</td>
                  </tr>
                  <tr>
                    <td>Total Receipts</td>
                    <td className="text-right">€4,909,121.20</td>
                  </tr>

                  <tr>
                    <td>Total Chargebacks</td>
                    <td className="text-right">€800.00</td>
                  </tr>
                  <tr>
                    <td>Advance Chargebacks</td>
                    <td className="text-right">€800.00</td>
                  </tr>
                  <tr>
                    <td>Discount Chargebacks</td>
                    <td className="text-right">€0.00</td>
                  </tr>

                  <tr>
                    <td>Paid Fuel Adv</td>
                    <td className="text-right">€110.00</td>
                  </tr>
                  <tr>
                    <td>Paid Pre-Funds</td>
                    <td className="text-right">€0.00</td>
                  </tr>
                </tbody>
              </Table>
            </Column>
          </Col>
        </Section>
        <Section sectionName="New Schedules">
          <Col xl={4} md={6}>
            <Column title="Recent Entries">
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th>Schedule</th>
                      <th></th>
                      <th>Schedule Amount</th>
                      <th>Payment Type</th>
                      <th>Submitted Date</th>
                      <th>Submitted Time</th>
                      <th>Created Date</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>
                        <a href="#">000S-5565</a>
                      </td>
                      <td></td>
                      <td>10,000.00</td>
                      <td>ACH</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>01/02/23</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">0001</a>
                      </td>
                      <td></td>
                      <td>3,000.00</td>
                      <td>ACH</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>01/02/23</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">000S-5564</a>
                      </td>
                      <td></td>
                      <td>20,000.00</td>
                      <td>ACH</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>01/02/23</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">0004</a>
                      </td>
                      <td></td>
                      <td>1500.00</td>
                      <td>ACH</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>01/02/23</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">0004</a>
                      </td>
                      <td></td>
                      <td>1500.00</td>
                      <td>ACH</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>01/02/23</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Column>
          </Col>
          <Col xl={4} md={6}>
            <Column title="Approve Advances">
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th>Payment Type</th>
                      <th>Total Schedule Amount</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>EFT</td>
                      <td>5,040,942.01</td>
                    </tr>
                    <tr>
                      <td>ACH</td>
                      <td>5,212,376.05</td>
                    </tr>
                    <tr>
                      <td>EFS</td>
                      <td>79,943.30</td>
                    </tr>
                    <tr>
                      <td>COMDATA</td>
                      <td>1,550.00</td>
                    </tr>
                    <tr>
                      <td>CITI CC</td>
                      <td>12,455.00</td>
                    </tr>
                  </tbody>
                  <tfoot >
                    <tr>
                      <th>Total Amount:</th>
                      <th>210,747,771.36</th>
                    </tr>
                  </tfoot>
                </Table>
              </div>
            </Column>
          </Col>
          <Col xl={4} md={6}>
            <Column title="Prospects" tabTitles={["Customer", "Client"]}>
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th>Company</th>
                      <th>Motor Carrier</th>
                      <th>Phone#</th>
                      <th>Created By</th>
                      <th>Submitted Date</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>
                        <a href="#">Aptimust Customer </a>
                      </td>
                      <td>19022023</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Dispin Prospective Customer</a>
                      </td>
                      <td>545</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Doms Prospective Customer</a>
                      </td>
                      <td>0</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">dsfds</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Aptimust Customer</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Table striped responsive size="sm" >
                  <thead >
                    <tr>
                      <th>Company</th>
                      <th>Motor Carrier</th>
                      <th>Phone#</th>
                      <th>Created By</th>
                      <th>Submitted Date</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>
                        <a href="#">Aptimust Customer </a>
                      </td>
                      <td>19022023</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Dispin Prospective Customer</a>
                      </td>
                      <td>545</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Doms Prospective Customer</a>
                      </td>
                      <td>0</td>
                      <td>987678765</td>
                      <td>Arlen</td>
                      <td>30/09/22</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Column>
          </Col>
        </Section>
      </Container>
    </div>
  );
};

export default DashboardPage;
