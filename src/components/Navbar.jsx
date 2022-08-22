import React from "react";
import {
  BsSearch,
  BsGlobe2,
  BsMoonStars,
  BsSun,
  BsBellSlash,
  BsFillChatSquareTextFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar({color, icon}) {
  console.log("navbar rendered");

  const profileData = ["Users", "Settings", "Log Out"];
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="input-group input-group-sm">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text" id="search-addon">
            <BsSearch />
          </span>
        </div>
        <div className="items">
          <div className="item"></div>
          <div className="item">
            <BsGlobe2 className="icon" />
            English
          </div>
          <div className="item" onClick={()=>color(theme => !theme)}>
          {icon ? <BsSun className="icon" />  : <BsMoonStars className="icon" />} 
          </div>
          <div className="item">
            <BsBellSlash className="icon" />
            <span className="badge badge-pill badge-danger">3</span>
          </div>
          <div className="item">
            <BsFillChatSquareTextFill className="icon" />
            <span className="badge badge-pill badge-danger">8</span>
          </div>
          <div className="item">
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="avatar"
            />    
          <div className="dropdown">
            <button
              className='"btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"'
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {profileData.map((data, index) => (
                <li key={index}>
                   <Link to={`/${data}`}></Link>
                  <a className="dropdown-item" href={`/${data}`}>
                    {data}
                  </a>
                </li>
              ))}{" "}
            </ul>
          </div>    </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
