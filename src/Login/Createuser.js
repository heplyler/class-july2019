import React from "react";
//import CryptoJS from "crypto-js";
import { userService } from "../Backend/Backend";
import Sociallogin from "./SocialLogin";

class Createuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    //var strongPass = CryptoJS.MD5(this.state.password);
    userService.CreateUser(
      this.state.username,
      this.state.password,
      this.state.Email
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginBox">
        <Sociallogin />
        <form onSubmit={this.handleSubmit}>
          CreateUser: <br />
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
          <label>
            Email:
            <input
              id="emailVal"
              type="text"
              //value={this.state.password}
              onChange={this.handleEmailChange}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Createuser;
