import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import D3 from "./D3";

export default function Home() {
  return (
    <div className="">
      <nav class="navbar row">
        <div class="container-fluid d-flex header ">
          <div className="logo-content p-2 flex-grow-1 ">
            <div className="navbar-logo ">
              <p>Logo</p>
            </div>
            <p className="navbar-vhup">V-Hub</p>
          </div>
          {/* =================================== */}
          <div className="p-2 input-search">
            <input type="text" placeholder="Search"></input>
            <div className="iconsearch">
              <BiSearch className="icon" />
            </div>
          </div>
          {/* ===================================== */}
          <div className="navbarc dropdown">
            <ul>
              <li>
                <AiFillMessage className="mess-logo logonavc" />
                <span className="mess">13</span>
              </li>
              <li>
                <IoIosNotifications className="not-logo logonavc" />
                <span className="not">2</span>
              </li>
              <li className="dropdown-toggle ">
                <GoPerson className="acc-logo logonavc" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ========================Sidebar==================== */}
      <div className="content-section">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">
                <FiHome className="sidebar-logo" />
                {"Home"}
              </Link>
            </li>
            <li>
              <Link to="/Login">
                <AiOutlineLogin className="sidebar-logo" />
                {"Login "}
              </Link>
            </li>
          </ul>
        </div>
        {/* ============Content============*/}
        <div className="content">
          <h3>My Dashboard</h3>
          <div className="content-items row">
            <div className="content-item col-12 col-sm-12 col-lg-6 col-xl-4 my-2">
              <input
                type="text"
                placeholder="search for contacts..."
                className="search-input"
              ></input>
            </div>
            <div className="content-item col-12 col-sm-12 col-lg-6 col-xl-4 my-2">
              <input
                type="text"
                placeholder="Filter By Day.."
                className="filter "
              ></input>
            </div>
            <div className="content-item col-11 col-sm-11 col-xl-4 my-2">
              <button>Search</button>
            </div>
          </div>
          {/* ============details========= */}
          <div className="details">
            <div className="group1  row">
              <div className="details-item item1 my-2 col-xl-3 col-lg-4 col-md-11 col-sm-10 col-10">
                <span></span>
                <h4>500</h4>
                <FaDollarSign className="FaDollarSign" />
                <p>All Clients</p>
              </div>
              <div className="details-item item2 col-xl-3 col-lg-4 col-md-11 col-sm-10 mt-2">
                <span></span>
                <h4>500</h4>
                <AiFillStar className="AiFillStar" />
                <p>All AWD</p>
              </div>
            </div>
            <div className="group2 my-3 row">
              <div className="details-item item3 col-xl-3 col-lg-4 col-md-11 col-sm-10">
                <span></span>
                <h4>500</h4>
                <MdDeliveryDining className="MdDeliveryDining" />
                <p>Online Delivers</p>
              </div>
            </div>
          </div>
          <D3 />
        </div>
      </div>
    </div>
  );
}
