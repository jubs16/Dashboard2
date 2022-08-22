/* import React, { memo, useContext } from "react";
import { sideBarData } from "./layers/sideBarData";
import { useNavigate, useLocation } from "react-router";
import { SidebarContext } from "./abstract/SidebarContext";
import { BsBoxArrowInLeft, BsBoxArrowInRight, BsMoonStars, BsSun } from "react-icons/bs";
import ToolTip from "react-tooltip";

const Sidebar = ({color, icon}) => {
  console.log("sidebar rendered");
  const { sidemenu, setSidemenu } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className={sidemenu ? "collapse" : "sideBar"}>
      <ul className="sideBarList">
        {sideBarData.map((ps, key) => {
          return (
            <li
              key={key}
              className="row"
              data-tip={ps.title}
              data-for="pTip"
              sidebar={sidemenu.toString()}
              id={location.pathname === ps.p ? "active" : ""}
              onClick={() => {
                navigate(ps.title);
              }}
            >
              <div className="icon">{ps.icon}</div>
              {sidemenu ? (
                <ToolTip id="pTip" place="right" effect="solid"/>
              ) : (
                <div className="title">{ps.title}</div>
              )}
            </li>
          );
        })}
        <div className="sidebar-control">
        <li className="row" onClick={()=>color(theme => !theme)}>
          <div className="icon space">
            {icon ? (
              <BsMoonStars size={25} />
            ) : (
              <BsSun size={25} />
            )}
          </div>
        </li>        
        <li className="row" onClick={() => setSidemenu(sidemenu => !sidemenu)}> 
          <div className="icon space">
            {sidemenu ? (
              <BsBoxArrowInLeft size={25} />
            ) : (
              <BsBoxArrowInRight size={25} />
            )}
          </div>
        </li>
        </div>
      </ul>
    </div>
  );
};
export default memo(Sidebar);

*/

import React, { memo } from "react";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineBarChart,
  AiOutlineTransaction,
  AiOutlineWallet,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Sidebar = ({ color }) => {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/">
          {" "}
          <span className="logo">Dash 2</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineHome className="icon" />
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              navigate("/users");
            }}
          >
            <AiOutlineDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <li
            onClick={() => {
              navigate("/users/29393");
            }}
          >
            <AiOutlineBarChart className="icon" />
            <span>Expenses</span>
          </li>
          <li
            onClick={() => {
              navigate("/transactions");
            }}
          >
            <AiOutlineTransaction className="icon" />
            <span>Transactions</span>
          </li>
          <li
            onClick={() => {
              navigate("/wallet");
            }}
          >
            <AiOutlineWallet className="icon" />
            <span>Wallet</span>
          </li>
          <p className="title">Extra</p>
          <li
            onClick={() => {
              navigate("/home");
            }}
          >
            <AiOutlineHeart className="icon" />
            <span>Activity</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => color((theme) => true)}
        ></div>
        <div
          className="colorOptions"
          onClick={() => color((theme) => false)}
        ></div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
