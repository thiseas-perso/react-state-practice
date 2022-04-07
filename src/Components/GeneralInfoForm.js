import React, { Component } from "react";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.edited) {
      this.state = {
        lastName: this.props.data.lastName,
        firstName: this.props.data.firstName,
        email: this.props.data.email,
      };
    } else {
      this.state = {
        lastName: "",
        firstName: "",
        email: "",
      };
    }
  }

  lastNameChangeHandler = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  firstNameChangeHandler = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.setState({
      lastName: "",
      firstName: "",
      email: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={this.state.lastName}
            onChange={this.lastNameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={this.state.firstName}
            onChange={this.firstNameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.emailChangeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GeneralInfoForm;
