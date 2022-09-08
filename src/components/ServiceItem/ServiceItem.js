import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

function ServiceItem({ service }) {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [serviceDetailsError, setServiceDetailsError] = useState(null);
  const [isServiceDetailsLoading, setIsServiceDetailsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `/data/service?code=${service.code}?package=${service.package}`,
      1000
    )
      .then((res) => {
        setServiceDetails(res.data);
      })
      .catch((e) => {
        setServiceDetailsError(e);
      })
      .finally(() => {
        setIsServiceDetailsLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <span className="title">Type: </span>
        {service.type}
      </div>
      <div>
        <span className="title">Package: </span>
        {service.package}
      </div>
      {isServiceDetailsLoading && (
        <Loader text="Service details is loading..." />
      )}
      {serviceDetails !== null && (
        <div className="service-item__details">
          <span className="title">Details: </span>
          <div>Code: {serviceDetails.code}</div>
          <div>Upload speed: {serviceDetails.uploadSpeed}</div>
          <div>DownloadSpeed speed: {serviceDetails.downloadSpeed}</div>
        </div>
      )}
      {serviceDetailsError !== null && (
        <ErrorMessage errorData={serviceDetailsError} />
      )}
    </div>
  );
}

export default ServiceItem;
