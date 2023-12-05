import React, { Fragment } from 'react';

const UserSettings = ({ toggleNotificationSettings, toggleAccountSettings }) => {
    return (
        <Fragment>
            <h2> General </h2>
            {/* Toggles for various setting groups */}
            <button onClick={toggleAccountSettings}>Account Settings</button>
            <button onClick={toggleNotificationSettings}>Notification Settings</button>
            
            <button onClick={() => console.log('Logout logic')}>Logout</button>
        </Fragment>
    );
};

export default UserSettings;
