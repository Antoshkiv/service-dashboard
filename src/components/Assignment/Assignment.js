import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { getTime } from "../../utils/getTime";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import ServiceItem from "../ServiceItem";
import TechnicianInfo from "../TechnicianInfo";

const Assignment = ({ assignmentData }) => {
  const [technicianData, setTechnicianData] = useState(null);
  const [technicianDataLoading, setIsTechnicianDataLoading] = useState(true);
  const [technicianDataError, setIsTechnicianDataError] = useState(null);

  useEffect(() => {
    fetchData(`/bff/technician/${assignmentData.technicianId}`, 500)
      .then((res) => {
        setTechnicianData(res.data);
      })
      .catch((e) => setIsTechnicianDataError(e))
      .finally(() => setIsTechnicianDataLoading(false));
  }, []);

  const startDate = new Date(assignmentData.startDate);
  const endDate = new Date(assignmentData.endDate);

  return (
    <div className="assignment-container">
      <div className="technician-info-container">
        {technicianDataLoading && <Loader text="Loading technician info ..." />}
        {technicianData !== null && technicianDataError === null && (
          <TechnicianInfo technicianData={technicianData} />
        )}
        {technicianDataError !== null && (
          <ErrorMessage errorData={technicianDataError} />
        )}
      </div>
      <div>
        <span className="title">Technician ID:</span>{" "}
        {assignmentData.technicianId}
      </div>
      <div>
        <span className="title">Status:</span> {assignmentData.status}
      </div>
      <div>
        <span className="title">Start date:</span> {getTime(startDate)}
      </div>
      <div>
        <span className="title">End date:</span> {getTime(endDate)}
      </div>
      <div>
        <span className="title">Remarks:</span> {assignmentData.remarks}
      </div>
      <div className="full-width">
        <span className="title">Services:</span>{" "}
        <ol className="service-list">
          {assignmentData.services.map((service) => {
            return (
              <li key={service.id}>
                <ServiceItem service={service} />
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <span className="title">Location:</span>{" "}
        <div>Latitude: {assignmentData.location.lat}</div>
        <div>Longitude: {assignmentData.location.long}</div>
        <div>Name: {assignmentData.location.name}</div>
        <div>City: {assignmentData.location.city}</div>
        <div>Province: {assignmentData.location.province}</div>
        <div>PostalCode: {assignmentData.location.postalCode}</div>
      </div>
    </div>
  );
};

export default Assignment;
