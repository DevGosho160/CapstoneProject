import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Dashboard extends Component {
  // Component props
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div className="pt-3">
        <h1>
          Welcome back <strong>{user.username}</strong>.
        </h1>
      </div>
    );
  }
}

// Mapping auth state from Redux store to component prop
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// Connect component to Redux store
export default connect(mapStateToProps)(Dashboard);
