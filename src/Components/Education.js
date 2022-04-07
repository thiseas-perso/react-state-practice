import React, { Component } from "react";

import EducationForm from "./EducationForm";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      submitedData: {
        university: "",
        diploma: "",
        dateObt: "",
      },
      edited: false,
    };
  }

  switchClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  educationHSubmitHandler = (incomingData) => {
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
          <EducationForm
            onSubmitForm={this.educationHSubmitHandler}
            edited={this.state.edited}
            data={this.state.submitedData}
          />
        )}
        {!this.state.clicked && (
          <div>
            <p>University: {this.state.submitedData.university}</p>
            <p>diploma: {this.state.submitedData.diploma}</p>
            <p>Date obtained: {this.state.submitedData.dateObt}</p>

            <button type="button" onClick={this.switchClick}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
