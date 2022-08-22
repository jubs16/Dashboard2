import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2018",
    Total: 4000,
    Amount: 2400,
    Discount: 2400,
  },
  {
    name: "2019",
    Total: 3000,
    Amount: 1398,
    Discount: 2210,
  },
  {
    name: "2020",
    Total: 2000,
    Amount: 9800,
    Discount: 2290,
  },
  {
    name: "2021",
    Total: 2780,
    Amount: 3908,
    Discount: 2000,
  },
  {
    name: "2022",
    Total: 1890,
    Amount: 4800,
    Discount: 2181,
  },
  {
    name: "2023",
    Total: 2390,
    Amount: 3800,
    Discount: 2500,
  },
  {
    name: "2024",
    Total: 3490,
    Amount: 4300,
    Discount: 2100,
  },
  {
    name: "2025",
    Total: 7830,
    Amount: 3080,
    Discount: 6200,
  },
  {
    name: "2026",
    Total: 5380,
    Amount: 1865,
    Discount: 3160,
  },
  {
    name: "2027",
    Total: 1980,
    Amount: 6832,
    Discount: 4572,
  },
];

function chart() {
  return (
    <div className="chart">
      <h1 className="title">Total Revenue</h1>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="Total" stackId="a" fill="#8884d8" />
          <Bar dataKey="Amount" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Discount" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default chart;