import React, { useState } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admini from "../../assets/images/admin.png";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="client-body">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="service-info">
          <div className="title-body">
            <h2>Service History</h2>
            <Link to="/client/service/mandy">SErvice provider</Link>
          </div>
          <div className="prof-details">
            <div className="blank-pic"></div>
            <p>STARS</p>
            <h3>User Name</h3>
            <h5>Role Client</h5>
          </div>
          <div className="map-details"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
