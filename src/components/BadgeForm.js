import React, { Component } from "react";

export default class BadgeForm extends Component {
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>New Attendan</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              type="text"
              name="first name"
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
