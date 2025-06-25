import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount() {
    //console.log("Parent did mount");
  }

  render() {
    //console.log("Parent render");
    return (
      <div>
        <User
          name={"Shivam Dubey (class)"}
          location={"Raipur (class)"}
          contact={"@shivamdubey (class)"}
        />
      </div>
    );
  }
}
/* 
Parent constructor 
Parent render

- First constructor
- First render

- Second constructor
- Second render

- Second component did mount
- Second component did mount

Parent component did mount
*/
export default About;
