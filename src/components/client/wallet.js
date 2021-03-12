import React, { useState } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import Transaction from "./transaction";

function Wallet() {
  const [gross, setGross] = useState(94480);
  const [transactions, setTransactions] = useState([
    {
      name: "John Doe",
      type: "deposit",
      date: "09/03/2021",
    },
    {
      name: "Merf Don",
      type: "deposit",
      date: "09/03/2021",
    },
    {
      name: "Harry Koe",
      type: "deposit",
      date: "09/03/2021",
    },
    {
      name: "Jpaul Dan",
      type: "deposit",
      date: "09/04/2021",
    },
    {
      name: "kev kev",
      type: "deposit",
      date: "01/03/2021",
    },
    {
      name: "Merf Don",
      type: "deposit",
      date: "09/03/2021",
    },
    {
      name: "Harry Koe",
      type: "deposit",
      date: "09/03/2021",
    },
  ]);
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
          <div className="transaction">
            <h4>TRANSACTION HISTORY</h4>
            <div className="tras">
              {transactions.map((tras, x) => {
                return <Transaction transaction={tras} key={x} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
