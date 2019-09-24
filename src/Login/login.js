import React from "react";
import CryptoJS from "crypto-js";
import userService from "../Backend/Backend";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.username +
        "password" +
        this.state.password
    );
    var strongPass = CryptoJS.MD5(this.state.password);
    alert("we've hashed the password" + strongPass);
    userService.Login(this.state.username, strongPass);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Login: <br />
          <label>
            Username:
            <input
              id="usernameVal"
              type="text"
              // value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              id="passwordVal"
              type="password"
              //value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
