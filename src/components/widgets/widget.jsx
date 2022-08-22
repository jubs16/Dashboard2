import React from "react";
import {
  HiArrowSmUp,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineCurrencyEuro,
  HiCreditCard,
} from "react-icons/hi";
export default function widget({ type }) {
  //temporary data
  let data;
  const amt = 345;
  const diff = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const amount =  Math.floor(amt + Math.random() * (amt - diff));

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <HiOutlineUserCircle className="icon" style={{backgroundColor: "rgba(128,0,128,0.2)", color: "purple",}}/>,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: <HiOutlineShoppingCart className="icon" style={{backgroundColor: "rgba(218,162,30,0.2)", color: "gold",}}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <HiOutlineCurrencyEuro className="icon" style={{backgroundColor: "rgba(0,128,0,0.2)", color: "green",}}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "Account balance",
        icon: <HiCreditCard className="icon" style={{backgroundColor: "rgba(255,0,0,0.2)", color: "red",}}/>,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "€"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <HiArrowSmUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}
