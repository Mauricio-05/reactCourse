import React from "react";

//componentsPages
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

//Images
import header from "../images/badge-header.svg";

//Styles
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      jobTitle: "",
      instagram: "",
    },
  };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      ...this.state.form,
    });
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                title="React"
                subTitle="RoadMap"
                jobTitle={this.state.form.jobTitle}
                autor={this.state.form.instagram}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
