import React, { useState } from "react";
import JsonData from "../layers/tableData.json";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const [users] = useState(JsonData.slice(0, 200));
  const [pageNumber, setPageNumber] = useState(0);
  const [foundUsers, setFoundUsers] = useState(JsonData);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = foundUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((itemList, index) => {
      return (
        <tr key={index}>
          <th scope="row">{itemList.id}</th>
          <td>{itemList.firstName}</td>
          <td>{itemList.lastName}</td>
          <td>{itemList.email}</td>
          <td>
            {" "}
            <span className="userEdit">
              <Link to="/users/83927">
                {" "}
                <button type="button" className="btn btn-primary btn-sm">
                  Edit
                </button>
              </Link>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </span>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = JsonData.filter((user) => {
        return user.firstName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
      setPageNumber(0);
    } else {
      setFoundUsers(JsonData);
      // If the field is empty return whole json
    }
  };

  return (
    <div className="users">
      <h1 className="title">Table</h1>
      <input
        type="search"
        onChange={filter}
        id="form1"
        className="input form-control"
        placeholder="Type user"
        aria-label="Search"
      />

      <div className="table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"> ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mail Address</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default UsersTable;
