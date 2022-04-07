import React, { Component } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import Education from "./Components/Education";
import Work from "./Components/Work";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {},
      education: {},
      work: {},
    };

    // this.countUp = this.countUp.bind(this);
  }
  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
