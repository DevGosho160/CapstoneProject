import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Profile.css'
import profileIcon from '../../images/profile.png'

// Note as of 11/29/23 @ 11:14 PM:
// Need to implement data that is specific to each user
// Need to implement profile picture that is specific to each user
// Need to format user profile better

export class Profile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div className="pt-3">
        <div class="card"> 
          <h1>Employee's Name</h1>
          <img src={ profileIcon } width="100px"/>
          <p><strong>Job Title: </strong>CEO & Founder</p>
          <p><strong>Supervising Manager: </strong>John Doe</p>
          <p><strong>Office Location: </strong>Building 1: Room 221</p>
          <p><strong>Department: </strong>Sales</p>
          <p><strong>Email: </strong>EPerson@email.com</p>
          <p><strong>Phone Number: </strong>(803)-884-9993</p>
          {/*           
          <p><button>Message {user.username} </button></p>
          <p><button>Schedule a meeting with {user.username} </button></p>
           */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
