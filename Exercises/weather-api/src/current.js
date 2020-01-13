import React from "react";
import cloudy from "./img/weather-icons/cloudy.svg";

export default function Current() {
  return (
    <>
      <section className="currentWeather">
        <img src={cloudy} alt="cloudyicon" />
        <p id="white">Overcast clouds</p>
        <p>
          <span>Temperature</span> 10 to 11&#x2103;
        </p>
        <p>
          <span>Humidity </span>78%<span> Pressure </span>1008.84
        </p>
      </section>
    </>
  );
}
