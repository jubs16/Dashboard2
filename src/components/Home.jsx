import React from "react";
import Widget from "./widgets/widget";
import Feature from "./widgets/feature";
import Charts from "./charts/chart";
import Table from "./tables/table";

export default function Home() {
  return (
    <div className="home">
      <div className="widgets">
      <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
        <Feature />
        <Charts />
      </div>
      <div className="tableContainer">
        <div className="tableList">
          Latest Transactions
          <Table />
        </div>
      </div>
    </div>
  );
}