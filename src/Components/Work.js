import React, { Component } from "react";

import WorkForm from "./WorkForm";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      submitedData: {
        employer: "",
        position: "",
        dateStarted: "",
        dateEnded: "",
      },
    };
  }

  switchClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  workSubmitHandler = (incomingData) => {
    console.log(incomingData);
    this.switchClick();
    this.setState({
      submitedData: incomingData,
      edited: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.clicked && (
          <WorkForm
            onSubmitForm={this.workSubmitHandler}
            data={this.state.submitedData}
            edited={this.state.edited}
          />
        )}
        {!this.state.clicked && (
          <div>
            <p>Employer : {this.state.submitedData.employer}</p>
            <p>Position : {this.state.submitedData.position}</p>
            <p>Date Started : {this.state.submitedData.dateStarted}</p>
            <p>Date Ended : {this.state.submitedData.dateEnded}</p>
            <button type="button" onClick={this.switchClick}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Work;
