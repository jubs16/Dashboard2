import React from "react";
import { useParams } from "react-router-dom";
import UserChart from "./charts/userchart"
import UserExpenseChart from "./charts/UserExpenseChart";
import Table from "./tables/table";
import {
  FaLinkedinIn,
  FaTwitter,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";

const User = () => {
  const params = useParams();

  console.log(params);
  return (
    <div className="user">
      <div className="userContainer">
        <div className="card-user">
          <div className="profile">   
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="John"
            className="pic"
          />
          <div className="empId"> ID: {params.userId}</div>        
          </div>
           <div className="userInfo">
           <h1 className="name">John Doe</h1>
          <p className="title">CEO & Founder @ Dash2</p>
          <p className="address">Harvard University</p>

          <div className="social">
            <a href="/">
              <FaDribbble className="icon" />
            </a>
            <a href="/">
              <FaLinkedinIn className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
            <a href="/">
              <FaFacebookF className="icon" />
            </a>
          </div>
          <button type="button" className="btn btn-success btn-sm">
            Contact
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm disabled">
            Edit
          </button>
           </div>
          </div> 
                      
      </div>  

       <UserChart />
       <UserExpenseChart />
       <div className="lineBreak">
       </div>
       <div className="userContainer"><p className="tableTitle">Total Sales</p><Table /></div>
       


    </div>
  );
};

export default User;
