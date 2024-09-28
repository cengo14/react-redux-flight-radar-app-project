import React from "react";
import formatDate from "../utils/formatDate";

const Info = ({ info }) => {
  console.log(info);

  return (
    <div className="info-wrapper">
      <div className="info">
        <h3>{info?.aircraft.model?.text}</h3>
        <h4>{info?.aircraft.model?.code}</h4>
        <p>
          <span>Kuyruk Kodu:</span>
          <span>{info?.aircraft?.registration}</span>
        </p>
        <img src={info?.aircraft?.images?.large[0]?.src} alt="plane" />
        <p>
          <span>Şirket:</span>
          <span>{info?.airline?.name}</span>
        </p>
        <p>
          <span>Kaklış</span>
          <a href={info?.airport.origin?.website} target="_blank">
            {info.airport.origin?.name}
          </a>
        </p>{" "}
        <p>
          <span>Varış: </span>
          <a href={info?.airport.destination?.website} target="_blank">
            {info.airport.destination?.name}
          </a>
        </p>
        <p>
          <span>Kalkış Zamanı:</span>
          <span>{formatDate(info?.time.scheduled?.departure)}</span>
        </p>
        <p>
          <span>İniş Zamanı:</span>
          <span>{formatDate(info?.time.scheduled?.arrival)}</span>
        </p>
      </div>
      <p className={`alert ${info.status?.icon}`}>
        <span>{info.status.text}</span>
      </p>
    </div>
  );
};

export default Info;
