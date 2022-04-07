import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.edited) {
      this.state = {
        university: this.props.data.university,
        diploma: this.props.data.diploma,
        dateObt: this.props.data.dateObt,
      };
    } else {
      this.state = {
        university: "",
        diploma: "",
        dateObt: "",
      };
    }
  }

  universityChangeHandler = (e) => {
    this.setState({
      university: e.target.value,
    });
  };
  diplomaChangeHandler = (e) => {
    this.setState({
      diploma: e.target.value,
    });
  };
  dateObtChangeHandler = (e) => {
    this.setState({
      dateObt: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      dateObt: new Date(e.target.value),
    });
    this.props.onSubmitForm(this.state);
    this.setState({
      university: "",
      diploma: "",
      dateObt: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            onChange={this.universityChangeHandler}
            value={this.state.university}
          />
        </div>
        <div>
          <label htmlFor="diploma">Diploma</label>
          <input
            type="text"
            id="diploma"
            onChange={this.diplomaChangeHandler}
            value={this.state.diploma}
          />
        </div>
        <div>
          <label htmlFor="date-obt">Date obtained</label>
          <input
            type="date"
            id="date-obt"
            onChange={this.dateObtChangeHandler}
            value={this.state.dateObt}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EducationForm;
