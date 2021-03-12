import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Transaction({ transaction }) {
  return (
    <div className="tras-item">
      <AccountCircleIcon style={{ marginRight: "1rem", fontSize: "65px" }} />
      <h4>{transaction.name}</h4>
      <h4>{transaction.date}</h4>
      <h4>TYPE: {transaction.type}</h4>
    </div>
  );
}

export default Transaction;
