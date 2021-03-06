import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admin from "../../assets/images/admin.png";

function AddService() {
  return (
    <div className="service-page">
      <div className="service-nav">
        <h1>
          COMPANY<span>LOGO</span>
        </h1>
        <ul>
          <li style={{ background: "#EAE8E8" }}>PROFILE</li>
          <li>WALLET</li>
          <li>MY APPOINTMENTS</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="service-body">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="service-info">
          <ul className="title-details">
            <li>SERVICES</li>
            <li>REVIEWS</li>
            <li>ABOUT</li>
          </ul>
          <div className="title-body"></div>
          <div className="prof-details">
            <img src={admin} alt="profile " />
            <h3>CASTORIS BABERSHOP</h3>
            <h5>PROFESSIONAL</h5>
            <p>STARS</p>
            <button>Message</button>
            <h4>BUSINESS HOURS</h4>
            <div className="biz-time">
              <ul>
                <li>SUN:</li>
                <li>MON:</li>
                <li>TUE:</li>
                <li>WED:</li>
                <li>THUR:</li>
                <li>FRI:</li>
                <li>SAT:</li>
              </ul>
              <ul>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
                <li className="time">9AM -2PM</li>
              </ul>
            </div>
          </div>
          <div className="map-details"></div>
        </div>
      </div>
    </div>
  );
}

export default AddService;
