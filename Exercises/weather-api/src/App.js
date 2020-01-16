import React, { Component } from "react";
import "./App.css";
import Search from "./components/search.js";
import Current from "./components/current.js";
import Future from "./components/future";

function getImg(id) {
  let val = "";
  if (id < 300) val = "storm.svg";
  else if (id >= 300 && id < 500) {
    val = "drizzle.svg";
  } else if (id >= 500 && id < 599) val = "rain.svg";
  else if (id >= 600 && id < 699) val = "snow.svg";
  else if (id >= 700 && id < 799) val = "fog.svg";
  else if (id === 800) val = "clear.svg";
  else if (id === 801) val = "partlycloudy.svg";
  else if (id > 801 && id < 806) val = "mostlycloudy.svg";
  return val;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      city: "Beirut",
      bgColor: "yellow"
    };
  }
  async apiCaller(param) {
    const url = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${param}&cnt=8&units=metric&appid=0a09a65a5c0ac1c04f2802c899f4a88f`
    );

    const response = await url.json();
    if (response.cod == "200") {
      this.setState({
        isLoaded: true,
        items: response
      });
      this.chngBgClr();
    } else alert("City not found...");
  }
  chngBgClr(id = this.state.items.list[0].weather[0].id) {
    if (id < 300) this.setState({ bgColor: "#483d8b" });
    else if (id >= 300 && id < 500) this.setState({ bgColor: "#e6e6fa" });
    else if (id >= 500 && id < 599) this.setState({ bgColor: "#7b68ee" });
    else if (id >= 600 && id < 699) this.setState({ bgColor: "#0000ff" });
    else if (id >= 700 && id < 799) this.setState({ bgColor: " #b0e0e6" });
    else if (id === 800) this.setState({ bgColor: "#00008b" });
    else if (id === 801) this.setState({ bgColor: "#191970" });
    else if (id > 801 && id < 806) this.setState({ bgColor: "#008b8b" });
  }
  callbackfunction = childData => {
    this.setState(
      {
        city: childData
      },
      () => {
        this.apiCaller(this.state.city);
      }
    );
  };
  async componentDidMount() {
    this.apiCaller(this.state.city);
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded)
      return <h1>Check your Internet connection...and refresh.</h1>;
    else {
      return (
        <>
          <div className="app" style={{ backgroundColor: this.state.bgColor }}>
            <header className="app__header">
              <Search parentCallback={this.callbackfunction} />
            </header>
            <main
              className="app__main"
              id="test"
              style={{ backgroundColor: this.state.bgColor }}
            >
              <Current
                description={items.list[0].weather[0].description}
                tempMin={items.list[0].main.temp_min}
                tempMax={items.list[0].main.temp_max}
                pressure={items.list[0].main.pressure}
                humidity={items.list[0].main.humidity}
                src={require(`./img/weather-icons/${getImg(
                  items.list[0].weather[0].id
                )}`)}
              />
              <section className="futureWeather">
                {items.list.map((item, index) => {
                  if (index > 0 && index < 8)
                    return (
                      <Future
                        key={index}
                        temp={item.main.temp}
                        time={item.dt_txt}
                        src={require(`./img/weather-icons/${getImg(
                          item.weather[0].id
                        )}`)}
                      />
                    );
                })}
              </section>
            </main>
          </div>
        </>
      );
    }
  }
}
