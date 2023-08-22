import React from "react";
import "../css/Header.css";
import logo from "../assests/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className='header-main'>
        <div className='img-div' style={{ width: "30%" }}>
          <img src={logo} height={"50%"} width={"20%"} />
        </div>
        <div className='search'>
          <div class='search-container'>
            <input
              type='text'
              class='search-input'
              placeholder='Select City...'
            />
            <div class='search-icon'>
              <AiOutlineSearch />
            </div>
          </div>
          <button className='button1'>Contact Us</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
