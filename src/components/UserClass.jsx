import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + "child constructor");

    this.state = {
      userInfo: {
        user: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child did mount");
    const data = await fetch(" https://api.github.com/users/shivamvvv");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    // console.log(this.props.name + "child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img src="https://avatars.githubusercontent.com/u/40643039?v=4"></img>
      </div>
    );
  }
}

export default UserClass;
