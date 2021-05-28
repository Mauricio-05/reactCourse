import React, { Component } from "react";

export default class BadgeForm extends Component {
  handleClick = (e) => {
    console.log("Has dado click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormularioEnviado");
    console.log(this.props.formValues);
  };

  render() {
    return (
      <div>
        <h1>New Attendan</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Job title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              placeholder="Enter you Job Title"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Instagram</label>
            <input
              type="text"
              name="instagram"
              onChange={this.props.onChange}
              placeholder="Enter you instagram"
              className="form-control"
              value={this.props.formValues.instagram}
            />
          </div>

          <div className="text-center">
            <button
              onClick={this.handleClick}
              className="btn btn-primary mt-4 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
