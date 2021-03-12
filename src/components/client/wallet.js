import React, { useState } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";

function Wallet() {
  const [gross, setGross] = useState(94480);

  return (
    <>
      <div className="wallet">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="wallet-info">
          <div className="wallet-gross">
            <h4>GROSS EARNINGS</h4>
            <h2>{gross}</h2>
            <button>Withdraw</button>
          </div>
          <div className="earning-monthly"></div>
          <div className="transaction"></div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
