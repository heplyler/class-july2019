import React from "react";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        profile
        <button
          className="btn btn-success add-button"
          onClick={this.props.logoutHandler()}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Logout;
