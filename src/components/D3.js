import React from "react";
import "./D3.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function D3() {
  return (
    <div className="section-d3 row">
      <div className="stats-section col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <h4>STATISTICS</h4>
        <div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>Done AWD</td>
                <td style={{ color: "#36CD59", fontSize: "14px" }}>72.593</td>
              </tr>
              <tr>
                <td>Pending AWD</td>
                <td style={{ color: "#FFDF00" }}>9.307</td>
              </tr>
              <tr>
                <td>Returns AWD</td>
                <td style={{ color: "#FF9900" }}>3.307</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d3 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
        <ResponsiveContainer width="99%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
