import React from "react";
import CryptoJS from "crypto-js";
//import userService from "../Backend/Backend";
import Sociallogin from "./SocialLogin";

class Createuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event)
  {
    //alert("submit was presed");
    var strongPass = CryptoJS.MD5(this.state.password);
    alert(strongPass);
    event.preventDefault();
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
  render() {
    return (
      <div class="loginBox">
        <Sociallogin />
        <form onSubmit={this.handleSubmit}>
        <label>
        Username:
        <input type="text" onChange={this.handleUsernameChange}/>
        </label><br />
        <label>
          password
          <input type="password" onChange={this.handlePasswordChange} />
        </label><br />
        <label>
          email:
          <input type="text" onChange={this.handleEmailChange} />
        </label> <br />
        <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Createuser;
