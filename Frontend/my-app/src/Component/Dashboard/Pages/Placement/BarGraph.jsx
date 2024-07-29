import React, { PureComponent } from "react";
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
    name: "Google",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Amazon",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Microsoft",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Deloite",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Persistent",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "J.P Morgan",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "TCS",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/dashed-line-chart-9rttw2";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
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
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


