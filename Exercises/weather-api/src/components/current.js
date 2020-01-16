import React from "react";
export default function Current(props) {
  return (
    <>
      <section className="currentWeather">
        <img src={props.src} alt="weatherIcon" />
        <p id="white">{props.description}</p>
        <p>
          <span>Temperature</span> {props.tempMin} to {props.tempMax}&#x2103;
        </p>
        <p>
          <span>Humidity </span>
          {props.humidity}%<span> Pressure </span>
          {props.pressure}
        </p>
      </section>
    </>
  );
}
