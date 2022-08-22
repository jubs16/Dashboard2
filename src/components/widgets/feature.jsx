import React, { useEffect, useState} from 'react';
import { FiMoreVertical, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Feature () {
  const [percentage, setpercentage] = useState(0);

  useEffect(()=>{
    setTimeout(() => setpercentage(56), 400)
  },[percentage])

  return (
    <div className='feature'>
      <div className="top"><h1 className="title">Total Revenue</h1><FiMoreVertical /></div>
      <div className="bottom">
          <div className="feature-chart">
          <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth="5" />
          </div>
          <p className="title">Total Sales</p>
          <p className="amount">€ 760</p>
          <p className="desc">Last transaction been processed</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <FiArrowUp fontSize="small"/>
                <div className="resultAmount">€ 14.8K</div>  
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last 7 days</div>
              <div className="itemResult negative">
                <FiArrowDown fontSize="small"/>
                <div className="resultAmount">€ 14.8K</div>  
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">This Month</div>
              <div className="itemResult positive">
                <FiArrowUp fontSize="small"/>
                <div className="resultAmount">€ 14.8K</div>  
              </div>
            </div>                        
          </div>
      </div>
    </div>
  )
}