import React, { Component, Fragment } from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import './styles.css';

function openEventForm() {
  console.log("add event pop up")
}

function openEventDescription(info) {
  console.log("event description pop up")
}

// Establishes the Calendar front-end
// Uses the JavaScript fullCalendar component and plugin for added functionality and ease
// See here: https://fullcalendar.io/
export class Calendar extends Component{
    render() {
        return(
            <Fragment>
              {/* Insert NavBar header in place of current header. */}
              <Fullcalendar //Establishes the Calendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                customButtons={{
                    addEventButton: {
                    text: 'Add Event',
                    click: openEventForm()
                  },
                }}
                headerToolbar={{
                  start: 'title',
                  center: 'today addEventButton',
                  end: 'prev,next',
                }}
                eventClick={{
                  //function: openEventDescription(info)
                }}
              />
            </Fragment>
        );
    }
  }

  export default Calendar
