import React from "react";

function Appoint({ appoint, setId }) {
  return (
    <div className="appnt-item">
      <div>
        <span></span>
        <h4>{appoint.user_name}-</h4>
        <h4>{appoint.service_name}</h4>
      </div>
      <button onClick={() => setId(appoint.id)}>View</button>
    </div>
  );
}

export default Appoint;
