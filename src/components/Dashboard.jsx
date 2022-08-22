import React, { memo, useContext } from "react";
import { SidebarContext } from "./abstract/SidebarContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 2790,
    pv: 1800,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 7890,
    pv: 1900,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3420,
    pv: 2600,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 2265,
    pv: 9600,
    amt: 2100,
  },
];

const Dashboard = () => {
  console.log("dashboard rendered");
  const { sidemenu } = useContext(SidebarContext);
  console.log(sidemenu);
  return (
    <div className={sidemenu ? "collapse" : "sideBar"}>
      <h1 className="title">Dashboard</h1>
      <h2>{sidemenu ? "collapse" : "sideBar"}</h2>
      <div className="card">
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};
export default memo(Dashboard);