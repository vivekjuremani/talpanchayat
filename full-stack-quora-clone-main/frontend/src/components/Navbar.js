import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      {/* <!-- Navbar0  --> */}
      <nav id="Navbar0">
        <div id="Head_GUJ">ગુજરાત સરકાર &nbsp; GOVERNMENT OF GUJARAT</div>
        <div classNameName="navbar0" style={{ float: "right" }}>
          {/* <a href="#">MAIN CONTENT</a> */}
          {/* <!-- <a href="#"><img src="Searchicon.png" alt="Search"></a> --> */}
          <div className="dropdown0">
            <button className="dropbtn0">
              TRANSLATE
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown0-content">
              {/* <a href="#">ENGLISH</a>
              <a href="#">HINDI</a>
              <a href="#">GUJARATI</a> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- <br> --> */}
      <section
        id="head"
        styles={{
          clear: "both",
        }}
      >
        <section>
          <div id="img_id1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png"
              alt="1_page"
              className="img_emblem"
            />
          </div>
          <div id="text">
            પાલનપુર તાલુકા પંચાયત <br />
            Palanpur Taluka Panchayat
          </div>
          <div id="img_id2">
            <img
              src="https://seeklogo.com/images/A/azadi-ka-amrit-mahotsav-hindi-logo-1BE5E3568C-seeklogo.com.png"
              alt="2_page"
              className="img_Digital"
            />
          </div>
        </section>
      </section>
      {/* <!-- <br>  --> */}
      {/* <!-- navbar1 --> */}
      <nav>
        <div className="navbar1">
          <link to="/">HOME</link>
          <link to="/fourm">FORUM</link>
          <div className="dropdown">
            <button className="dropbtn">
              DEPARTMENT
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              {/* <a href="#">AUTHORITY</a>
              <a href="#">MANAGEMENT DEPT</a>
              <a href="#">CLEANING</a>
              <a href="#">ADD MORE</a> */}
            </div>
          </div>
          <link to="/Activities">ACTIVITIES</link>
          <link to="/ContactSupport">CONTACT & SUPPORT</link>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
