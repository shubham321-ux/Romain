import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/TRIBE 2@4x 2.svg";
import filtersvg from "../assets/Filter.svg"
import searchSvg from "../assets/search.svg";
import personSvg from "../assets/man.svg"
import cartSvg from "../assets/cart.svg";
// import locationSvg from "../assets/locationSvg"
const Header = () => {
  return (
    <header>
      <div className="main-header-div">
        <div className="header-div1 width100 ">
          <div className=" flex  gap ">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.72564 4.384C9.67444 4.19184 9.57028 3.9872 9.49332 3.808C8.57188 1.5936 6.5586 0.799999 4.933 0.799999C2.75684 0.799999 0.360039 2.2592 0.0400391 5.26704V5.8816C0.0400391 5.9072 0.0488392 6.1376 0.0614792 6.2528C0.240839 7.68624 1.37188 9.2096 2.21668 10.643C3.12548 12.1789 4.06852 13.6896 5.00308 15.1997C5.57908 14.2142 6.15316 13.2158 6.7162 12.2558C6.86964 11.9741 7.04756 11.6925 7.20116 11.4237C7.30356 11.2446 7.49908 11.0656 7.58852 10.899C8.49716 9.23552 9.96004 7.5584 9.96004 5.9072V5.2288C9.96004 5.04976 9.73812 4.42256 9.72564 4.384ZM4.97284 7.4688C4.33316 7.4688 3.633 7.14896 3.2874 6.2656C3.23588 6.12496 3.24004 5.8432 3.24004 5.81744V5.42064C3.24004 4.29456 4.1962 3.7824 5.02804 3.7824C6.05204 3.7824 6.8442 4.60176 6.8442 5.62576C6.8442 6.64976 5.99684 7.4688 4.97284 7.4688Z"
                fill="#4E4E4E"
              />
            </svg>
            <h2 className="header-text-heading">Location</h2>
          </div>
          <div className="logo-div">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="last-header-div flex">
          <div className="input-div header-input-div">
            <input
            placeholder="seacrh"
            />
            <img src={filtersvg} alt="" />
            <div className="search-div"><img src={searchSvg}/></div>
            <div className="filter-div"></div>
          </div>
          </div>
         
        </div>
        <div className="header-div2"></div>
      </div>
    </header>
  );
};

export default Header;
