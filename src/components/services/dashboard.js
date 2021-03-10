import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="dashboard-info">
          <div className="clients"></div>
          <div className="total"></div>
          <div className="annual"></div>
          <div className="calendar"></div>
          <div className="appnt"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
