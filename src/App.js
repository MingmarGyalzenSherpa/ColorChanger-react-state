import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "white",
    };
  }

  handleClick(color) {
    this.setState({ color: color });
  }

  render() {
    return (
      <div className={"main " + this.state.color}>
        <h2> Color Changer</h2>
        <button onClick={this.handleClick.bind(this, "red")}> Red</button>
        <button onClick={this.handleClick.bind(this, "blue")}> Blue </button>
        <button onClick={this.handleClick.bind(this, "green")}> Green </button>
        <button onClick={this.handleClick.bind(this, "white")}> White</button>
      </div>
    );
  }
}

export default App;
