import React from "react";
//Css
import "./styles/badge.css";
//Images
import confLogo from "../images/reactHeader.svg";
import Avatar from "../images/Avatar.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="hyg" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={Avatar} alt="Avatar" />
          <h1>
            {this.props.title}
            <br />
            {this.props.subTitle}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.autor}</div>
        </div>

        <div className="Badge__footer">#HYG</div>
      </div>
    );
  }
}

export default Badge;
