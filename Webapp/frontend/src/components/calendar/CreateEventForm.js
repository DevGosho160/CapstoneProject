import React, { Component, Fragment } from 'react';
import './eventform-styles.css';

//Pop-up functionality currently follows this tutorial: https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

<div class="eventPopUp">
    <div class="formPopUp" id="eventForm">
        <form class="formContainer">
        <h2>Add Event</h2>
        <label for="participants">
                <strong>Emails for participants</strong>
        </label>
        <input type="text" id="email_participants" name="email" required></input>
            <label for="event_title">
            <strong>Event Name</strong>
            </label>
        <input type="text" id="event_title" name="title" required></input>
        <button type="confirm" class="btn">Confirm</button>
        <button type="cancel" class="btn cancel" onclick="closeEventForm()">X</button>
        </form>
    </div>
</div>
