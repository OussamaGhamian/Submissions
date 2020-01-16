import React from "react";
export default class Search extends React.Component {
  state = {
    searchInput: "Beirut"
  };
  sendData = () => {
    this.props.parentCallback(this.state.searchInput);
  };
  render() {
    return (
      <>
        <input
          type="text"
          id="city"
          placeholder="Type a city name"
          value={this.state.searchInput}
          onChange={e => this.setState({ searchInput: e.target.value })}
        />

        <input
          type="button"
          value="FIND WEATHER"
          id="btnSearch"
          onClick={e => this.sendData()}
        />
      </>
    );
  }
}
