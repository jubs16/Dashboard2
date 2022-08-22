import React from 'react'
import { BsClockHistory, BsArrowCounterclockwise, BsXOctagon, BsCheckCircle } from "react-icons/bs";

const table = () => {
    const data = [
        {
            id: "938267",
            name: "Kevin Peterson",
            date: "28 March",
            amt: "528€",
            method: "PayPal",
            status: "APPROVED",
            icon: <BsCheckCircle/>
        },
        {
            id: "927626",
            name: "Ricky Willson",
            date: "01 April",
            amt: "192€",
            method: "Visa Payments",
            status: "PENDING",
            icon: <BsClockHistory/>
        },
        {
            id: "7829292",
            name: "Nick Wood",
            date: "12 April",
            amt: "68€",
            method: "Amazon Pay",
            status: "APPROVED",
            icon: <BsCheckCircle/>
        },
        {
            id: "921728",
            name: "Ronald Barr",
            date: "15 April",
            amt: "283€",
            method: "Master Card",
            status: "REFUND",
            icon: <BsArrowCounterclockwise/>
        },
        {
            id: "928616",
            name: "Steive Ricky",
            date: "03 May",
            amt: "28€",
            method: "Cash On Delivery",
            status: "PENDING",
            icon: <BsClockHistory/>
        },
        {
            id: "298372",
            name: "Rick Pointing",
            date: "06 May",
            amt: "982€",
            method: "Cash On Delivery",
            status: "APPROVED",
            icon:  <BsCheckCircle/>
        },
        {
            id: "982192",
            name: "Christopher Bil",
            date: "15 May",
            amt: "928€",
            method: "Bank Tranfer",
            status: "APPROVED",
            icon: <BsCheckCircle/>
        },
        {
            id: "638928",
            name: "Bob Mel",
            date: "22 May",
            amt: "660€",
            method: "Apple Pay",
            status: "FAILED",
            icon: <BsXOctagon/>
        },
        {
            id: "383672",
            name: "William Jones",
            date: "01 June",
            amt: "107€",
            method: "Cash On Delivery",
            status: "APPROVED",
            icon: <BsCheckCircle/>
        },   
        {
          id: "9272721",
          name: "Silvien Smith",
          date: "03 June",
          amt: "82€",
          method: "Cash On Delivery",
          status: "PENDING",
          icon: <BsClockHistory/>
      }, 
      {
        id: "6291014",
        name: "Nathalie North",
        date: "08 June",
        amt: "29€",
        method: "Google Pay",
        status: "APPROVED",
        icon: <BsCheckCircle/>
    },              
    ]
  return (
    <div className="table">
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Trans. ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Method</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((itemList, index) =>
    <tr key={index}>
      <th scope="row">{itemList.id}</th>
      <td>{itemList.name}</td>
      <td>{itemList.date}</td>
      <td>{itemList.amt}</td>
      <td>{itemList.method}</td>
      <td> <span className={`icon ${itemList.status}`}>{itemList.icon}</span>
         {itemList.status}</td>
    </tr>
  )}
  </tbody>
</table>
    </div>
  )
}

export default table