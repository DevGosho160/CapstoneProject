import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import UserSettings from './UserSettings';
import NotificationSettings from './NotificationSettings';
import AccountSettings from './AccountSettings';

class Settings extends Component {
    // Component props
    static propTypes = {
        auth: PropTypes.object.isRequired,
        loadUser: PropTypes.func.isRequired,
    };
    
    // Initialize component state
    constructor(props) {
        super(props);
        this.state = {
            showNotificationSettings: false,
            showAccountSettings: false,
        };
    }

    // Lifecycle method to load user data when the component mounts
    componentDidMount() {
        this.props.loadUser();
    }

    // Below are functions to toggle the visibility of Notification Settings and Account Settings
    toggleNotificationSettings = () => {
        this.setState({
            showNotificationSettings: true,
            showAccountSettings: false,
        });
    };

    toggleAccountSettings = () => {
        this.setState({
            showAccountSettings: true,
            showNotificationSettings: false,
        });
    };

    // Function to go back and reset the visibility of Notification and Account Settings
    goBack = () => {
        this.setState({
            showNotificationSettings: false,
            showAccountSettings: false,
        });
    };

    render() {
        const { user } = this.props.auth;

        return (
            <div>
                <h1 style={{ textAlign: 'center' }} className="mb-4">
                    Settings
                </h1>
                {/* Using a Fragment to group multiple elements without introducing an additional DOM element */}
                <Fragment>
                    <div>
                        {/* Conditional rendering based on the state to show different settings components */}
                        {(!this.state.showNotificationSettings && !this.state.showAccountSettings) && (
                            <Fragment>
                                {/* UserSettings component with buttons to toggle between Account and Notification Settings */}
                                <UserSettings
                                    toggleAccountSettings={this.toggleAccountSettings}
                                    toggleNotificationSettings={this.toggleNotificationSettings}
                                />
                            </Fragment>
                        )}
                        {/* If either state is true, render the particular settings */}
                        {this.state.showAccountSettings && <AccountSettings goBack={this.goBack} />}
                        {this.state.showNotificationSettings && <NotificationSettings goBack={this.goBack} />}
                        
                    </div>
                </Fragment>
            </div>
        );
    }
}
// Mapping the 'auth' state from the Redux store to the component's props
const mapStateToProps = (state) => ({
    auth: state.auth,
});
// Connecting the component to the Redux store and mapping the loadUser action
export default connect(mapStateToProps, { loadUser })(Settings);
