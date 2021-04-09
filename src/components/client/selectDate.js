import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import sciove from "../../assets/images/scyov.png";

export default function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="item_overlay" id="select_date">
      <div className="item-1">
        <h4>SELECT A DATE</h4>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          onChange={(date) => setStartDate(date)}
          inline
        />
        <h3>Apply</h3>
      </div>
      <div className="item-2">
        <img src={sciove} alt="scissor" className="img-ov" />
      </div>
    </div>
  );
}
