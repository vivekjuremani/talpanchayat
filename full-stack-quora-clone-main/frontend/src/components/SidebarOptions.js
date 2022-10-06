import { Email, Call, PlaceOutlined } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption logo-container">
        <img
          src="https://seeklogo.com/images/A/azadi-ka-amrit-mahotsav-hindi-logo-1BE5E3568C-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="sidebarOption">
        <div className="contact_info">
          <h1>Contact Us</h1>
          <div className="email">
            <div>
              <a href="mailto:vipulp25703@gmail.com" className="email-info">
                vipulp25703@gmail.com
              </a>
            </div>
            <Email />
          </div>
          <div className="email">
            <div>
              <a href="tel:9725406871" className="email-info">
                9725406871
              </a>
            </div>
            <Call />
          </div>
          <div className="location email">
            <div className="address email-info">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <PlaceOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarOptions;
