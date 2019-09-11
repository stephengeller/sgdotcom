import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

export default class Landing extends Component {
  render() {
    return (
      <div>
        Contact details!
        <ul>
          <li>
            <Alert.Link>Email</Alert.Link>
          </li>
          <li>
            <Alert.Link>GitHub</Alert.Link>
          </li>
        </ul>
      </div>
    );
  }
}
