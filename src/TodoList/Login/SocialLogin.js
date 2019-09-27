import React from "react";

class Sociallogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a href="" class="fb-login social-login">
          Login with Facebook
        </a>
        <a href="" class="google-login social-login">
          Login with Google
        </a>
        <p class="seperator">-OR-</p>
      </div>
    );
  }
}

export default Sociallogin;
