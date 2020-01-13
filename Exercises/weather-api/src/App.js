import React, { Component } from "react";
import "./App.css";
import cloudy from "./img/weather-icons/cloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <>
      //   <div className="app">
      //   <header className="app__header">

      //   </header>
      //   </div>
      // </>
      <div className="app">
        <header className="app__header">
          <input type="text" name="" id="city" placeholder="Type a city name" />
          <input type="button" value="FIND WEATHER" id="btnSearch" />
        </header>
        <main className="app__main">
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
          <section className="futureWeather">
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
            <section>
              <p>03:00</p>
              <img src={cloudy} alt="cloudyicon" />
              <p>8 &#12444;</p>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
