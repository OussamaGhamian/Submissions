import React from "react";
export default function Future(props) {
  return (
    <>
      <section>
        <p>{props.time.substring(11, 16)}</p>
        <img src={props.src} alt="weatherIcon" />
        <p>{props.temp}&#12444;</p>
      </section>
    </>
  );
}
