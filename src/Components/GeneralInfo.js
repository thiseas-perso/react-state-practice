import React, { Component } from "react";

import GeneralInfoForm from "./GeneralInfoForm";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      submitedData: {
        lastName: "",
        firstName: "",
        email: "",
      },
      edited: false,
    };
  }

  switchClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  generalInfoSubmitHandler = (incomingData) => {
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
          <GeneralInfoForm
            onSubmitForm={this.generalInfoSubmitHandler}
            edited={this.state.edited}
            data={this.state.submitedData}
          />
        )}
        {!this.state.clicked && (
          <div>
            <p>Last name: {this.state.submitedData.lastName}</p>
            <p>First name: {this.state.submitedData.firstName}</p>
            <p>Email: {this.state.submitedData.email}</p>
            <button type="button" onClick={this.switchClick}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
