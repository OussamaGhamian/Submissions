import React from "react";
import sideImg from "../img/hero.jpeg";
export default function ContactUs(props) {
  return (
    <main>
      <div class="contact">
        <div class="sideImg">
          <img src={sideImg} alt="sideImg" />
        </div>
        <div class="contactForm">
          <h2>Keep in touch</h2>
          <label for="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email here..."
            id="email"
          />
          <br />
          <br />
          <label for="message">Message:</label>

          <textarea
            placeholder="Enter your message here..."
            id="message"
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
