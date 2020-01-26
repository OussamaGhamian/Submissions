import React from "react";
import sideImg from "../img/hero.jpeg";
export default function ContactUs(props) {
  return (
    <main>
      <div class="contact">
        <div class="sideImg">
          <img src={sideImg} alt="" />
        </div>
        <div class="contactForm">
          <h2>Keep in touch</h2>
          <label for="">Email:</label>
          <input type="email" placeholder="Enter your Email here..." id="" />
          <br />
          <br />
          <label for="">Message:</label>

          <textarea
            placeholder="Enter your message here..."
            id=""
            cols="30"
            rows="2"
          ></textarea>
          <br />
          <br />
          <input type="button" value="Send" />
        </div>
      </div>
    </main>
  );
}
