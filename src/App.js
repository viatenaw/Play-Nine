import React, { Component } from "react";
import Game from "./Game";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Game />
      </div>
    );
  }
}

export default App;
