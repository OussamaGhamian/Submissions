import React from "react";
import cloudy from "./img/weather-icons/cloudy.svg";
export default function Future() {
  return (
    <>
      <section>
        <p>03:00</p>
        <img src={cloudy} alt="cloudyicon" />
        <p>8 &#12444;</p>
      </section>
    </>
  );
}
