import React, { Component } from "react";

class WorkForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.edited) {
      this.state = {
        employer: this.props.data.employer,
        position: this.props.data.position,
        dateStarted: this.props.data.dateStarted,
        dateEnded: this.props.data.dateEnded,
      };
    } else {
      this.state = {
        employer: "",
        position: "",
        dateStarted: "",
        dateEnded: "",
      };
    }
  }

  employerChangeHandler = (e) => {
    this.setState({
      employer: e.target.value,
    });
  };
  positionChangeHandler = (e) => {
    this.setState({
      position: e.target.value,
    });
  };
  dateStartedChangeHandler = (e) => {
    this.setState({
      dateStarted: e.target.value,
    });
  };
  dateEndedChangeHandler = (e) => {
    this.setState({
      dateEnded: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      dateStarted: new Date(this.state.dateStarted),
      dateEnded: new Date(this.state.dateEnded),
    });
    this.props.onSubmitForm(this.state);
    this.setState({
      employer: "",
      position: "",
      dateStarted: "",
      dateEnded: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="employer">Employer</label>
          <input
            type="text"
            id="employer"
            value={this.state.employer}
            onChange={this.employerChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            value={this.state.position}
            onChange={this.positionChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="date-started">Date Started</label>
          <input
            type="date"
            id="date-started"
            value={this.state.dateStarted}
            onChange={this.dateStartedChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="date-ended">Date Ended</label>
          <input
            type="date"
            id="date-ended"
            value={this.state.dateEnded}
            onChange={this.dateEndedChangeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default WorkForm;
