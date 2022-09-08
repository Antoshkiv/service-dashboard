import React from "react";

function TechnicianInfo({ technicianData }) {
  return (
    <div>
      <div className="title">Technician Info</div>
      <div>
        Name: {`${technicianData.firstName} ${technicianData.lastName}`}
      </div>
      <div>Email: {technicianData.email}</div>
    </div>
  );
}

export default TechnicianInfo;
