import PropTypes from "prop-types";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Oussama Handous",
        bio: "learning some new tricks",
        imgSource: "image source not available",
        profession: "student",
        shows: false,
      },
    };
  }

  show() {
    this.setState({
      person: {
        ...this.state.person,
        shows: !this.state.person.shows,
      },
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>show</button>
        {this.state.person.shows && (
          <div>
            <ul>
              <li>name: {this.state.person.fullName}</li>
              <li>bio: {this.state.person.bio}</li>
              <li>imgSource: {this.state.person.imgSource}</li>
              <li>profession: {this.state.person.profession}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
